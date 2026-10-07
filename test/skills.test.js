import { test } from 'node:test';
import assert from 'node:assert/strict';
import { state, step, SKILLS, skillById, EMOTE_IDS, EMOTE_DURATION, setLoadout, equipSkill, finishLoadout, castSkill, chooseRoundSkill, selectEmote, overlapsBox, getMap, RADIUS, createSkillDemo, muzzlePoint } from '../src/game.js';
const idle = [{}, {}];
function simulate(s, seconds, inputs = idle) { for (let n = 0; n < Math.ceil(seconds * 120); n++) step(s, inputs, 1 / 120); }
function battle(id, distance = 3) {
  const s = state('cloud', false, [], { phase: 'fight' });
  Object.assign(s.players[0], { x: 10, z: -4, angle: 0, skills: [id], skillCooldowns: [0] });
  Object.assign(s.players[1], { x: 10, z: -4 + distance });
  return s;
}
function castAndRun(s, duration) { assert.equal(castSkill(s, 0, 0), true); simulate(s, duration); return s; }
const near = (actual, expected, tolerance = .001) => assert.ok(Math.abs(actual - expected) <= tolerance, `${actual} ≈ ${expected}`);

test('all 24 skills expose authoritative three-phase timings; emotes last eight seconds', () => {
  assert.equal(SKILLS.length, 24); assert.equal(new Set(SKILLS.map(s => s.id)).size, 24); assert.equal(EMOTE_IDS.length, 17); assert.equal(EMOTE_DURATION, 8);
  for (const s of SKILLS) { assert.equal(skillById(s.id), s); assert.ok(s.cooldown > s.duration); for (const phase of ['preparation', 'active', 'recovery']) assert.ok(s.timing[phase] > 0); near(s.duration, s.timing.preparation + s.timing.active + s.timing.recovery); }
});
test('both players choose exactly one of five offered skills before combat starts', () => {
  const s = state(); assert.equal(s.phase, 'loadout');
  for(const p of s.players) {assert.equal(p.offers.length,5);assert.equal(new Set(p.offers).size,5);}
  const first=s.players[0].offers[0], second=s.players[1].offers[0], outside=SKILLS.find(skill=>!s.players[0].offers.includes(skill.id)).id;
  assert.equal(finishLoadout(s,0),false);assert.equal(setLoadout(s,0,[]),false);assert.equal(setLoadout(s,0,[first,s.players[0].offers[1]]),false);assert.equal(setLoadout(s,0,[outside]),false);
  assert.equal(equipSkill(s,0,first),true);assert.equal(equipSkill(s,0,s.players[0].offers[1]),false);assert.equal(finishLoadout(s,0),true);assert.equal(finishLoadout(s,0),false);
  assert.equal(s.phase,'loadout');assert.equal(setLoadout(s,0,[s.players[0].offers[1]]),false);
  assert.equal(setLoadout(s,1,[second]),true);assert.equal(finishLoadout(s,1),true);assert.equal(s.phase,'fight');assert.equal(s.players[0].skills.length,1);assert.equal(s.players[1].skills.length,1);
});
test('all skills prepare before release, animate active and recover with serializable state', () => {
  for (const skill of SKILLS) {
    const s = createSkillDemo(skill.id), p = s.players[0];
    assert.equal(castSkill(s, 0, 0), true); assert.equal(p.cast.phase, 'preparation'); assert.equal(p.cast.aim, Math.PI / 2); assert.equal(p.skillReleases, 0); assert.equal(s.effects.length, 0); assert.equal(s.bullets.length, 0);
    simulate(s, skill.timing.preparation / 2); assert.equal(p.cast.phase, 'preparation', skill.id); assert.equal(p.skillReleases, 0, skill.id);
    simulate(s, skill.timing.preparation / 2 + .012); assert.equal(p.cast.phase, 'active', skill.id); assert.equal(p.cast.fired, true, skill.id); assert.equal(p.skillReleases, 1, skill.id); assert.equal(p.latestRelease.id, skill.id);
    assert.ok(s.effects.some(e => e.skill === skill.id), skill.id);
    for (const e of s.effects) for (const key of ['id', 'type', 'owner', 'x', 'y', 'z', 'targetX', 'targetY', 'targetZ', 'color', 'radius', 'life', 'maxLife', 'castSequence']) assert.ok(e[key] !== undefined, `${skill.id}: ${key}`);
    assert.doesNotThrow(() => JSON.parse(JSON.stringify(s)), skill.id);
    simulate(s, skill.timing.active); assert.equal(p.cast.phase, 'recovery', skill.id);
    simulate(s, skill.timing.recovery + .02); assert.equal(p.cast, null, skill.id); assert.equal(p.casts, 1, skill.id); assert.equal(p.skillReleases, 1, skill.id);
  }
});
test('holding an ability does not re-cast after cooldown; a fresh press is required', () => {
  const s = battle('fireball'); s.players[1].hp = s.players[1].max = 1000;
  simulate(s, 11, [{ skills: [true] }, {}]); assert.equal(s.players[0].casts, 1); assert.equal(s.players[0].skillReleases, 1); assert.equal(s.players[0].skillCooldowns[0], 0);
  step(s, idle, 1 / 120); step(s, [{ skills: [true] }, {}], 1 / 120); assert.equal(s.players[0].casts, 2);
  assert.equal(castSkill(s, 0, 0), false); assert.equal(castSkill(s, 0, 3), false); assert.equal(castSkill(s, 4, 0), false);
});
test('cast aim stays fixed while input can still move and aim elsewhere during preparation', () => {
  const s = battle('fireball'); castSkill(s, 0, 0); const target = { ...s.players[0].cast.target };
  simulate(s, .3, [{ x: 1, angle: Math.PI }, {}]); const p = s.players[0], b = s.bullets[0];
  assert.ok(p.x > 11); assert.equal(p.angle, Math.PI); assert.equal(p.cast.aim, 0); assert.deepEqual(p.cast.target, target); assert.ok(b.vz > 0); near(b.vx, 0); assert.ok(b.x > 11);
  assert.equal(s.effects.find(e => e.type === 'muzzle').z, p.cast.releaseOrigin.z);
});
test('mouse ground target controls placement, is locked during preparation and respects range', () => {
  for (const id of ['meteor', 'tornado', 'blackhole', 'mine', 'turret', 'banana', 'decoy']) {
    const s = createSkillDemo(id), p = s.players[0], distance = Math.min(1.2, skillById(id).range);
    step(s, [{ angle: Math.PI / 2, aimX: p.x + distance, aimZ: 0, skills: [true] }, {}], 1 / 120);
    const point = { ...p.cast.target }; near(point.x, -4 + distance); near(point.z, 0);
    simulate(s, skillById(id).timing.preparation + .02, [{ z: -1, angle: Math.PI, aimX: 100, aimZ: 100 }, {}]);
    const e = s.effects.find(e => e.type === id); assert.ok(e, id); near(e.x, point.x); near(e.z, point.z);
  }
  const s = createSkillDemo('meteor'); step(s, [{ aimX: 1e6, aimZ: 0 }, {}], 1 / 120); castSkill(s, 0, 0); near(s.players[0].cast.target.x - s.players[0].x, 7);
});
test('projectiles deal damage only after preparation and travel; charm never replaces movement input', () => {
  for (const id of ['fireball', 'frost', 'charm', 'rocket', 'shotgun', 'boomerang']) {
    const s = battle(id); castSkill(s, 0, 0); simulate(s, skillById(id).timing.preparation - .025); assert.equal(s.players[1].hp, 100, id);
    simulate(s, .35); assert.ok(s.players[1].hp < 100, id); if (id === 'fireball') assert.equal(s.players[1].hp, 70); if (id === 'rocket') assert.equal(s.players[1].hp, 62); if (id === 'frost') assert.ok(s.players[1].slow > 0); if (id === 'charm') assert.ok(s.players[1].charm > 0);
  }
  const charm = battle('charm', 5); castAndRun(charm, .85); const z = charm.players[1].z;
  simulate(charm, .3, [{}, { z: 1 }]); assert.ok(charm.players[1].z > z, 'full speed input can resist the weaker attraction');
  simulate(charm, 2); const settled = charm.players[1].z; simulate(charm, 2); near(charm.players[1].z, settled); assert.equal(charm.players[1].pull, null);
});
test('lightning fires once, laser channels and tongue pulls continuously instead of teleporting', () => {
  const lightning = battle('lightning'); castAndRun(lightning, .35); assert.equal(lightning.players[1].hp, 76); assert.ok(lightning.players[1].stun > 0);
  const laser = battle('laser'); castAndRun(laser, .5); assert.ok(laser.players[1].hp > 64 && laser.players[1].hp < 100); simulate(laser, .35); near(laser.players[1].hp, 64);
  const tongue = battle('tongue', 6); castSkill(tongue, 0, 0); const initial = tongue.players[1].z; simulate(tongue, .3); assert.equal(tongue.players[1].hp, 88); assert.ok(tongue.players[1].z > initial - .4, 'first pull step is small'); simulate(tongue, .55); assert.ok(tongue.players[1].z < -2); simulate(tongue, 1); const settled = tongue.players[1].z; simulate(tongue, 1); near(tongue.players[1].z, settled);
});
test('meteor telegraphs before impact; clouds and gravitational zones use finite forces', () => {
  const meteor = battle('meteor', 7); castAndRun(meteor, 1); assert.equal(meteor.players[1].hp, 100); simulate(meteor, .4); assert.equal(meteor.players[1].hp, 60);
  const fart = battle('fart', 2); castAndRun(fart, 1.4); assert.ok(fart.players[1].hp < 90); assert.ok(fart.players[1].slow > 0);
  const tornado = battle('tornado', 4); const z = tornado.players[1].z; castAndRun(tornado, .9); assert.ok(tornado.players[1].hp < 100); assert.ok(tornado.players[1].z > z); simulate(tornado, 4); const end = tornado.players[1].z; simulate(tornado, 1); near(tornado.players[1].z, end);
  const hole = battle('blackhole', 5); castAndRun(hole, 3.1); near(hole.players[1].hp, 72);
});
test('dash covers distance over time; only blink and swap intentionally teleport', () => {
  const dash = battle('dash'); castSkill(dash, 0, 0); simulate(dash, .17); assert.ok(dash.players[0].z < -3.8); simulate(dash, .37); assert.equal(dash.players[1].hp, 80); assert.ok(dash.players[0].z > 0); const z = dash.players[0].z; simulate(dash, 1); near(dash.players[0].z, z);
  const blink = battle('blink'); castAndRun(blink, .26); near(blink.players[0].z, 3);
  const swap = battle('swap'); castAndRun(swap, .39); near(swap.players[0].z, -1); near(swap.players[1].z, -4);
  const clear = createSkillDemo('dash'); clear.players[1].x = 9; castAndRun(clear, 1); near(clear.players[0].x, 1, .02);
});
test('healing is gradual, bubble follows its owner and stomp knocks back over time', () => {
  const heal = battle('heal'); heal.players[0].hp = 40; castAndRun(heal, .6); assert.ok(heal.players[0].hp > 40 && heal.players[0].hp < 75); simulate(heal, .5); near(heal.players[0].hp, 75);
  const bubble = battle('bubble'); castAndRun(bubble, .24); const e = bubble.effects.find(e => e.type === 'bubble'); assert.ok(bubble.players[0].shield > 1.9); simulate(bubble, .4, [{ x: 1 }, {}]); near(e.x, bubble.players[0].x, .05);
  const stomp = battle('stomp'); const z = stomp.players[1].z; castAndRun(stomp, .52); assert.equal(stomp.players[1].hp, 76); assert.ok(stomp.players[1].z < z + .4); simulate(stomp, .4); assert.ok(stomp.players[1].z > z + 2);
});
test('mine arms before triggering, turret shoots without relocating owner and banana is consumed', () => {
  const mine = battle('mine', 1.5); castAndRun(mine, .5); assert.equal(mine.players[1].hp, 100); simulate(mine, .3); assert.equal(mine.players[1].hp, 62);
  const turret = battle('turret'); castAndRun(turret, 1.5); assert.ok(turret.players[1].hp < 100); near(turret.players[0].x, 10); near(turret.players[0].z, -4); assert.equal(turret.players[0].motion.speed, 0);
  const banana = battle('banana', 2); castAndRun(banana, .3); assert.equal(banana.players[1].hp, 92); assert.ok(banana.players[1].slow > 0); simulate(banana, .5); assert.ok(!banana.effects.some(e => e.type === 'banana'));
});
test('vampire drains over its active phase and fails when aimed away', () => {
  const vampire = battle('vampire'); vampire.players[0].hp = 40; castAndRun(vampire, .5); assert.ok(vampire.players[0].hp > 40 && vampire.players[0].hp < 68); simulate(vampire, .35); near(vampire.players[0].hp, 68); near(vampire.players[1].hp, 72);
  const miss = battle('vampire'); miss.players[0].angle = Math.PI; miss.players[0].hp = 40; castAndRun(miss, 1); assert.equal(miss.players[0].hp, 40); assert.equal(miss.players[1].hp, 100);
  const blocked = battle('vampire'); blocked.players[0].hp = 40; blocked.players[1].shield = 2; castAndRun(blocked, .5); assert.equal(blocked.players[0].hp, 40); assert.equal(blocked.players[1].hp, 100); const e = blocked.effects.find(e => e.type === 'vampire'); assert.equal(e.contact, false); assert.equal(e.draining, false); assert.equal(e.blocked, true);
});
test('decoy is deployed after preparation, intercepts shots and bursts when destroyed', () => {
  const s = battle('decoy'); castAndRun(s, .45);
  s.bullets.push({ id: 999, x: 10, z: -1, y: .85, vx: 0, vz: -18, owner: 1, damage: 50, life: 2, skill: 'bullet', color: '#fff0b5' });
  simulate(s, .15); assert.equal(s.players[0].hp, 100); assert.ok(s.effects.some(e => e.type === 'explosion')); assert.ok(!s.effects.some(e => e.type === 'decoy'));
});
test('all idle casts leave the caster still unless the chosen skill moves them', () => {
  for (const skill of SKILLS.filter(skill => !['dash', 'blink', 'swap'].includes(skill.id))) {
    const s = createSkillDemo(skill.id), p = s.players[0]; const original = { x: p.x, z: p.z }; castAndRun(s, 5); near(p.x, original.x); near(p.z, original.z); assert.equal(p.motion.inputSpeed, 0, skill.id);
  }
  const s = battle('heal'); simulate(s, 20); near(s.players[0].x, 10); near(s.players[0].z, -4); assert.equal(s.players[0].motion.speed, 0);
});
test('magic, attraction, channel beams, fields, swap and movement respect cover', () => {
  for (const id of ['fireball', 'frost', 'lightning', 'laser', 'charm', 'tongue', 'vampire', 'swap', 'stomp', 'fart']) {
    const s = battle(id); Object.assign(s.players[0], { x: -2.2, z: 0, angle: Math.PI / 2 }); Object.assign(s.players[1], { x: 2.2, z: 0 });
    castAndRun(s, 1.5); assert.equal(s.players[1].hp, 100, id); assert.equal(s.players[1].charm, 0, id); near(s.players[1].x, 2.2);
  }
  for (const id of ['dash', 'blink']) {
    const s = battle(id); Object.assign(s.players[0], { x: -3, z: 0, angle: Math.PI / 2 }); castAndRun(s, 1);
    assert.ok(s.players[0].x <= -1.5 - RADIUS + .0001, id); assert.equal(overlapsBox(s.players[0].x, s.players[0].z, RADIUS, getMap(s.mapId).obstacles[0]), false, id);
  }
});
test('dash and external forces preserve crate support and cannot move through tall cover', () => {
  const s = battle('dash'); Object.assign(s.players[0], { x: 5, z: -3, y: .85, vy: 0, grounded: true, angle: Math.PI / 2 });
  castAndRun(s, .25); assert.ok(s.players[0].x > 5); assert.ok(s.players[0].y >= .85);
  simulate(s, 1); assert.equal(s.players[0].y, 0); assert.equal(s.players[0].grounded, true);
  const wall = battle('heal'); Object.assign(wall.players[0], { x: 2.1, z: 0, impulses: [{ type: 'knockback', vx: -50, vz: 0, life: .3, maxLife: .3 }] });
  simulate(wall, .5); assert.ok(wall.players[0].x >= 1.5 + RADIUS - .0001); assert.equal(wall.players[0].impulses.length, 0);
  const x = wall.players[0].x; simulate(wall, 1); near(wall.players[0].x, x);
});
test('skill range and locked aim prevent damage behind or beyond the caster', () => {
  for (const id of ['fireball', 'frost', 'charm', 'shotgun', 'rocket', 'laser', 'lightning', 'tongue', 'vampire', 'swap']) {
    const s = createSkillDemo(id); const meta = skillById(id); s.arena.width = 80; s.players[1].x = s.players[0].x + meta.range + 2; castAndRun(s, 3); assert.equal(s.players[1].hp, s.players[1].max, id);
  }
});
test('muzzle is the real clipped origin; projectiles have unique IDs and wall impacts', () => {
  const s = battle('rocket'); Object.assign(s.players[0], { x: -2.2, z: 0, angle: Math.PI / 2 }); const m = muzzlePoint(s, 0, Math.PI / 2);
  assert.ok(m.x <= -1.5 - .12); step(s, [{ fire: true }, {}], 1 / 120); assert.equal(s.players[0].shots, 1); assert.ok(s.effects.some(e => e.type === 'hit'));
  const open = battle('shotgun'); castAndRun(open, .19); assert.equal(open.bullets.length, 6); assert.equal(new Set(open.bullets.map(b => b.id)).size, 6);
});
test('winner alone chooses an eight second emote; loser alone replaces one skill afterwards', () => {
  const s = battle('fireball'); s.players[0].skills = ['fireball', 'heal', 'dash']; s.players[0].skillCooldowns = [0, 0, 0]; s.players[1].skills = ['fart', 'tongue', 'charm']; s.players[1].skillCooldowns = [0, 0, 0];
  s.players[1].hp = 0; step(s, idle, .01); assert.equal(s.phase, 'celebration');
  assert.equal(selectEmote(s, 1, 'pbj'), false); assert.equal(selectEmote(s, 0, 'unknown'), false); simulate(s, 10); assert.equal(s.phase, 'celebration');
  assert.equal(selectEmote(s, 0, 'pbj'), true); assert.equal(selectEmote(s, 0, 'shuba'), false); simulate(s, 7.9); assert.equal(s.phase, 'celebration'); simulate(s, .2); assert.equal(s.phase, 'pick');
  s.players[1].offers=['laser','frost','rocket','heal','dash'];
  assert.equal(chooseRoundSkill(s, 0, 'laser', 0), false); assert.equal(chooseRoundSkill(s, 1, 'laser'), false); assert.equal(chooseRoundSkill(s, 1, 'laser', 1), true);
  assert.equal(s.phase, 'fight'); assert.equal(s.round, 2); assert.deepEqual(s.players[1].skills, ['fart', 'laser', 'charm']); assert.deepEqual(s.players[1].skillCooldowns, [0, 0, 0]); assert.equal(s.players[0].score, 1); assert.equal(s.players[1].cast, null); assert.equal(s.players[1].pull, null);
});
test('loser can keep their three skills and continue the next round', () => { const s = battle('fireball'); s.phase = 'pick'; s.loser = 1; s.winner = 0; assert.equal(chooseRoundSkill(s, 1, null), true); assert.equal(s.phase, 'fight'); });
