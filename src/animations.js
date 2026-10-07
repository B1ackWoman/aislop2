import * as THREE from 'three';
import { poseGloves } from './character-hands.js';
import { updateLimbs } from './character-limbs.js';
import { skillById } from './skills.js';
import { EMOTES, EMOTE_DURATION, emoteFrameTime } from './emote-catalog.js';
import { sampleEmote } from './emote-choreography.js';
export { EMOTES, EMOTE_DURATION } from './emote-catalog.js';
const TAU = Math.PI * 2, clamp = t => Math.max(0, Math.min(1, t)), smooth = t => { t = clamp(t); return t * t * (3 - 2 * t); };
const sin = Math.sin, cos = Math.cos;
const down = new THREE.Vector3(0, -1, 0);
function pose() { return { pos: [0, 0, 0], rot: [0, 0, 0], torso: [0, 0, 0], torsoPos: [0, 0, 0], scale: [1, 1, 1], head: [0, 0, 0], arms: [[-.1, 0, -.15, -.2, 0], [-.1, 0, .15, -.2, 0]], legs: [[0, 0, 0, 0], [0, 0, 0, 0]], face: 0, weapon: true, guitar: false } }
function apply(c, p, w = 1) {
  const { rig, upper, body, arms, elbows, legPivots, knees, feet, gun } = c;
  rig.position.set(...p.pos.map(v => v * w)); rig.rotation.set(...p.rot.map(v => v * w));
  rig.scale.set(...p.scale.map(v => 1 + (v - 1) * w));
  upper.position.set(p.torsoPos[0] * w, .74 + p.torsoPos[1] * w, p.torsoPos[2] * w); upper.rotation.set(...p.torso.map(v => v * w)); upper.scale.set(1, 1, 1);
  body.position.set(0, .13, 0); body.rotation.set(0, 0, 0); body.scale.set(1, 1, 1); c.head.rotation.set(...p.head.map(v => v * w));
  arms.forEach((arm, i) => { const a = p.arms[i]; arm.position.set(i ? .57 : -.57, .1, 0); arm.rotation.set(a[0] * w, a[1] * w, (i ? .15 : -.15) * (1 - w) + a[2] * w); elbows[i].position.set(0, -.33, 0); elbows[i].rotation.set(a[3] * w, 0, a[4] * w); });
  legPivots.forEach((leg, i) => { const a = p.legs[i]; leg.position.set(i ? .2 : -.2, .52, 0); leg.rotation.set(a[0] * w, a[1] * w, a[2] * w); knees[i].rotation.set(a[3] * w, 0, 0); feet[i].position.set(0, 0, .07); feet[i].rotation.set(0, 0, 0); feet[i].scale.set(1, 1, 1); c.ankles[i].rotation.set(0, 0, 0); });
  gun.visible = p.weapon; gun.position.set(0, 0, 0); gun.rotation.set(Math.PI / 2, 0, 0); gun.scale.set(1, 1, .6);
  c.guitar.visible = p.guitar && w > 0; Object.entries(c.props).forEach(([id, prop]) => { prop.visible = id === p.prop && w > 0; }); Object.values(c.gunKinds).forEach(variant => variant.visible = false); c.face.scale.setScalar(1); if (c.mouth) c.mouth.scale.y = 1 + p.face * w;
}
// Analytic two-bone hand placement: fingers, weapon and muzzle stay connected.
// The ordinary shooting pose matches simulation local muzzle (.60,.85,.84).
function handAt(c, index, target, bendDirection = new THREE.Vector3(0, -1, 0)) {
  const shoulder = c.arms[index], elbow = c.elbows[index], start = shoulder.position, direction = target.clone().sub(start);
  const distance = Math.max(.015, Math.min(.679, direction.length())); direction.normalize();
  const along = (.33 ** 2 - .35 ** 2 + distance ** 2) / (2 * distance), height = Math.sqrt(Math.max(0, .33 ** 2 - along ** 2));
  const bend = bendDirection.clone().addScaledVector(direction, -bendDirection.dot(direction)).normalize();
  const upper = direction.clone().multiplyScalar(along).addScaledVector(bend, height);
  shoulder.quaternion.setFromUnitVectors(down, upper.clone().normalize());
  const lower = direction.clone().multiplyScalar(distance).sub(upper).applyQuaternion(shoulder.quaternion.clone().invert());
  elbow.quaternion.setFromUnitVectors(down, lower.normalize());
}
function holdGun(c, offset = 0) {
  c.rig.updateMatrix(); c.upper.updateMatrix(); const inverseTorso = c.upper.matrix.clone().invert().multiply(c.rig.matrix.clone().invert());
  handAt(c, 1, new THREE.Vector3(.60, .85, .41 - offset).applyMatrix4(inverseTorso), new THREE.Vector3(1, -.3, 0));
  c.gun.quaternion.copy(c.rig.quaternion).multiply(c.upper.quaternion).multiply(c.arms[1].quaternion).multiply(c.elbows[1].quaternion).invert();
  // The free arm keeps its action pose; the toy blaster is held with one hand.
}
// Two-bone leg IK keeps the planted shoe on the stage while the pelvis sways.
// Targets live in character space; root lean and crouch are inverted before IK.
function plantFeet(c, targets, weight) {
  c.rig.updateMatrix();
  const inverse = c.rig.matrix.clone().invert();
  targets.forEach((target,index) => {
    const neutral = new THREE.Vector3(index ? .2 : -.2, .09, .07);
    const point = neutral.lerp(new THREE.Vector3(...target), weight).applyMatrix4(inverse);
    const hip=c.legPivots[index],knee=c.knees[index];
    const direction=point.clone().sub(hip.position),distance=Math.max(.025,Math.min(.489,direction.length())); direction.normalize();
    const along=(.25**2-.24**2+distance**2)/(2*distance),height=Math.sqrt(Math.max(0,.25**2-along**2));
    const bend=new THREE.Vector3(0,0,1).addScaledVector(direction,-direction.z).normalize();
    const upper=direction.clone().multiplyScalar(along).addScaledVector(bend,height);
    hip.quaternion.setFromUnitVectors(down,upper.clone().normalize());
    const lower=direction.clone().multiplyScalar(distance).sub(upper).applyQuaternion(hip.quaternion.clone().invert());
    knee.quaternion.setFromUnitVectors(down,lower.normalize());
    c.ankles[index].quaternion.copy(c.rig.quaternion).multiply(hip.quaternion).multiply(knee.quaternion).invert();
  });
}
function groundSupport(c, plantedFloorRoutine=false) {
  c.rig.updateWorldMatrix(true, true); const floor = c.group.getWorldPosition(new THREE.Vector3()).y; let lowest = Infinity;
  const parts = [...c.feet, ...c.soles, c.body, ...c.head.children.filter(p => p.geometry), ...(c.hands?c.hands.flatMap(hand=>hand.parts):c.palms.flatMap(palm => palm.children))];
  for (const part of parts) {
    const e = part.matrixWorld.elements, radius = part.geometry?.parameters?.radius;
    if (Number.isFinite(radius) && part.geometry.type !== 'CapsuleGeometry') lowest = Math.min(lowest, e[13] - radius * Math.hypot(e[1], e[5], e[9]) - floor);
    else if (part.geometry) { if (!part.geometry.boundingBox) part.geometry.computeBoundingBox(); lowest = Math.min(lowest, part.geometry.boundingBox.clone().applyMatrix4(part.matrixWorld).min.y - floor); }
  }
  const lift = plantedFloorRoutine ? -lowest : Math.max(0, -lowest); if (Math.abs(lift) > .000001) c.rig.position.y += lift;
  return lift;
}
function castPose(id, cast, elapsed) {
  const p = pose(), meta = skillById(id), timing = meta?.timing || { preparation: .3, active: .35, recovery: .35 };
  const prep = timing.preparation, active = timing.active, total = prep + active + timing.recovery;
  const t = Number.isFinite(cast?.elapsed) ? cast.elapsed : elapsed;
  const wind = smooth(t / Math.max(.01, prep)), release = smooth((t - prep) / Math.max(.05, active * .55));
  const recover = 1 - smooth((t - prep - active) / Math.max(.01, timing.recovery));
  const w = wind * recover, swing = sin(release * Math.PI), held = 1 - release;
  p.weapon = ['shotgun', 'rocket', 'laser', 'turret'].includes(id);
  // Every action has its own preparation, release stroke and return to stance.
  switch (id) {
    case 'fireball': p.arms = [[-.8 * w, .15, -.6 * w, -1.1 * w, 0], [(-.6 - release * .8) * w, -.15, .2, (-1.4 + release * 1.2) * w, 0]]; p.torso[1] = -.25 * held * w; p.torso[0] = -.06 * swing; break;
    case 'frost': p.arms = [[-.3, .15, -1.15 * w, -.9 * w, 0], [-1.35 * w, -.25, .25, -.35 * w, 0]]; p.torso[2] = -.12 * w; break;
    case 'lightning': p.arms = [[-1.45 * w, .25, -.6 * w, -.3, 0], [-1.45 * w, -.25, .6 * w, -.3, 0]]; p.torso[0] = -.16 * swing; p.legs = [[0, 0, -.17, .15 * w], [0, 0, .17, .15 * w]]; break;
    case 'meteor': p.arms = [[-.15, 0, -2.65 * wind + 1.1 * release, -.45, 0], [-.15, 0, 2.65 * wind - 1.1 * release, -.45, 0]]; p.torso[0] = .12 * release * w; p.torsoPos[1] = .05 * held * w; break;
    case 'charm': p.arms = [[-.7 * w, .45, -.1, -1.6 * w, 0], [(-.5 - release * .85) * w, -.25, .1, (-1.5 + release * 1.15) * w, 0]]; p.torso[2] = -.15 * w; p.face = .45 * w; break;
    case 'tongue': p.arms = [[-.25, 0, -.65 * w, -.3, 0], [-.25, 0, .65 * w, -.3, 0]]; p.torso[0] = -.18 * release * w; p.torsoPos[2] = .12 * release * w; p.face = 1.2 * w; break;
    case 'fart': p.rot[1] = -.12 * w; p.torso[0] = .32 * w; p.arms = [[.3 * w, .2, -.25, -.4, 0], [.3 * w, -.2, .25, -.4, 0]]; p.legs = [[-.15 * w, 0, -.2, .3 * w], [-.15 * w, 0, .2, .3 * w]]; p.torsoPos[1] = -.03 * w; break;
    case 'shotgun': p.torso[0] = .07 * held * w - .13 * swing; p.legs = [[0, 0, -.12, .1], [0, 0, .15, .15]]; break;
    case 'rocket': p.torso[0] = .1 * held * w - .22 * swing; p.torso[2] = -.08 * w; p.legs = [[.1, 0, -.2, .15], [-.1, 0, .2, .18]]; break;
    case 'boomerang': p.weapon = false; p.arms = [[-.25, .2, -.5 * w, -.4, 0], [(-.2 - release * 1.1) * w, (-1.1 * held + .2 * release) * w, (1.25 * held + .15 * release) * w, (-.7 + release * .5) * w, 0]]; p.torso[1] = -.45 * held * w + .15 * release * w; break;
    case 'dash': p.arms = [[.55 * w, 0, -.4, -.5, 0], [.55 * w, 0, .4, -.5, 0]]; p.torso[0] = .35 * w; p.legs = [[-.2 * w, 0, -.12, .55 * w], [.25 * w, 0, .12, .4 * w]]; break;
    case 'blink': p.arms = [[-.2, .4, -.5 * w, -1.4 * w, 0], [-.2, -.4, .5 * w, -1.4 * w, 0]]; p.torso[0] = -.16 * w; p.scale = [1 - .06 * swing, 1 + .08 * swing, 1 - .06 * swing]; break;
    case 'heal': p.arms = [[-.5 * w, .55, .2, -1.3 * w, 0], [-.5 * w, -.55, -.2, -1.3 * w, 0]]; p.torso[0] = -.1 * w; p.face = .3 * w; break;
    case 'bubble': p.arms = [[-.2, .2, -1.5 * release * w, -.8 * held, 0], [-.2, -.2, 1.5 * release * w, -.8 * held, 0]]; p.torso[0] = -.08 * w; break;
    case 'stomp': p.arms = [[-.2, 0, -2.5 * held * w - .5 * release, -.45, 0], [-.2, 0, 2.5 * held * w + .5 * release, -.45, 0]]; p.legs = [[-.35 * held * w, 0, -.2, .7 * held * w], [-.35 * held * w, 0, .2, .7 * held * w]]; p.pos[1] = .17 * sin(wind * Math.PI) - .035 * swing; p.torso[0] = .18 * swing; break;
    case 'tornado': p.arms = [[-1.0 * w, .5 * w, -sin(t * 7) * .65 * w, -.65, 0], [-1.0 * w, -.5 * w, cos(t * 7) * .65 * w, -.65, 0]]; p.torso[1] = sin(t * 4) * .15 * w; break;
    case 'blackhole': p.arms = [[-.9 * w, .45, -.7 * w, -1.0 * held * w, 0], [-.9 * w, -.45, .7 * w, -1.0 * held * w, 0]]; p.torso[0] = -.1 * release * w; p.legs = [[0, 0, -.15, .1], [0, 0, .15, .1]]; break;
    case 'mine': p.arms = [[-.3, .1, -.4, -.5, 0], [(-1.1 * held + .15 * release) * w, -.2, .1, -.6 * held * w, 0]]; p.torso[0] = .4 * w; p.legs = [[-.3 * w, 0, -.15, .65 * w], [-.3 * w, 0, .15, .65 * w]]; break;
    case 'turret': p.torso[0] = .28 * w; p.arms = [[-1.0 * w, .1, -.2, -.5, 0], [-1.0 * w, -.1, .2, -.5, 0]]; p.legs = [[-.2 * w, 0, -.1, .4 * w], [-.2 * w, 0, .1, .4 * w]]; p.weapon = false; break;
    case 'banana': p.arms = [[-.3, 0, -.5 * w, -.6, 0], [(-.4 - release * .9) * w, -.7 * held, .7 * held * w, -.5 * held * w, 0]]; p.torso[1] = -.25 * held * w; break;
    case 'vampire': p.arms = [[-.4, .2, -.85 * w, -1.0 * w, 0], [-1.3 * w, -.25, .3, -.4, 0]]; p.torso[0] = -.13 * w; p.face = .6 * w; break;
    case 'swap': p.arms = [[-1.15 * w, .8 * held, -.6 * w, -.3, 0], [-1.15 * w, -.8 * held, .6 * w, -.3, 0]]; p.torso[1] = (.35 * held - .35 * release) * w; break;
    case 'decoy': p.arms = [[-.6 * w, .5, -.15, -1.2 * w, 0], [-.6 * w, -.5, .15, -1.2 * w, 0]]; p.torso[0] = .16 * held * w - .12 * release * w; p.face = .8 * held * w; break;
    case 'laser': p.torso[0] = -.08 * release * w; p.torso[1] = -.08 * held * w; p.legs = [[0, 0, -.12, .1], [0, 0, .12, .1]]; break;
  }
  // Decay every posed joint, including nonzero hold angles, into the neutral stance.
  if (t >= prep + active) {
    const neutral = pose();
    for (const field of ['pos', 'rot', 'torso', 'torsoPos']) p[field] = p[field].map(v => v * recover);
    p.arms = p.arms.map((a, i) => a.map((v, n) => neutral.arms[i][n] + (v - neutral.arms[i][n]) * recover));
    p.legs = p.legs.map(a => a.map(v => v * recover)); p.face *= recover;
    if (recover < .3) p.weapon = true;
  }
  const intro = smooth(t / Math.min(.12, prep)); if (intro < 1) { const neutral = pose(); for (const field of ['pos', 'rot', 'torso', 'torsoPos']) p[field] = p[field].map(v => v * intro); p.arms = p.arms.map((a, i) => a.map((v, n) => neutral.arms[i][n] + (v - neutral.arms[i][n]) * intro)); p.legs = p.legs.map(a => a.map(v => v * intro)); }
  if(['fireball','frost','lightning','meteor','heal','bubble','blackhole'].includes(id)&&t<prep+active+timing.recovery*.7)p.prop='wand';
  p.weight = clamp(t < total ? 1 : 0); return p;
}
export function animateCharacter(character, { mode = 'idle', time = 0, elapsed, emoteId = EMOTES[0].id, skillId = '', speed = 0, grounded = true, vy = 0, moveX = 0, moveZ = 0, cast = null, recoil = 0, status = {} } = {}) {
  if (!character.rig || !character.elbows) return;
  const t = mode==='emote'?emoteFrameTime(time):Number.isFinite(time)?time:0; let p = pose(), w = 1;
  if (mode === 'emote') { p = sampleEmote(emoteId, t) || pose(); w = smooth(t / .18) * smooth((EMOTE_DURATION - t) / .25); }
  else if (mode === 'cast') { p = castPose(cast?.id || skillId, cast, Number.isFinite(elapsed) ? elapsed : t); }
  else if (mode === 'stun') { p.weapon=false; p.torso=[-.2,Math.sin(t*18)*.04,Math.sin(t*24)*.055]; p.arms=[[-.25,.15,-.7,-.6,0],[-.25,-.15,.7,-.6,0]]; p.legs=[[-.23,0,-.1,.5],[-.23,0,.1,.5]]; p.face=.8; }
  else if (mode === 'drag') { const forward=Math.sign(moveZ||1),side=Math.max(-1,Math.min(1,moveX/Math.max(.2,Math.hypot(moveX,moveZ)))); p.weapon=false;p.torso=[-.2*forward,0,-side*.13];p.arms=[[-.3,.1,-.6,-.55,0],[-.3,-.1,.6,-.55,0]];p.legs=[[-.1*forward,0,-.1,.22],[-.1*forward,0,.1,.22]];if(status.knockback){p.torso[0]=-.3*forward;p.arms[0][2]=-.95;p.arms[1][2]=.95;} }
  else if (mode === 'jump' || !grounded) {
    p.arms = [[-.45, .1, -.35, -.6, 0], [-.4, -.1, .35, -.65, 0]];
    p.legs = [[-.18, 0, -.03, vy > 0 ? .6 : .25], [-.18, 0, .03, vy > 0 ? .6 : .25]]; p.torso[0] = vy > 0 ? -.06 : .06;
  } else if ((mode === 'walk' || mode === 'charmed') && speed > .12) {
    const gait = t * 9.5, amplitude = Math.min(1, speed / 5), s = sin(gait), c = cos(gait);
    p.pos[1] = Math.abs(s) * .032 * amplitude; p.torso[0] = .05 * amplitude; p.torso[2] = s * .028 * amplitude;
    p.legs = [[0, 0, 0, 0], [0, 0, 0, 0]];
    p.arms = [[-s * .35 * amplitude, 0, -.18, -.3, 0], [s * .2 * amplitude, 0, .18, -.4, 0]];
  } else { p.torsoPos[1] = sin(t * 2) * .012; p.arms[0][0] = -.12 + sin(t * 1.8) * .03; }
  if (grounded && speed > .12 && (mode === 'cast' || mode === 'walk' || mode === 'charmed')) {
    const amplitude = Math.min(1, speed / 5), step = sin(t * 9.5), forward = Math.abs(moveX) + Math.abs(moveZ) > .05 ? moveZ / Math.max(.1, Math.hypot(moveX, moveZ)) : 1, side = Math.abs(moveX) + Math.abs(moveZ) > .05 ? moveX / Math.max(.1, Math.hypot(moveX, moveZ)) : 0;
    p.legs.forEach((leg, i) => { const wave = i ? -step : step, factor = mode === 'cast' ? .65 : 1, lift = Math.abs(forward) > .1 ? -wave * Math.sign(forward) : wave * Math.sign(side || 1); leg[0] += wave * .5 * amplitude * forward * factor; leg[2] += -wave * .25 * amplitude * side * factor; leg[3] += Math.max(0, lift) * .75 * amplitude * factor; });
    if (mode === 'cast') p.pos[1] += Math.abs(step) * .018 * amplitude;
  }
  if (mode === 'charmed') { p.weapon=false; p.torso[0]+=.08;p.torso[2]+=Math.sin(t*3)*.045;p.arms[0]=[-.25,0,-.5,-.65,0];p.arms[1]=[-.25,0,.5,-.65,0];p.face=.3; }
  if (status.dragged && mode==='cast') p.torso[0]-=.1*Math.sign(moveZ||1);
  if (status.slow && speed>.12) {p.torso[0]*=.65;p.legs.forEach(leg=>{leg[0]*=.65;leg[3]+=.1;});}
  apply(character, p, w);
  if (p.weapon && mode !== 'emote') { const loading = mode === 'cast' && cast?.phase === 'preparation' ? Math.sin(clamp(cast.phaseElapsed / Math.max(.01, cast.fireAt)) * Math.PI) * .14 : 0; holdGun(character, loading + Math.max(0, recoil) * .075); if (mode === 'cast' && character.gunKinds[cast?.id || skillId]) character.gunKinds[cast?.id || skillId].visible = true; }
  // Magic projectiles originate from the actual extended palm at release.
  if (mode === 'cast' && ['fireball', 'frost', 'charm', 'lightning', 'vampire'].includes(cast?.id || skillId) && cast?.phase === 'active') { character.upper.updateMatrix(); const target = new THREE.Vector3(.3, .85, .65).applyMatrix4(character.upper.matrix.clone().invert()); handAt(character, 1, target, new THREE.Vector3(1, 0, 0)); }
  if (mode === 'emote' && p.hands) p.hands.forEach((target,i)=>handAt(character,i,new THREE.Vector3(i?.68:-.68,-.43,.08).lerp(new THREE.Vector3(...target),w),new THREE.Vector3(i?1:-1,-.3,.3)));
  if (mode === 'emote' && p.footTargets) plantFeet(character, p.footTargets, w);
  if (mode === 'emote' && p.prop === 'buddy') {const buddy=character.props.buddy;buddy.position.set(.85, .24 + Math.abs(Math.sin(t*Math.PI*2.5))*.16, .12);buddy.rotation.set(0,-.25,Math.sin(t*Math.PI*2.5)*.16);}
  if (mode === 'emote' && p.prop === 'mic') {handAt(character, 1, new THREE.Vector3(.50,.35,.65));}
  if (mode === 'emote' && p.guitar) { character.guitar.updateMatrix(); const neck=new THREE.Vector3(.38,.04,.06).applyMatrix4(character.guitar.matrix), strings=new THREE.Vector3(-.18,.02+Math.sin(t*Math.PI*8)*.055,.06).applyMatrix4(character.guitar.matrix); handAt(character,0,new THREE.Vector3(-.4,-.45,.1).lerp(neck,w)); handAt(character,1,new THREE.Vector3(.4,-.45,.1).lerp(strings,w)); }
  poseGloves(character,{mode,weapon:p.weapon,guitar:p.guitar,prop:p.prop,time:t});
  if (grounded && mode !== 'jump') { const lift = groundSupport(character,mode==='emote'&&!!p.floor); if (lift > .000001 && p.weapon && mode !== 'emote') { const loading = mode === 'cast' && cast?.phase === 'preparation' ? Math.sin(clamp(cast.phaseElapsed / Math.max(.01, cast.fireAt)) * Math.PI) * .14 : 0; holdGun(character, loading + Math.max(0, recoil) * .075); } }
  updateLimbs(character);
  character.visualState.mode = mode;
}
