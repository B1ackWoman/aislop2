import { test } from 'node:test';
import assert from 'node:assert/strict';
import { state as createState, step, applyUpgrade, resetRound, selectEmote, MAPS, getMap, overlapsBox, RADIUS } from '../src/game.js';
import { cleanLook } from '../src/maps.js';
const idle = [{}, {}];
const state = (map = 'cloud', rotate = true, looks = []) => createState(map, rotate, looks, { phase: 'fight' });
function bullet(overrides = {}) { return { x: 5, z: -2, y: .65, vx: 0, vz: 18, owner: 0, damage: 22, life: 4.5, bounce: false, ...overrides }; }
function simulate(s, inputs, seconds) { for (let n = 0; n < Math.ceil(seconds * 120); n++) step(s, inputs, 1 / 120); }

test('projectiles damage opponent, resolve a round and count actual shots', () => {
  const s = state('cloud', false); Object.assign(s.players[0], { x: 10, z: -2 }); Object.assign(s.players[1], { x: 10, z: 1 });
  simulate(s, [{ angle: 0, fire: true }, {}], 3);
  assert.equal(s.phase, 'celebration'); assert.equal(s.loser, 1); assert.equal(s.players[0].score, 1); assert.equal(s.players[0].shots, 5);
});
test('shield reflects incoming projectile without damage', () => {
  const s = state(); Object.assign(s.players[1], { x: 10, z: 1, shield: .7 }); s.bullets = [bullet({ x: 10, z: .25 })];
  step(s, idle, 1 / 60); assert.equal(s.players[1].hp, 100); assert.equal(s.bullets[0].owner, 1); assert.ok(s.bullets[0].vz < 0);
});
test('upgrades, score and appearance survive switching arena', () => {
  const s = state('cloud', true, [{ color: '#c8a3ff', hat: 'crown', face: 'goofy' }]); applyUpgrade(s.players[0], 'health'); applyUpgrade(s.players[0], 'power'); s.players[0].score = 2; resetRound(s);
  assert.equal(s.players[0].hp, 145); assert.equal(s.players[0].score, 2); assert.ok(s.players[0].damage > 30); assert.equal(s.round, 2); assert.equal(s.mapId, 'candy'); assert.equal(s.players[0].look.hat, 'crown'); assert.deepEqual({ x: s.players[0].x, z: s.players[0].z }, getMap('candy').spawns[0]);
});
test('fifth victory celebrates before ending the match', () => { const s = state(); s.players[0].score = 4; s.players[1].x = 15; step(s, idle, 1 / 60); assert.equal(s.phase, 'celebration'); assert.equal(s.winner, 0); selectEmote(s, 0, 'jackpot'); simulate(s, idle, 8.1); assert.equal(s.phase, 'over'); });
test('circle slides along a wall instead of cancelling diagonal movement', () => {
  const s = state('cloud', false); Object.assign(s.players[0], { x: 2.1, z: -1 });
  simulate(s, [{ x: -1, z: 1 }, {}], .35); assert.ok(s.players[0].z > -.1); assert.ok(s.players[0].x >= 1.5 + RADIUS - 1e-4); assert.equal(overlapsBox(s.players[0].x, s.players[0].z, RADIUS, getMap(s.mapId).obstacles[0]), false);
});
test('large movement and knockback cannot push a player through cover', () => {
  const s = state('cloud', false); Object.assign(s.players[0], { x: 3, z: 0, speed: 80 });
  step(s, [{ x: -1 }, {}], .2); assert.ok(s.players[0].x >= 2.059);
  Object.assign(s.players[0], { x: 2.1, speed: 5 }); s.bullets = [bullet({ x: 3.5, z: 0, vx: -18, vz: 0, owner: 1 })]; step(s, idle, .1);
  assert.equal(s.players[0].hp, 78); assert.ok(s.players[0].x >= 2.059);
});
test('a descending player lands on the top of a low crate', () => {
  const s = state('cloud', false); const p = s.players[0]; Object.assign(p, { x: 5, z: -3, y: 2.3, vy: -2, grounded: false });
  simulate(s, idle, .7); assert.equal(p.y, .85); assert.equal(p.grounded, true); assert.equal(p.x, 5);
});
test('jumping can reach a low crate; holding jump does not auto-repeat', () => {
  const s = state('cloud', false), p = s.players[0]; Object.assign(p, { x: 3, z: -3 });
  simulate(s, [{ x: 1, jump: true }, {}], .47); simulate(s, [{ jump: true }, {}], .6);
  assert.equal(p.y, .85); assert.equal(p.grounded, true); assert.equal(p.jumps, 1);
  step(s, idle, 1 / 60); step(s, [{ jump: true }, {}], 1 / 60); assert.equal(p.jumps, 2); assert.ok(p.y > .85);
});
test('players above a low box can pass over it, but tall walls stay solid', () => {
  const s = state('cloud', false), p = s.players[0]; Object.assign(p, { x: 3.5, z: -3, y: 1.1, vy: 0, grounded: false });
  step(s, [{ x: 1 }, {}], .1); assert.ok(p.x > 3.9);
  Object.assign(p, { x: 2.3, z: 0, y: 1.35, vy: 0, grounded: false }); step(s, [{ x: -1 }, {}], .1); assert.ok(p.x >= 2.059);
});
test('swept projectile hits cover even at extreme velocity', () => {
  const s = state('cloud', false); s.bullets = [bullet({ x: -4, z: 0, vx: 1000, vz: 0 })]; step(s, idle, 1 / 60); assert.equal(s.bullets.length, 0);
});
test('cover blocks damage to an enemy behind it', () => {
  const s = state('cloud', false); Object.assign(s.players[1], { x: 4, z: 0 }); s.bullets = [bullet({ x: -4, z: 0, vx: 1000, vz: 0 })]; step(s, idle, 1 / 60); assert.equal(s.players[1].hp, 100);
});
test('ricochet reflects the hit face and continues remaining travel outside the box', () => {
  const s = state('cloud', false); s.bullets = [bullet({ x: 3, z: -3, vx: 18, vz: 0, bounce: true })]; step(s, idle, .1);
  assert.equal(s.bullets.length, 1); assert.ok(s.bullets[0].vx < 0); assert.ok(s.bullets[0].x < 3.88); assert.equal(s.bullets[0].vz, 0);
});
test('bullets above a crate do not collide with its side', () => { const s = state('cloud', false); s.bullets = [bullet({ x: 3, z: -3, y: 1.2, vx: 18, vz: 0 })]; step(s, idle, .2); assert.equal(s.bullets.length, 1); assert.ok(s.bullets[0].x > 6); });
test('swept projectile also detects an opponent between endpoints', () => {
  const s = state('cloud', false); Object.assign(s.players[1], { x: 10, z: 0 }); s.bullets = [bullet({ x: 10, z: -4, vz: 1000 })]; step(s, idle, 1 / 60); assert.equal(s.players[1].hp, 78);
});
test('player bodies separate and cannot occupy the same space', () => {
  const s = state(); Object.assign(s.players[0], { x: 10, z: 0 }); Object.assign(s.players[1], { x: 10, z: 0 }); step(s, idle, 1 / 60); assert.ok(Math.hypot(s.players[0].x - s.players[1].x, s.players[0].z - s.players[1].z) >= RADIUS * 2 - .001);
});
test('no footsteps when moving into a wall or while airborne', () => {
  const s = state('cloud', false), p = s.players[0]; Object.assign(p, { x: 2.06, z: 0 }); simulate(s, [{ x: -1 }, {}], 2); assert.equal(p.footsteps, 0);
  Object.assign(p, { x: 10, z: 0, y: 4, grounded: false, vy: 0 }); simulate(s, [{ z: 1 }, {}], .3); assert.equal(p.footsteps, 0);
});
test('all map spawns are clear and a fixed map stays fixed', () => {
  for (const map of MAPS) for (const spawn of map.spawns) assert.equal(map.obstacles.some(o => overlapsBox(spawn.x, spawn.z, RADIUS, o)), false);
  const s = state('harbor', false); resetRound(s); assert.equal(s.mapId, 'harbor');
});
test('appearance from a peer is validated against known options', () => { assert.deepEqual(cleanLook({ color: '<script>', hat: 'evil', face: {} }, 1), { color: '#ff8875', hat: 'none', face: 'happy' }); });
