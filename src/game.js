import { MAPS, getMap, cleanLook } from './maps.js';
import { SKILLS, skillById, EMOTE_IDS, EMOTE_DURATION } from './skills.js';
export { MAPS, getMap } from './maps.js';
export { SKILLS, skillById, EMOTE_IDS, EMOTE_DURATION } from './skills.js';
export const UPGRADES = [
  { id: 'power', name: 'Большая пушка', symbol: '✹', desc: '+40% урона. Каждый выстрел — аргумент.' },
  { id: 'speed', name: 'Шустрые ножки', symbol: 'ϟ', desc: '+25% скорости движения и выше прыжок.' },
  { id: 'health', name: 'Пухлый герой', symbol: '♥', desc: '+45 к максимальному здоровью.' },
  { id: 'rapid', name: 'Пулемёт настроения', symbol: '≋', desc: 'На 25% меньше задержка между выстрелами.' },
  { id: 'triple', name: 'Тройные неприятности', symbol: '⋔', desc: 'Три снаряда веером. Урон каждого чуть меньше.' },
  { id: 'bounce', name: 'Рикошет!', symbol: '↝', desc: 'Пули отскакивают от укрытий и края арены.' }
];
export const RADIUS = .56;
const BODY_HEIGHT = 1.55, BULLET_RADIUS = .12, EPS = 1e-5;
export function player(i) {
  return { x: i ? 10 : -10, z: i ? -5 : 5, y: 0, vy: 0, grounded: true, jumpHeld: false, hp: 100, max: 100, speed: 5, jumpPower: 7.5, damage: 22, cool: .42, shot: 0, shield: 0, shieldCD: 0, angle: i ? -Math.PI / 2 : Math.PI / 2, score: 0, upgrades: [], triple: false, bounce: false, shots: 0, footsteps: 0, jumps: 0, shields: 0, walkDistance: 0, look: cleanLook({}, i), skills: [], skillCooldowns: [], skillHeld: [false, false, false], ready: false, casts: 0, latestCast: null, cast: null, aimPoint: null, skillReleases: 0, latestRelease: null, impulses: [], pull: null, dash: null, motion: { x: 0, z: 0, speed: 0, inputSpeed: 0 }, slow: 0, stun: 0, charm: 0, charmOwner: -1 };
}
export function state(mapId = 'cloud', rotateMaps = true, looks = [], options = {}) {
  const map = getMap(mapId);
  const s = { mapId: map.id, rotateMaps, players: [player(0), player(1)], bullets: [], effects: [], effectId: 0, projectileId: 0, phase: options.phase === 'fight' ? 'fight' : 'loadout', round: 1, loser: -1, winner: -1, time: 0, celebration: { emote: null, elapsed: 0 } };
  s.draftSeed = (Math.floor((options.random || Math.random)() * 0x100000000) >>> 0) || 0x9e3779b9;
  s.players.forEach((p, i) => { Object.assign(p, map.spawns[i]); p.look = cleanLook(looks[i], i); p.offers = dealSkillOffers(p, () => draftRandom(s)); });
  if (options.phase === 'fight') s.players.forEach(p => { p.skills = ['fireball', 'dash', 'heal']; p.skillCooldowns = [0, 0, 0]; p.ready = true; });
  return s;
}
function validPlayerIndex(s, index) { return Number.isInteger(index) && index >= 0 && index < s.players.length; }
function draftRandom(s) {
  let seed = s.draftSeed || 0x9e3779b9; seed ^= seed << 13; seed ^= seed >>> 17; seed ^= seed << 5;
  s.draftSeed = seed >>> 0; return s.draftSeed / 0x100000000;
}
export function dealSkillOffers(p, random = Math.random) {
  const pool = SKILLS.map(skill => skill.id).filter(id => !p.skills.includes(id));
  for (let i = pool.length - 1; i > 0; i--) { const j = Math.floor(random() * (i + 1)); [pool[i], pool[j]] = [pool[j], pool[i]]; }
  return pool.slice(0, 5);
}
export function equipSkill(s, index, id, slot) {
  if (!validPlayerIndex(s, index) || !skillById(id) || (s.phase !== 'loadout' && !(s.phase === 'pick' && index === s.loser))) return false;
  const p = s.players[index];
  if (!p.offers?.includes(id)) return false;
  if (p.ready && s.phase === 'loadout') return false;
  if (p.skills.includes(id)) return false;
  const at = slot === undefined || slot === null ? p.skills.length : slot;
  if (s.phase === 'loadout' && at !== 0 || s.phase === 'pick' && p.skills.length < 3 && at !== p.skills.length) return false;
  if (!Number.isInteger(at) || at < 0 || at >= 3 || at > p.skills.length) return false;
  p.skills[at] = id; p.skillCooldowns[at] = 0;
  return true;
}
export function setLoadout(s, index, ids) {
  if (s.phase !== 'loadout' || !validPlayerIndex(s, index) || s.players[index].ready || !Array.isArray(ids) || ids.length !== 1 || !skillById(ids[0]) || !s.players[index].offers?.includes(ids[0])) return false;
  s.players[index].skills = [...ids]; s.players[index].skillCooldowns = ids.map(() => 0);
  return true;
}
export function finishLoadout(s, index) {
  if (s.phase !== 'loadout' || !validPlayerIndex(s, index) || s.players[index].ready || s.players[index].skills.length !== 1 || !s.players[index].offers?.includes(s.players[index].skills[0])) return false;
  s.players[index].ready = true;
  if (s.players.every(p => p.ready)) { s.phase = 'fight'; s.time = 0; }
  return true;
}
export function selectEmote(s, index, id) {
  if (s.phase !== 'celebration' || index !== s.winner || s.celebration.emote || !EMOTE_IDS.includes(id)) return false;
  s.celebration = { emote: id, elapsed: 0, startedAt: s.celebration.startedAt ?? s.time };
  return true;
}
export function chooseRoundSkill(s, index, id, slot) {
  if (s.phase !== 'pick' || index !== s.loser) return false;
  if (id !== null && id !== undefined && !equipSkill(s, index, id, slot)) return false;
  resetRound(s); return true;
}
export function applyUpgrade(p, id) {
  if (!UPGRADES.some(c => c.id === id)) return;
  p.upgrades.push(id);
  if (id === 'power') p.damage *= 1.4;
  if (id === 'speed') { p.speed *= 1.25; p.jumpPower *= 1.12; }
  if (id === 'health') p.max += 45;
  if (id === 'rapid') p.cool = Math.max(.07, p.cool * .75);
  if (id === 'triple') p.triple = true;
  if (id === 'bounce') p.bounce = true;
}
export function resetRound(s) {
  s.bullets = []; s.effects = []; s.round++; s.phase = 'fight'; s.time = 0; s.celebration = { emote: null, elapsed: 0 }; s.winner = -1; s.loser = -1;
  if (s.rotateMaps && !s.arena) s.mapId = MAPS[(MAPS.findIndex(m => m.id === s.mapId) + 1) % MAPS.length].id;
  const map = getArena(s);
  s.players.forEach((p, i) => Object.assign(p, map.spawns[i], { offers: [], y: 0, vy: 0, grounded: true, jumpHeld: false, hp: p.max, shot: 0, shield: 0, shieldCD: 0, walkDistance: 0, slow: 0, stun: 0, charm: 0, charmOwner: -1, aimPoint: null, skillCooldowns: p.skills.map(() => 0), skillHeld: [false, false, false], cast: null, impulses: [], pull: null, dash: null, motion: { x: 0, z: 0, speed: 0, inputSpeed: 0 }, latestCast: null, latestRelease: null }));
}
export function getArena(s) { return s.arena || getMap(s.mapId); }
export function overlapsBox(x, z, radius, o) {
  const cx = Math.max(o.x - o.w / 2, Math.min(x, o.x + o.w / 2));
  const cz = Math.max(o.z - o.d / 2, Math.min(z, o.z + o.d / 2));
  return (x - cx) ** 2 + (z - cz) ** 2 < radius ** 2 - EPS;
}
// A circular character slides around the same boxes used to render the arena.
function resolveBoxes(p, obstacles) {
  for (let pass = 0; pass < 4; pass++) {
    let moved = false;
    for (const o of obstacles) {
      if (p.y >= o.height - EPS || p.y + BODY_HEIGHT <= 0) continue;
      const cx = Math.max(o.x - o.w / 2, Math.min(p.x, o.x + o.w / 2));
      const cz = Math.max(o.z - o.d / 2, Math.min(p.z, o.z + o.d / 2));
      const dx = p.x - cx, dz = p.z - cz, distance = Math.hypot(dx, dz);
      if (distance >= RADIUS - EPS) continue;
      moved = true;
      if (distance > EPS) {
        p.x += dx / distance * (RADIUS - distance + EPS);
        p.z += dz / distance * (RADIUS - distance + EPS);
      } else {
        const sides = [{ distance: p.x - (o.x - o.w / 2), x: o.x - o.w / 2 - RADIUS, axis: 'x' }, { distance: o.x + o.w / 2 - p.x, x: o.x + o.w / 2 + RADIUS, axis: 'x' }, { distance: p.z - (o.z - o.d / 2), z: o.z - o.d / 2 - RADIUS, axis: 'z' }, { distance: o.z + o.d / 2 - p.z, z: o.z + o.d / 2 + RADIUS, axis: 'z' }];
        const side = sides.sort((a, b) => a.distance - b.distance)[0]; p[side.axis] = side[side.axis];
      }
    }
    if (!moved) break;
  }
}
export function movePlayer(p, dx, dz, obstacles) {
  const steps = Math.max(1, Math.ceil(Math.hypot(dx, dz) / .18));
  for (let n = 0; n < steps; n++) { p.x += dx / steps; p.z += dz / steps; resolveBoxes(p, obstacles); }
}
// Slab intersection finds the FIRST hit along a segment, including thin walls.
export function segmentBox(from, to, o, radius = BULLET_RADIUS) {
  let enter = 0, leave = 1, nx = 0, nz = 0;
  for (const [axis, half] of [['x', o.w / 2 + radius], ['z', o.d / 2 + radius]]) {
    const delta = to[axis] - from[axis], min = o[axis] - half, max = o[axis] + half;
    if (Math.abs(delta) < EPS) { if (from[axis] < min || from[axis] > max) return null; continue; }
    let a = (min - from[axis]) / delta, b = (max - from[axis]) / delta;
    const sign = delta > 0 ? -1 : 1;
    if (a > b) [a, b] = [b, a];
    if (a >= enter) { enter = a; nx = axis === 'x' ? sign : 0; nz = axis === 'z' ? sign : 0; }
    leave = Math.min(leave, b);
    if (enter > leave) return null;
  }
  if (leave < 0 || enter > 1) return null;
  if (!nx && !nz) { const dx = to.x - from.x, dz = to.z - from.z; if (Math.abs(dx) > Math.abs(dz)) nx = -Math.sign(dx); else nz = -Math.sign(dz) || 1; }
  return { t: Math.max(0, enter), nx, nz };
}
function segmentPlayer(from, to, p, radius = BULLET_RADIUS) {
  const dx = to.x - from.x, dz = to.z - from.z, ox = from.x - p.x, oz = from.z - p.z;
  const a = dx * dx + dz * dz, b = 2 * (ox * dx + oz * dz), c = ox * ox + oz * oz - (RADIUS + radius) ** 2;
  if (c <= 0) return 0;
  const discriminant = b * b - 4 * a * c;
  if (a < EPS || discriminant < 0) return null;
  const t = (-b - Math.sqrt(discriminant)) / (2 * a);
  return t >= 0 && t <= 1 ? t : null;
}
export function clearShot(from, to, obstacles, y = .65) {
  return !obstacles.some(o => y < o.height + BULLET_RADIUS && segmentBox(from, to, o));
}
function effect(s, type, owner, data = {}) {
  const p = s.players[owner], meta = skillById(data.skill || type);
  const e = { id: ++s.effectId, type, skill: meta?.id || type, owner, x: p.x, y: p.y + .65, z: p.z, targetX: p.x, targetY: p.y + .65, targetZ: p.z, angle: p.cast?.aim ?? p.angle, color: meta?.color || '#fff0b5', radius: 1, life: .4, maxLife: .4, age: 0, phase: 'active', castSequence: p.cast?.sequence || 0, ...data };
  e.maxLife = e.life; s.effects.push(e); return e;
}
function clippedPoint(s, from, angle, distance, radius = .12, y = from.y + .85, body = false) {
  const map = getArena(s), to = { x: from.x + Math.sin(angle) * distance, z: from.z + Math.cos(angle) * distance };
  let t = 1;
  for (const o of map.obstacles) {
    if (body ? from.y >= o.height - EPS : y - radius >= o.height) continue;
    const hit = segmentBox(from, to, o, radius);
    if (hit) t = Math.min(t, Math.max(0, hit.t - .015 / Math.max(1, distance)));
  }
  for (const [axis, half] of [['x', map.width / 2 - radius - .05], ['z', map.depth / 2 - radius - .05]]) {
    if (Math.abs(to[axis]) > half) t = Math.min(t, Math.max(0, (Math.sign(to[axis]) * half - from[axis]) / (to[axis] - from[axis])));
  }
  return { x: from.x + (to.x - from.x) * t, y, z: from.z + (to.z - from.z) * t };
}
function surfaceAt(s, point, ceiling = 100) {
  let height = 0;
  for (const o of getArena(s).obstacles) if (Math.abs(point.x - o.x) <= o.w / 2 && Math.abs(point.z - o.z) <= o.d / 2 && o.height <= ceiling + EPS) height = Math.max(height, o.height);
  return height;
}
export function muzzlePoint(s, owner, angle, magic = false, radius = .12, skill = s.players[owner].cast?.id) {
  const p = s.players[owner], mouth = skill === 'tongue', side = mouth ? 0 : magic ? .3 : .60, forward = mouth ? .5 : magic ? .65 : .84;
  const desired = { x: p.x + Math.cos(angle) * side + Math.sin(angle) * forward, z: p.z - Math.sin(angle) * side + Math.cos(angle) * forward };
  const vectorAngle = Math.atan2(desired.x - p.x, desired.z - p.z);
  return clippedPoint(s, p, vectorAngle, Math.hypot(desired.x - p.x, desired.z - p.z), radius, p.y + (mouth ? .8 : .85));
}
function impulse(p, source, distance, duration = .28) {
  const dx = p.x - source.x, dz = p.z - source.z, len = Math.hypot(dx, dz) || 1;
  p.impulses.push({ type: 'knockback', vx: dx / len * distance * 2 / duration, vz: dz / len * distance * 2 / duration, life: duration, maxLife: duration });
}
function hurt(s, p, amount, source, knockback = 0) {
  if (p.shield > 0 || p.hp <= 0) return 0;
  const dealt = Math.min(p.hp, Math.max(0, amount)); p.hp -= dealt;
  if (knockback && dealt) impulse(p, source, knockback);
  return dealt;
}
function inArea(s, e, p, radius = e.radius) {
  const height = e.ground ? e.y + .65 : e.y;
  return Math.hypot(p.x - e.x, p.z - e.z) <= radius + RADIUS && Math.abs(p.y + .65 - height) < 1.6 && clearShot(e, p, getArena(s).obstacles, Math.min(height, p.y + .65));
}
function blast(s, owner, origin, radius, damage, color, knockback = 1) {
  const e = effect(s, 'explosion', owner, { ...origin, radius, color, life: .5 });
  const enemy = s.players[1 - owner]; if (inArea(s, e, enemy)) hurt(s, enemy, damage, e, knockback);
}
function projectile(s, owner, id, angle, damage, speed, data = {}, origin) {
  const meta = skillById(id), magic = ['fireball', 'frost', 'charm'].includes(id);
  const start = origin || muzzlePoint(s, owner, angle, magic, data.radius || .12);
  const b = { id: ++s.projectileId, ...start, vx: Math.sin(angle) * speed, vz: Math.cos(angle) * speed, owner, damage, life: meta ? meta.range / speed : 4.5, bounce: false, skill: id, color: meta?.color || '#fff0b5', radius: .12, age: 0, distance: 0, ...data };
  s.bullets.push(b); return b;
}
function beam(s, owner, aim, range, includeDecoys = true) {
  const start = muzzlePoint(s, owner, aim, ['vampire', 'tongue', 'lightning'].includes(s.players[owner].cast?.id));
  const point = clippedPoint(s, start, aim, range, .1, start.y), map = getArena(s);
  let hit = null, hitT = 2;
  const candidates = [{ ...s.players[1 - owner], ref: s.players[1 - owner], kind: 'player' }];
  if (includeDecoys) for (const e of s.effects) if (e.type === 'decoy' && e.owner !== owner && e.active && e.hp > 0) candidates.push({ ...e, ref: e, kind: 'decoy' });
  for (const candidate of candidates) {
    if (start.y < candidate.y || start.y > candidate.y + BODY_HEIGHT || !clearShot(start, candidate, map.obstacles, start.y)) continue;
    const t = segmentPlayer(start, point, candidate, .12);
    if (t !== null && t < hitT) { hitT = t; hit = { target: candidate.ref, kind: candidate.kind }; }
  }
  return { start, point: hit ? { x: start.x + (point.x - start.x) * hitT, y: start.y, z: start.z + (point.z - start.z) * hitT } : point, hit };
}
function hitBeam(s, result, amount, owner) {
  if (!result.hit) return 0;
  if (result.hit.kind === 'decoy') { result.hit.target.hp -= amount; return 0; }
  return hurt(s, result.hit.target, amount, result.start);
}
function castPhase(c, meta) {
  if (c.elapsed < meta.timing.preparation - EPS) { c.phase = 'preparation'; c.phaseElapsed = c.elapsed; }
  else if (c.elapsed < meta.timing.preparation + meta.timing.active - EPS) { c.phase = 'active'; c.phaseElapsed = c.elapsed - meta.timing.preparation; }
  else { c.phase = 'recovery'; c.phaseElapsed = Math.max(0, c.elapsed - meta.timing.preparation - meta.timing.active); }
}
export function castSkill(s, owner, slot) {
  if (s.phase !== 'fight' || !validPlayerIndex(s, owner) || !Number.isInteger(slot) || slot < 0 || slot >= 3) return false;
  const p = s.players[owner], meta = skillById(p.skills[slot]);
  if (!meta || p.cast || p.skillCooldowns[slot] > 0 || p.hp <= 0 || p.stun > 0) return false;
  p.skillCooldowns[slot] = meta.cooldown; p.casts++; p.latestCast = { id: meta.id, time: s.time };
  const ground = ['meteor', 'tornado', 'blackhole', 'mine', 'turret', 'banana', 'decoy'].includes(meta.id);
  const placement = ['mine', 'turret', 'banana', 'decoy'].includes(meta.id);
  const distance = ground && p.aimPoint ? Math.min(meta.range, Math.max(.8, Math.hypot(p.aimPoint.x - p.x, p.aimPoint.z - p.z))) : meta.range;
  const target = clippedPoint(s, p, p.angle, distance, placement ? meta.id === 'decoy' ? RADIUS : .3 : .12, placement ? p.y : p.y + .85, placement);
  target.y = surfaceAt(s, target, p.y + .2) + .08;
  p.cast = { id: meta.id, slot, sequence: p.casts, phase: 'preparation', elapsed: 0, phaseElapsed: 0, duration: meta.duration, fireAt: meta.timing.preparation, fired: false, startedAt: s.time, aim: p.angle, origin: { x: p.x, y: p.y, z: p.z }, target };
  return true;
}
function releaseSkill(s, owner, c, meta) {
  const p = s.players[owner], enemy = s.players[1 - owner], aim = c.aim, id = c.id;
  p.skillReleases++; p.latestRelease = { id, time: s.time, sequence: c.sequence }; c.fired = true;
  c.releaseOrigin = muzzlePoint(s, owner, aim, ['fireball', 'frost', 'charm', 'lightning', 'tongue', 'vampire'].includes(id));
  const common = { angle: aim, targetX: c.target.x, targetY: c.target.y, targetZ: c.target.z, castSequence: c.sequence };
  if (['fireball', 'frost', 'charm', 'rocket', 'shotgun', 'boomerang'].includes(id)) {
    const shots = [];
    if (id === 'fireball') shots.push(projectile(s, owner, id, aim, 30, 16, { explosion: 2, radius: .22 }));
    if (id === 'frost') shots.push(projectile(s, owner, id, aim, 20, 19, { slow: 2.5, radius: .18, knockback: .2 }));
    if (id === 'charm') shots.push(projectile(s, owner, id, aim, 5, 15, { charm: 1.2, radius: .2, knockback: 0 }));
    if (id === 'rocket') shots.push(projectile(s, owner, id, aim, 38, 12, { explosion: 2.8, knockback: 2, radius: .2 }));
    if (id === 'shotgun') for (let n = 0; n < 6; n++) shots.push(projectile(s, owner, id, aim + (n - 2.5) * .1, 9, 23, {}, c.releaseOrigin));
    if (id === 'boomerang') shots.push(projectile(s, owner, id, aim, 20, 18, { life: 2, returns: true, outboundTime: meta.range / 18, radius: .22 }));
    effect(s, 'muzzle', owner, { ...c.releaseOrigin, ...common, skill: id, radius: .3, life: .13 });
    return;
  }
  if (id === 'lightning' || id === 'laser' || id === 'tongue' || id === 'vampire') {
    const result = beam(s, owner, aim, meta.range, id !== 'vampire');
    const blocked = result.hit?.kind === 'player' && result.hit.target.shield > 0;
    const e = effect(s, id, owner, { ...result.start, ...common, targetX: result.point.x, targetY: result.point.y, targetZ: result.point.z, contact: !!result.hit && !(id === 'vampire' && blocked), blocked, draining: false, life: meta.timing.active, radius: id === 'laser' ? .12 : .2, follow: true });
    c.effectId = e.id;
    if (id === 'lightning') { if (hitBeam(s, result, 24, owner) && result.hit?.kind === 'player') result.hit.target.stun = .22; }
    if (id === 'tongue' && result.hit?.kind === 'player' && enemy.shield <= 0) {
      hurt(s, enemy, 12, result.start); enemy.pull = { type: 'tongue', owner, life: .6, speed: 11, stopDistance: 1.55 }; e.targetPlayer = 1 - owner;
    }
    return;
  }
  if (id === 'meteor') effect(s, id, owner, { ...c.target, ...common, ground: true, radius: 3.2, delay: .7, life: 1.3, active: true });
  if (id === 'fart') {
    const point = clippedPoint(s, p, aim + Math.PI, .65, .12, p.y + .25);
    effect(s, id, owner, { ...point, ...common, y: surfaceAt(s, point, p.y + .2) + .08, ground: true, radius: 3, life: 3, active: true });
  }
  if (id === 'tornado' || id === 'blackhole') effect(s, id, owner, { ...c.target, ...common, ground: true, radius: id === 'tornado' ? 2.8 : 3.8, life: id === 'tornado' ? 3 : 2.5, active: true });
  if (['mine', 'turret', 'banana', 'decoy'].includes(id)) {
    const direction = Math.atan2(c.target.x - p.x, c.target.z - p.z), distance = Math.hypot(c.target.x - p.x, c.target.z - p.z);
    const point = clippedPoint(s, p, direction, distance, id === 'decoy' ? RADIUS : .3, p.y, true), life = { mine: 12, turret: 8, banana: 9, decoy: 6 }[id];
    const groundY = surfaceAt(s, point, p.y + .05) + .05;
    effect(s, id, owner, { ...point, ...common, y: groundY, ground: true, targetX: point.x, targetY: groundY, targetZ: point.z, life, radius: id === 'mine' ? 1.4 : id === 'banana' ? .85 : RADIUS, active: true, tick: .4, triggered: false, hp: 40 });
  }
  if (id === 'dash') {
    p.dash = { aim, elapsed: 0, duration: meta.timing.active, range: meta.range, traveled: 0, hit: false };
    effect(s, id, owner, { ...common, life: meta.timing.active, follow: true, radius: .8 });
  }
  if (id === 'blink') {
    const origin = { x: p.x, y: p.y, z: p.z }, point = clippedPoint(s, p, aim, meta.range, RADIUS, p.y, true);
    p.x = point.x; p.z = point.z; resolveBoxes(p, getArena(s).obstacles);
    effect(s, id, owner, { ...origin, ...common, targetX: p.x, targetY: p.y, targetZ: p.z, life: .3 });
  }
  if (id === 'heal') effect(s, id, owner, { ...common, life: meta.timing.active + .2, radius: 1, follow: true });
  if (id === 'bubble') { p.shield = Math.max(p.shield, 2); p.shields++; effect(s, id, owner, { ...common, life: 2, radius: .95, follow: true }); }
  if (id === 'stomp') effect(s, id, owner, { ...common, y: p.y + .06, ground: true, radius: 4, life: .35, active: true, triggered: false });
  if (id === 'swap') {
    const result = beam(s, owner, aim, meta.range, false);
    if (result.hit?.kind === 'player' && enemy.shield <= 0) {
      const origin = { x: p.x, y: p.y, z: p.z }, to = { x: enemy.x, y: enemy.y, z: enemy.z };
      const location = { ...origin, vy: p.vy, grounded: p.grounded };
      Object.assign(p, { ...to, vy: enemy.vy, grounded: enemy.grounded }); Object.assign(enemy, location);
      p.impulses = []; enemy.impulses = []; p.pull = null; enemy.pull = null;
      effect(s, id, owner, { ...origin, ...common, targetX: to.x, targetY: to.y, targetZ: to.z, life: .4 });
    } else effect(s, 'miss', owner, { ...c.releaseOrigin, ...common, skill: id, life: .3, radius: .5 });
  }
}
function advanceCast(s, owner, dt) {
  const p = s.players[owner], c = p.cast; if (!c) return;
  if (p.hp <= 0 || (p.stun > 0 && !c.fired)) { p.cast = null; return; }
  const meta = skillById(c.id), previous = c.elapsed; c.elapsed += dt;
  castPhase(c, meta);
  if (!c.fired && c.elapsed >= c.fireAt - EPS) releaseSkill(s, owner, c, meta);
  const activeTime = Math.max(0, Math.min(c.elapsed - c.fireAt, meta.timing.active)) - Math.max(0, Math.min(previous - c.fireAt, meta.timing.active));
  if (activeTime > 0 && p.stun <= 0) {
    if (c.id === 'heal') p.hp = Math.min(p.max, p.hp + 35 * activeTime / meta.timing.active);
    if (c.id === 'laser' || c.id === 'vampire') {
      const result = beam(s, owner, c.aim, meta.range, c.id !== 'vampire'), e = s.effects.find(item => item.id === c.effectId);
      const dealt = hitBeam(s, result, (c.id === 'laser' ? 36 : 28) * activeTime / meta.timing.active, owner);
      if (e) Object.assign(e, { ...result.start, targetX: result.point.x, targetY: result.point.y, targetZ: result.point.z, contact: !!result.hit && (c.id !== 'vampire' || dealt > 0), blocked: result.hit?.kind === 'player' && result.hit.target.shield > 0, draining: c.id === 'vampire' && dealt > 0 });
      if (c.id === 'vampire') p.hp = Math.min(p.max, p.hp + dealt);
    }
  }
  if (c.elapsed >= c.duration - EPS) p.cast = null;
}
function tickEffects(s, dt, combat = true) {
  for (const e of [...s.effects]) {
    e.life -= dt; e.age += dt;
    const owner = s.players[e.owner];
    if (e.follow && !['tongue', 'lightning', 'laser', 'vampire'].includes(e.type)) { e.x = owner.x; e.y = owner.y + .65; e.z = owner.z; }
    if (e.type === 'tongue') { const start = muzzlePoint(s, e.owner, e.angle, true, .12, 'tongue'); Object.assign(e, start); if (Number.isInteger(e.targetPlayer)) { const target = s.players[e.targetPlayer]; e.targetX = target.x; e.targetY = target.y + .65; e.targetZ = target.z; } }
    if (!combat || !e.active) continue;
    const target = s.players[1 - e.owner], map = getArena(s);
    if (e.type === 'meteor') { e.delay -= dt; if (e.delay <= 0) { blast(s, e.owner, { x: e.x, y: e.y + .65, z: e.z }, e.radius, 40, e.color, 1.5); e.active = false; e.life = .2; } }
    if (e.type === 'fart' && inArea(s, e, target)) { hurt(s, target, 12 * dt, e); if (target.shield <= 0) target.slow = Math.max(target.slow, .25); }
    if ((e.type === 'tornado' || e.type === 'blackhole') && inArea(s, e, target) && target.shield <= 0) {
      const dx = e.x - target.x, dz = e.z - target.z, len = Math.hypot(dx, dz), strength = e.type === 'tornado' ? 2.8 : 3.8;
      if (len > .4) { const speed = Math.min(strength, (len - .4) / dt); target.fieldVX += dx / len * speed; target.fieldVZ += dz / len * speed; }
      if (e.type === 'tornado') hurt(s, target, 9 * dt, e); else target.slow = Math.max(target.slow, .15);
    }
    if (e.type === 'blackhole' && e.life <= 0) { blast(s, e.owner, { x: e.x, y: e.y + .65, z: e.z }, e.radius, 28, e.color, 1.7); e.active = false; }
    if (e.type === 'stomp' && !e.triggered && inArea(s, e, target, e.radius * Math.min(1, e.age / .24))) { hurt(s, target, 24, e, 2.3); e.triggered = true; }
    if (e.type === 'mine' && e.age >= .35 && inArea(s, e, target)) { blast(s, e.owner, { x: e.x, y: e.y + .65, z: e.z }, 2.6, 38, e.color, 1.8); e.life = 0; }
    if (e.type === 'banana' && !e.triggered && inArea(s, e, target) && target.shield <= 0) { target.slow = Math.max(target.slow, 1.5); target.stun = .2; hurt(s, target, 8, e); e.triggered = true; e.life = .35; }
    if (e.type === 'turret') {
      e.tick -= dt; const origin = { x: e.x, y: e.y + .8, z: e.z };
      if (e.tick <= 0 && target.hp > 0 && Math.hypot(e.x - target.x, e.z - target.z) < 15 && origin.y >= target.y && origin.y <= target.y + BODY_HEIGHT && clearShot(origin, target, map.obstacles, origin.y)) {
        e.tick = .65; const angle = Math.atan2(target.x - e.x, target.z - e.z), start = clippedPoint(s, origin, angle, .5, .12, origin.y);
        projectile(s, e.owner, 'turret', angle, 12, 17, { life: 15 / 17 }, start);
        effect(s, 'muzzle', e.owner, { ...start, skill: 'turret', angle, targetX: target.x, targetY: target.y + .65, targetZ: target.z, radius: .2, life: .12 });
        e.angle = angle; e.targetX = target.x; e.targetY = target.y + .65; e.targetZ = target.z;
      }
    }
    if (e.type === 'decoy' && (e.hp <= 0 || e.life <= 0)) { blast(s, e.owner, { x: e.x, y: e.y + .65, z: e.z }, 2.5, 18, e.color, 1); e.life = 0; e.active = false; }
  }
  s.effects = s.effects.filter(e => e.life > 0).slice(-128);
}
function moveBody(s, p, v, dt) {
  const map = getArena(s), old = { x: p.x, z: p.z, y: p.y };
  let dx = Math.max(-1, Math.min(1, Number(v.x) || 0)), dz = Math.max(-1, Math.min(1, Number(v.z) || 0));
  if (p.stun > 0 || p.hp <= 0) { dx = 0; dz = 0; }
  const len = Math.max(1, Math.hypot(dx, dz)), speed = p.speed * (p.slow > 0 ? .4 : 1);
  if (v.jump && !p.jumpHeld && p.grounded && p.stun <= 0 && p.hp > 0) { p.vy = p.jumpPower; p.grounded = false; p.jumps++; }
  p.jumpHeld = !!v.jump;
  p.vy -= 19 * dt; p.y += p.vy * dt;
  if (p.grounded) p.y = old.y;
  const nextY = p.y; if (p.vy < 0) p.y = Math.max(old.y, p.y);
  movePlayer(p, dx / len * speed * dt, dz / len * speed * dt, map.obstacles);
  const inputDistance = Math.hypot(p.x - old.x, p.z - old.z);
  let forceX = p.fieldVX || 0, forceZ = p.fieldVZ || 0;
  for (const item of p.impulses) { const factor = Math.max(0, (item.life - dt / 2) / item.maxLife); forceX += item.vx * factor; forceZ += item.vz * factor; item.life -= dt; }
  p.impulses = p.impulses.filter(item => item.life > EPS);
  if (p.pull) {
    const pull = p.pull, caster = s.players[pull.owner], sx = caster.x - p.x, sz = caster.z - p.z, distance = Math.hypot(sx, sz);
    if (pull.life <= 0 || caster.hp <= 0 || p.shield > 0 || Math.abs(caster.y - p.y) > 1.5 || !clearShot(p, caster, map.obstacles, Math.min(p.y, caster.y) + .65)) p.pull = null;
    else { if (distance > pull.stopDistance) { const pullSpeed = Math.min(pull.speed, (distance - pull.stopDistance) / dt); forceX += sx / distance * pullSpeed; forceZ += sz / distance * pullSpeed; } pull.life -= dt; }
  }
  if (forceX || forceZ) movePlayer(p, forceX * dt, forceZ * dt, map.obstacles);
  if (p.dash) {
    const dash = p.dash, before = { x: p.x, z: p.z }, t = Math.min(dash.duration, dash.elapsed + dt), halfway = (dash.elapsed + t) / (2 * dash.duration);
    const amount = Math.min(dash.range - dash.traveled, dash.range / dash.duration * Math.PI / 2 * Math.sin(Math.PI * halfway) * dt);
    const point = clippedPoint(s, p, dash.aim, amount, RADIUS, p.y, true);
    movePlayer(p, point.x - p.x, point.z - p.z, map.obstacles);
    const traveled = Math.hypot(p.x - before.x, p.z - before.z); dash.traveled += traveled; dash.elapsed = t;
    const enemy = s.players[p === s.players[0] ? 1 : 0];
    if (!dash.hit && Math.abs(p.y - enemy.y) < BODY_HEIGHT && segmentPlayer(before, p, enemy, RADIUS) !== null && clearShot(before, enemy, map.obstacles, p.y + .65)) { hurt(s, enemy, 20, before, 1.6); dash.hit = true; }
    if (traveled < amount * .7 || dash.elapsed >= dash.duration - EPS || dash.traveled >= dash.range - EPS) p.dash = null;
  }
  p.y = nextY; let support = 0;
  for (const o of map.obstacles) if (old.y >= o.height - EPS && p.y <= o.height && overlapsBox(p.x, p.z, RADIUS - .025, o)) support = Math.max(support, o.height);
  p.grounded = p.y <= support && p.vy <= 0;
  if (p.grounded) { p.y = support; p.vy = 0; }
  if (p.y < 0) { p.y = 0; p.vy = 0; p.grounded = true; }
  p.motion = { x: (p.x - old.x) / dt, z: (p.z - old.z) / dt, speed: Math.hypot(p.x - old.x, p.z - old.z) / dt, inputSpeed: inputDistance / dt };
  if (p.grounded) { p.walkDistance += inputDistance; while (p.walkDistance >= 1.25) { p.walkDistance -= 1.25; p.footsteps++; } }
}
function simulateBullets(s, dt) {
  const map = getArena(s);
  for (const bullet of s.bullets) {
    bullet.life -= dt; if (bullet.life <= 0) continue;
    bullet.age = (bullet.age || 0) + dt; const radius = bullet.radius || BULLET_RADIUS;
    if (bullet.returns && bullet.age >= bullet.outboundTime) {
      const owner = s.players[bullet.owner], dx = owner.x - bullet.x, dz = owner.z - bullet.z, len = Math.hypot(dx, dz);
      bullet.returning = true; if (len < .65) { bullet.life = 0; continue; }
      const speed = 18, desired = Math.atan2(dx, dz), current = Math.atan2(bullet.vx, bullet.vz), difference = Math.atan2(Math.sin(desired - current), Math.cos(desired - current));
      const aim = current + Math.max(-dt * 12, Math.min(dt * 12, difference)); bullet.vx = Math.sin(aim) * speed; bullet.vz = Math.cos(aim) * speed;
    }
    let remaining = dt;
    for (let count = 0; count < 4 && remaining > EPS && bullet.life > 0; count++) {
      const from = { x: bullet.x, z: bullet.z }, to = { x: from.x + bullet.vx * remaining, z: from.z + bullet.vz * remaining };
      let first = null;
      for (const o of map.obstacles) {
        if (bullet.y - radius >= o.height || bullet.y + radius <= 0) continue;
        const hit = segmentBox(from, to, o, radius); if (hit && (!first || hit.t < first.t)) first = { ...hit, type: 'box' };
      }
      for (const [axis, half] of [['x', map.width / 2 - radius], ['z', map.depth / 2 - radius]]) {
        if (Math.abs(to[axis]) <= half) continue; const delta = to[axis] - from[axis]; if (Math.abs(delta) < EPS) continue;
        const t = Math.max(0, (Math.sign(to[axis]) * half - from[axis]) / delta);
        if (t <= 1 && (!first || t < first.t)) first = { t, nx: axis === 'x' ? -Math.sign(to.x) : 0, nz: axis === 'z' ? -Math.sign(to.z) : 0, type: 'box' };
      }
      for (const decoy of s.effects) if (decoy.type === 'decoy' && decoy.owner !== bullet.owner && decoy.hp > 0 && decoy.active && bullet.y + radius >= decoy.y && bullet.y - radius <= decoy.y + BODY_HEIGHT) {
        const t = segmentPlayer(from, to, decoy, radius); if (t !== null && (!first || t < first.t - EPS)) first = { t, type: 'decoy', target: decoy };
      }
      const target = s.players[1 - bullet.owner], hitPreviously = bullet.returns && (bullet.returning ? bullet.hitReturning : bullet.hitOutbound);
      if (!hitPreviously && bullet.y + radius >= target.y && bullet.y - radius <= target.y + BODY_HEIGHT) {
        const t = segmentPlayer(from, to, target, radius); if (t !== null && (!first || t < first.t - EPS)) first = { t, type: 'player', target };
      }
      if (!first) { bullet.x = to.x; bullet.z = to.z; bullet.distance = (bullet.distance || 0) + Math.hypot(to.x - from.x, to.z - from.z); break; }
      bullet.x = from.x + (to.x - from.x) * first.t; bullet.z = from.z + (to.z - from.z) * first.t; remaining *= 1 - first.t;
      const position = { x: bullet.x, y: bullet.y, z: bullet.z };
      if (first.type === 'player' && first.target.shield > 0) {
        bullet.owner = 1 - bullet.owner; bullet.vx *= -1; bullet.vz *= -1;
        const speed = Math.hypot(bullet.vx, bullet.vz) || 1; bullet.x += bullet.vx / speed * .03; bullet.z += bullet.vz / speed * .03;
        effect(s, 'hit', bullet.owner, { ...position, skill: 'bubble', radius: .3, life: .2 });
      } else if (first.type === 'player') {
        if (bullet.explosion) blast(s, bullet.owner, position, bullet.explosion, bullet.damage, bullet.color, bullet.knockback ?? 1);
        else hurt(s, first.target, bullet.damage, { x: bullet.x - bullet.vx, z: bullet.z - bullet.vz }, bullet.knockback ?? .3);
        if (bullet.slow) first.target.slow = Math.max(first.target.slow, bullet.slow);
        if (bullet.charm) { first.target.charm = bullet.charm; first.target.charmOwner = bullet.owner; first.target.pull = { type: 'charm', owner: bullet.owner, life: bullet.charm, speed: 2.2, stopDistance: 1.9 }; }
        effect(s, 'hit', bullet.owner, { ...position, skill: bullet.skill, color: bullet.color, radius: .35, life: .25 });
        if (bullet.returns) { bullet[bullet.returning ? 'hitReturning' : 'hitOutbound'] = true; bullet.x += bullet.vx * .005; bullet.z += bullet.vz * .005; } else bullet.life = 0;
      } else if (first.type === 'decoy') {
        first.target.hp -= bullet.damage; if (bullet.explosion) blast(s, bullet.owner, position, bullet.explosion, bullet.damage, bullet.color, bullet.knockback ?? 1); bullet.life = 0;
        effect(s, 'hit', bullet.owner, { ...position, skill: bullet.skill, color: bullet.color, radius: .4, life: .25 });
      } else {
        effect(s, 'hit', bullet.owner, { ...position, skill: bullet.skill, color: bullet.color, radius: .25, life: .2 });
        if (bullet.returns) { bullet.returning = true; bullet.outboundTime = 0; const dot = bullet.vx * first.nx + bullet.vz * first.nz; bullet.vx -= 2 * dot * first.nx; bullet.vz -= 2 * dot * first.nz; bullet.x += first.nx * .02; bullet.z += first.nz * .02; }
        else if (bullet.bounce) { const dot = bullet.vx * first.nx + bullet.vz * first.nz; bullet.vx -= 2 * dot * first.nx; bullet.vz -= 2 * dot * first.nz; bullet.x += first.nx * .001; bullet.z += first.nz * .001; }
        else { if (bullet.explosion) blast(s, bullet.owner, position, bullet.explosion, bullet.damage, bullet.color, bullet.knockback ?? 1); bullet.life = 0; }
      }
    }
  }
  s.bullets = s.bullets.filter(b => b.life > 0);
}
function simulate(s, inputs, dt) {
  const map = getArena(s), before = s.players.map(p => ({ x: p.x, z: p.z })); s.time += dt;
  for (let i = 0; i < 2; i++) {
    const p = s.players[i], v = inputs[i] || {}; p.fieldVX = 0; p.fieldVZ = 0;
    for (const timer of ['shot', 'shield', 'shieldCD', 'slow', 'stun', 'charm']) p[timer] = Math.max(0, p[timer] - dt);
    p.skillCooldowns = p.skillCooldowns.map(cd => Math.max(0, cd - dt));
    if (Number.isFinite(v.angle)) p.angle = v.angle;
    if (Number.isFinite(v.aimX) && Number.isFinite(v.aimZ)) p.aimPoint = { x: Math.max(-map.width / 2 + .1, Math.min(map.width / 2 - .1, v.aimX)), z: Math.max(-map.depth / 2 + .1, Math.min(map.depth / 2 - .1, v.aimZ)) };
    for (let slot = 0; slot < 3; slot++) { const held = !!v.skills?.[slot]; if (held && !p.skillHeld[slot]) castSkill(s, i, slot); p.skillHeld[slot] = held; }
    advanceCast(s, i, dt);
    if (v.shield && p.shieldCD === 0 && p.stun <= 0 && p.hp > 0) { p.shield = Math.max(p.shield, .7); p.shieldCD = 3.5; p.shields++; }
    if (v.fire && p.shot === 0 && p.stun <= 0 && p.hp > 0 && !p.cast) {
      p.shot = p.cool; p.shots++;
      const origin = muzzlePoint(s, i, p.angle);
      for (const offset of p.triple ? [-.2, 0, .2] : [0]) projectile(s, i, 'bullet', p.angle + offset, p.damage * (p.triple ? .65 : 1), 18, { bounce: p.bounce }, origin);
      effect(s, 'muzzle', i, { ...origin, skill: 'bullet', angle: p.angle, targetX: origin.x + Math.sin(p.angle), targetY: origin.y, targetZ: origin.z + Math.cos(p.angle), radius: .25, life: .12 });
    }
  }
  tickEffects(s, dt);
  for (let i = 0; i < 2; i++) moveBody(s, s.players[i], inputs[i] || {}, dt);
  const [a, b] = s.players;
  if (Math.abs(a.y - b.y) < BODY_HEIGHT) {
    const dx = b.x - a.x, dz = b.z - a.z, distance = Math.hypot(dx, dz);
    if (distance < RADIUS * 2) { const nx = distance > EPS ? dx / distance : 1, nz = distance > EPS ? dz / distance : 0, push = (RADIUS * 2 - distance) / 2 + EPS; movePlayer(a, -nx * push, -nz * push, map.obstacles); movePlayer(b, nx * push, nz * push, map.obstacles); }
  }
  simulateBullets(s, dt);
  s.players.forEach((p, i) => { p.motion.x = (p.x - before[i].x) / dt; p.motion.z = (p.z - before[i].z) / dt; p.motion.speed = Math.hypot(p.motion.x, p.motion.z); });
  for (const e of s.effects) {
    const owner = s.players[e.owner];
    if (e.follow && !['tongue', 'lightning', 'laser', 'vampire'].includes(e.type)) { e.x = owner.x; e.y = owner.y + .65; e.z = owner.z; }
    if (e.type === 'tongue' && Number.isInteger(e.targetPlayer)) { Object.assign(e, muzzlePoint(s, e.owner, e.angle, true, .12, 'tongue')); const target = s.players[e.targetPlayer]; e.targetX = target.x; e.targetY = target.y + .65; e.targetZ = target.z; }
  }
  for (const p of s.players) if (Math.abs(p.x) > map.width / 2 + .4 || Math.abs(p.z) > map.depth / 2 + .4) p.hp = 0;
  const loser = s.players.findIndex(p => p.hp <= 0);
  if (loser !== -1) {
    s.players[loser].offers = dealSkillOffers(s.players[loser], () => draftRandom(s));
    s.loser = loser; s.winner = 1 - loser; s.players[s.winner].score++; s.phase = 'celebration'; s.celebration = { emote: null, elapsed: 0, startedAt: s.time }; s.bullets = []; s.effects = s.effects.filter(e => !e.active);
    for (const p of s.players) { p.cast = null; p.dash = null; p.pull = null; p.impulses = []; p.motion = { x: 0, z: 0, speed: 0, inputSpeed: 0 }; }
  }
}
export function step(s, inputs = [{}, {}], dt) {
  if (!Number.isFinite(dt) || dt <= 0) return;
  if (s.phase === 'celebration') {
    s.time += dt; tickEffects(s, dt, false);
    if (s.celebration.emote) { s.celebration.elapsed += dt; if (s.celebration.elapsed >= EMOTE_DURATION - EPS) s.phase = s.players[s.winner].score >= 5 ? 'over' : 'pick'; }
    return;
  }
  if (s.phase !== 'fight') return;
  const count = Math.max(1, Math.ceil(Math.min(dt, .25) / (1 / 120)));
  for (let i = 0; i < count && s.phase === 'fight'; i++) simulate(s, inputs, Math.min(dt, .25) / count);
}
// A real battle fixture. Preview controllers provide normal combat inputs only.
export function createSkillDemo(id) {
  const meta = skillById(id); if (!meta) throw new Error('Unknown skill: ' + id);
  const s = state('cloud', false, [], { phase: 'fight' });
  s.arena = { id: 'demo', width: 24, depth: 18, obstacles: [], spawns: [{ x: -4, z: 0 }, { x: 4, z: 0 }] };
  if (id === 'boomerang') s.arena.obstacles.push({ x: 5, z: 0, w: .8, d: 2, height: 1.4, kind: 'crate' });
  const distance = { meteor: 7, tornado: 5, blackhole: 6, tongue: 6, charm: 5, mine: 5, banana: 5, decoy: 4, bubble: 6, fart: 2, turret: 6 }[id] || 3.5;
  Object.assign(s.players[0], { x: -4, y: 0, z: 0, angle: Math.PI / 2, skills: [id], skillCooldowns: [0] });
  Object.assign(s.players[1], { x: -4 + distance, y: 0, z: 0, angle: -Math.PI / 2, skills: [], skillCooldowns: [] });
  if (id === 'tornado' || id === 'blackhole') { s.players[1].x += id === 'tornado' ? 1.4 : 1.8; s.players[1].z = .6; }
  if (id === 'heal' || id === 'vampire') s.players[0].hp = 45;
  if (id === 'turret') s.players[1].hp = s.players[1].max = 250;
  return s;
}
