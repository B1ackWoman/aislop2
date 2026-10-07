import * as THREE from 'three';
import { animateCharacter } from './animations.js';
import { makeEffects } from './visuals.js';
import { skillById } from './skills.js';
const TAU = Math.PI * 2, clamp = v => Math.max(0, Math.min(1, v));
const Z = new THREE.Vector3(0, 0, 1), Y = new THREE.Vector3(0, 1, 0);
function mat(color, opacity = 1) { return new THREE.MeshBasicMaterial({ color, transparent: true, opacity, depthWrite: false }); }
function mesh(parent, geometry, material, x = 0, y = 0, z = 0) { const m = new THREE.Mesh(geometry, material); m.position.set(x, y, z); parent.add(m); return m; }
function dispose(group) { const gs = new Set(), ms = new Set(); group.traverse(o => { if (o.geometry) gs.add(o.geometry); if (o.material) for (const m of Array.isArray(o.material) ? o.material : [o.material]) ms.add(m); }); gs.forEach(g => g.dispose()); ms.forEach(m => m.dispose()); group.clear(); }
function heart(size) { const s = new THREE.Shape(); s.moveTo(0, -.9); s.bezierCurveTo(-1.2, -.1, -1.1, .8, -.55, .8); s.bezierCurveTo(-.2, .8, 0, .55, 0, .4); s.bezierCurveTo(0, .55, .2, .8, .55, .8); s.bezierCurveTo(1.1, .8, 1.2, -.1, 0, -.9); const g = new THREE.ShapeGeometry(s, 8); g.scale(size, size, size); return g; }
function resolvedCast(cast, snapshotAge = 0) {
  if (!cast) return null; const meta = skillById(cast.id); if (!meta) return null;
  const phase = cast.phase; const phaseRemaining = Math.max(0, meta.timing[phase] - cast.phaseElapsed - .001);
  const elapsed = Math.min(meta.duration, cast.elapsed + Math.min(Math.max(0, snapshotAge), phaseRemaining));
  return { ...cast, elapsed, phase, phaseElapsed: phase === 'preparation' ? elapsed : phase === 'active' ? elapsed - meta.timing.preparation : elapsed - meta.timing.preparation - meta.timing.active };
}
// Shared by the real arena and the skill cards. poseOnly lets the main scene
// own its camera/menu/stage world transforms while using identical joint poses.
export function syncBattleCharacters(fighters, state, dt = 1 / 60, { time = state.time || 0, castSnapshotAge = 0, poseOnly = false, stageY = 0, winnerFacing = 0 } = {}) {
  const celebration = state.phase === 'celebration', emote = state.celebration?.emote;
  fighters.forEach((fighter, index) => {
    const p = state.players[index]; if (!p) return;
    if (!poseOnly) { fighter.outfit(p.look); fighter.group.visible = !celebration || index === state.winner; fighter.group.position.set(p.x, celebration ? stageY : p.y, p.z); fighter.group.rotation.y = celebration ? winnerFacing : p.cast?.aim ?? p.angle; }
    const combat = state.phase === 'fight', cast = combat ? resolvedCast(p.cast, castSnapshotAge) : null; let speed = combat ? p.motion?.inputSpeed || 0 : 0;
    const knockback = combat && p.impulses?.length > 0, charmed = combat && p.pull?.type === 'charm' && (p.motion?.speed || 0) > .12, dragged = combat && (p.pull?.type === 'tongue' || knockback || (!charmed && (p.motion?.speed || 0) > .25 && speed < .12)); if (charmed) speed = p.motion.speed;
    const mode = celebration ? emote ? 'emote' : 'idle' : state.phase !== 'fight' ? 'idle' : p.stun > 0 ? 'stun' : cast ? 'cast' : !p.grounded ? 'jump' : dragged ? 'drag' : charmed ? 'charmed' : speed > .12 ? 'walk' : 'idle';
    const move = p.motion || {}, yaw = p.cast?.aim ?? p.angle;
    animateCharacter(fighter, { mode, time: celebration ? (state.celebration?.elapsed || 0) + Math.max(0, time - (state.time || 0)) : time, cast, elapsed: cast?.elapsed, skillId: cast?.id, emoteId: emote, grounded: combat ? p.grounded : true, vy: combat ? p.vy : 0, speed, moveX: (move.x || 0) * Math.cos(yaw) - (move.z || 0) * Math.sin(yaw), moveZ: (move.x || 0) * Math.sin(yaw) + (move.z || 0) * Math.cos(yaw), dt, status: {slow:p.slow>0,knockback,charmed,dragged}, recoil: fighter.visualState.recoil || 0 });
    if (celebration) fighter.gun.visible = false;
    fighter.shield.visible = combat && p.shield > 0 && !state.effects?.some(e => e.type === 'bubble' && e.owner === index && e.life > 0);
  });
}
export function animateBattleCharacter(fighter, player, time, dt, options = {}) {
  syncBattleCharacters([fighter], { time, phase: 'fight', players: [player], effects: [] }, dt, { ...options, poseOnly: true });
}
export function makeCombatVisuals(scene, fighters) {
  const root = new THREE.Group(); root.name = 'combat-visuals'; scene.add(root);
  const effects = makeEffects(scene), bullets = new Map(), flashes = new Map(), charges = new Map(), statuses = new Map(); let lastRound = null, lastTime = -1;
  function createProjectile(b) {
    const group = new THREE.Group(); root.add(group); const color = !b.skill || b.skill === 'bullet' ? '#ff8d35' : b.color || '#ffd786', radius = Math.max(.075, b.radius || .12);
    const bright = mat(color), white = mat('#fffbe6'), glow = mat(color, .22), fade = mat(color, .55);
    const node = { group, color, radius, bright, white, glow, fade, type: b.skill || 'bullet', ornaments: [] }; if (!b.skill || b.skill === 'bullet') fade.opacity = .95;
    if (b.skill === 'frost') {
      node.core = mesh(group, new THREE.OctahedronGeometry(radius), white); node.core.rotation.z = .4;
      mesh(group, new THREE.OctahedronGeometry(radius * 1.15), glow);
      for (let i = 0; i < 3; i++) node.ornaments.push(mesh(group, new THREE.OctahedronGeometry(radius * .35), bright, (i % 2 ? -.1 : .1), i % 2 ? .06 : -.06, -.25 - i * .18));
    } else if (b.skill === 'charm') {
      node.core = mesh(group, heart(radius * .7), bright); node.core.material.side = THREE.DoubleSide;
      mesh(group, new THREE.SphereGeometry(radius * 1.4, 12, 8), glow);
      for (let i = 0; i < 3; i++) { const h = mesh(group, heart(radius * .4), fade, 0, 0, -.25 - i * .2); h.material.side = THREE.DoubleSide; node.ornaments.push(h); }
    } else if (b.skill === 'rocket') {
      node.core = mesh(group, new THREE.CapsuleGeometry(radius * .7, radius * 1.3, 4, 12), white); node.core.rotation.x = Math.PI / 2;
      mesh(group, new THREE.ConeGeometry(radius * .8, radius * 1.1, 12), bright, 0, 0, radius * 1.1).rotation.x = Math.PI / 2;
      for (let i = 0; i < 3; i++) { const fin = mesh(group, new THREE.BoxGeometry(radius * 1.8, .035, radius * 1.1), bright, 0, 0, -radius * .7); fin.rotation.z = i * Math.PI / 3; }
      node.exhaust = mesh(group, new THREE.ConeGeometry(radius * .65, .55, 10), glow, 0, 0, -.43); node.exhaust.rotation.x = -Math.PI / 2;
    } else if (b.skill === 'boomerang') {
      // A pizza slice spins around the authoritative projectile centre.
      const g = new THREE.ConeGeometry(radius * 1.1, radius * 1.7, 3); node.core = mesh(group, g, bright); node.core.rotation.x = Math.PI / 2;
      for (const [x, z] of [[-.075, -.045], [.065, -.05], [0, .09]]) node.ornaments.push(mesh(group, new THREE.SphereGeometry(.032, 8, 6), mat('#f87964'), x, .025, z));
    } else {
      node.core = mesh(group, new THREE.SphereGeometry(radius, 16, 10), b.skill === 'fireball' || b.skill === 'bullet' ? bright : white);
      if (b.skill === 'bullet') mesh(group, new THREE.SphereGeometry(radius * .55, 12, 8), white);
      mesh(group, new THREE.SphereGeometry(radius * (b.skill === 'fireball' ? 1.65 : 1.3), 12, 8), glow);
      if (b.skill === 'fireball') for (let i = 0; i < 4; i++) node.ornaments.push(mesh(group, new THREE.SphereGeometry(radius * .34, 8, 6), i % 2 ? white : bright, 0, 0, -.2 - i * .12));
      if (b.skill === 'shotgun') { const stripe = mesh(group, new THREE.TorusGeometry(radius * .78, .025, 4, 10), bright); stripe.rotation.y = .5; }
    }
    // Tail extends only behind the current simulated position, never in front
    // of a wall or into a player before the projectile actually arrives.
    node.tracer = mesh(group, new THREE.CylinderGeometry(radius * .9, .025, 1, 8), fade); node.tracer.rotation.x = Math.PI / 2;
    node.halo = mesh(group, new THREE.CylinderGeometry(radius * .85, .02, 1, 8), glow); node.halo.rotation.x = Math.PI / 2;
    return node;
  }
  function createFlash(e) {
    const group = new THREE.Group(); root.add(group); group.name = 'muzzle-flash';
    const color = skillById(e.skill)?.color || '#ffda8d', bright = mat(color), white = mat('#fffbe3'), glow = mat(color, .25);
    mesh(group, new THREE.SphereGeometry(.14, 12, 8), white);
    mesh(group, new THREE.ConeGeometry(.15, .65, 8), white, 0, 0, .2).rotation.x = Math.PI / 2;
    mesh(group, new THREE.ConeGeometry(.28, .85, 8), glow, 0, 0, .25).rotation.x = Math.PI / 2;
    for (let i = 0; i < 6; i++) { const a = i * TAU / 6; const spike = mesh(group, new THREE.ConeGeometry(.04, .32, 4), bright, Math.sin(a) * .17, Math.cos(a) * .17, .12); spike.rotation.z = -a; }
    return { group, bright, white, glow };
  }
  function createCharge(cast) { const group = new THREE.Group(); root.add(group); const color = skillById(cast.id)?.color || '#cfb4ff', glow = mat(color, .18), solid = mat(color, .75); const orb = mesh(group, new THREE.SphereGeometry(.18, 14, 10), solid); mesh(group, new THREE.SphereGeometry(.28, 12, 8), glow); let target = null; const radius = {meteor:3.2,tornado:2.8,blackhole:3.8,mine:1.4,banana:.85}[cast.id]; if (radius) { target = mesh(root, new THREE.RingGeometry(radius-.035,radius,48), glow); target.rotation.x=-Math.PI/2; } return {group,orb,target,type:cast.id}; }
  function createStatus() { const group = new THREE.Group(); root.add(group); const hearts=[],stars=[]; for(let j=0;j<3;j++){ const h=mesh(group,heart(.1),mat('#ff6faa',.9));h.material.side=THREE.DoubleSide;hearts.push(h);stars.push(mesh(group,new THREE.OctahedronGeometry(.085),mat('#ffd565'))); } return {group,hearts,stars}; }
  function remove(collection, id) { const n = collection.get(id); if (!n) return; root.remove(n.group); dispose(n.group); if(n.target){root.remove(n.target);n.target.geometry.dispose();n.target.material.dispose();} collection.delete(id); }
  function clear() { for (const key of [...bullets.keys()]) remove(bullets, key); for (const key of [...flashes.keys()]) remove(flashes, key); for (const key of [...charges.keys()]) remove(charges,key); for(const key of [...statuses.keys()])remove(statuses,key); effects.clear(); fighters.forEach(f => f.visualState.recoil = 0); lastTime = -1; lastRound = null; }
  return {
    root,
    update(state, dt = 1 / 60, { time = state?.time || 0, smooth = false } = {}) {
      if (!state || state.phase !== 'fight') { clear(); return; }
      if (lastRound !== null && (state.round !== lastRound || state.time < lastTime - .1)) clear(); lastRound = state.round; lastTime = state.time;
      const now = Number(time) || 0, present = new Set();
      for (const b of state.bullets || []) {
        if (!(b.life > 0)) continue; const id = String(b.id); present.add(id); let n = bullets.get(id); if (n && n.type !== (b.skill || 'bullet')) { remove(bullets, id); n = null; } if (!n) { n = createProjectile(b); bullets.set(id, n); }
        const target = new THREE.Vector3(b.x, b.y, b.z); if (smooth && n.hasPosition) n.group.position.lerp(target, 1 - Math.exp(-Math.max(.001, dt) * 60)); else n.group.position.copy(target); n.hasPosition = true; const velocity = new THREE.Vector3(b.vx ?? 0, 0, b.vz ?? 0); if (velocity.lengthSq() < .000001) velocity.copy(Z); const speed = velocity.length(); n.group.quaternion.setFromUnitVectors(Z, velocity.normalize());
        const travelled = Number.isFinite(b.distance) ? b.distance : speed * (b.age || 0), length = Math.min(travelled, Math.max(.4, speed * .07));
        n.tracer.scale.y = Math.max(.025, length); n.tracer.position.z = -length / 2; n.halo.scale.y = Math.max(.025, length * 1.15); n.halo.position.z = -length * .57;
        if (b.skill === 'boomerang') { n.core.rotation.z = now * 14; n.ornaments.forEach((m, i) => { const a = now * 14 + i * 2.1; m.position.set(Math.cos(a) * .08, .025, Math.sin(a) * .08); }); }
        if (b.skill === 'charm') { n.core.rotation.z = Math.sin(now * 9) * .12; n.ornaments.forEach((m, i) => { m.position.y = Math.sin(now * 8 - i) * .05; }); }
        if (b.skill === 'fireball') n.ornaments.forEach((m, i) => { const a = now * 15 + i; m.position.set(Math.sin(a) * .1, Math.cos(a) * .1, -.18 - i * .12); });
        if (n.exhaust) n.exhaust.scale.y = .8 + Math.sin(now * 30) * .15;
      }
      for (const key of [...bullets.keys()]) if (!present.has(key)) remove(bullets, key);
      const visibleFlashes = new Set(), recoil = fighters.map(f => Math.max(0, (f.visualState.recoil || 0) - dt * 7));
      for (const e of state.effects || []) {
        if (e.type !== 'muzzle' || !(e.life > 0)) continue;
        const age = Number.isFinite(e.age) ? e.age : Math.max(0, (e.maxLife || .13) - e.life), envelope = clamp(1 - age / Math.max(.08, e.maxLife || .13)); if (envelope <= 0) continue;
        const id = String(e.id); visibleFlashes.add(id); let n = flashes.get(id); if (!n) { n = createFlash(e); flashes.set(id, n); }
        const position = new THREE.Vector3(e.x, e.y, e.z), f = fighters[e.owner];
        if (f && ['bullet', 'shotgun', 'rocket'].includes(e.skill) && f.gun.visible) { const muzzle = f.muzzle.getWorldPosition(new THREE.Vector3()); if (muzzle.distanceTo(position) < .28) position.copy(muzzle); }
        n.group.position.copy(position); n.group.quaternion.setFromUnitVectors(Z, new THREE.Vector3(Math.sin(e.angle || 0), 0, Math.cos(e.angle || 0))); n.group.scale.setScalar(.6 + envelope * .7);
        n.bright.opacity = envelope; n.white.opacity = envelope; n.glow.opacity = envelope * .25;
        if (f && e.skill !== 'turret') recoil[e.owner] = Math.max(recoil[e.owner], envelope * (e.skill === 'rocket' ? 1.25 : e.skill === 'shotgun' ? 1 : .6));
      }
      for (const key of [...flashes.keys()]) if (!visibleFlashes.has(key)) remove(flashes, key);
      fighters.forEach((f, i) => { f.visualState.recoil = recoil[i]; if (f.gun.visible) f.gun.position.z -= recoil[i] * .075; });
      const presentCharges = new Set(), presentStatuses = new Set();
      state.players.forEach((p,index)=> {
        const f=fighters[index],cast=p.cast;
        if (f && cast?.phase==='preparation' && !['shotgun','rocket','laser','dash','tongue','fart'].includes(cast.id)) {
          const id=String(index);presentCharges.add(id);let n=charges.get(id);if(n&&n.type!==cast.id){remove(charges,id);n=null;}if(!n){n=createCharge(cast);charges.set(id,n);}
          const progress=clamp(cast.elapsed/Math.max(.01,cast.fireAt)),palm=f.palms[1].getWorldPosition(new THREE.Vector3());n.group.position.copy(palm);n.group.scale.setScalar(.25+progress*.75);n.orb.rotation.set(now*3,now*4,0);if(n.target)n.target.position.set(cast.target.x,cast.target.y+.02,cast.target.z);
        }
        if (f && (p.charm>0||p.stun>0)) {
          const id=String(index);presentStatuses.add(id);let n=statuses.get(id);if(!n){n=createStatus();statuses.set(id,n);}n.group.position.copy(f.group.position);n.group.position.y+=1.52;
          n.hearts.forEach((h,j)=>{h.visible=p.charm>0;const a=now*2+j*TAU/3;h.position.set(Math.sin(a)*.32,.05+Math.sin(now*3+j)*.06,Math.cos(a)*.32);h.rotation.y=-a;});
          n.stars.forEach((h,j)=>{h.visible=p.stun>0;const a=now*7+j*TAU/3;h.position.set(Math.sin(a)*.34,0,Math.cos(a)*.34);h.rotation.set(a,a,0);});
        }
      });
      for(const id of [...charges.keys()])if(!presentCharges.has(id))remove(charges,id);for(const id of [...statuses.keys()])if(!presentStatuses.has(id))remove(statuses,id);
      effects.update(state.effects || [], now);
    },
    clear,
    dispose() { clear(); effects.dispose(); scene.remove(root); }
  };
}
