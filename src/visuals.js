import * as THREE from 'three';
import { getMap, cleanLook } from './maps.js';
import { characterMaterial, makeHeadAccessory, makeToyBlaster, makeRetroGuitar, makeStarWand } from './character-accessories.js';
import { makeLimb, sneakerUpperGeometry, sneakerSoleGeometry } from './character-limbs.js';
import { makeReferenceGlove } from './character-hands.js';
import { makeArenaProp, ARENA_PROP_KINDS } from './arena-props.js';
import { animateCharacter } from './animations.js';
const TAU = Math.PI * 2;
const material = color => new THREE.MeshToonMaterial({ color });
function add(parent, geometry, mat, x = 0, y = 0, z = 0) {
  const mesh = new THREE.Mesh(geometry, mat); mesh.position.set(x, y, z); mesh.castShadow = true; mesh.receiveShadow = true; parent.add(mesh); return mesh;
}
function disposeGroup(group) {
  const geometries = new Set(), materials = new Set();
  group.traverse(node => { if (node.isInstancedMesh) node.dispose(); if (node.geometry) geometries.add(node.geometry); if (node.material) for (const m of Array.isArray(node.material) ? node.material : [node.material]) materials.add(m); });
  geometries.forEach(g => g.dispose()); materials.forEach(m => m.dispose()); group.clear();
}
export function makeArena(scene) {
  const group = new THREE.Group(); scene.add(group); let current;
  return {
    group,
    show(id) {
      if (current === id) return; current = id; disposeGroup(group); const map = typeof id === 'object' ? { ...getMap('cloud'), ...id } : getMap(id);
      add(group, new THREE.BoxGeometry(map.width, .7, map.depth), material(map.floor), 0, -.35);
      add(group, new THREE.BoxGeometry(map.width + .2, .25, map.depth + .2), material(map.trim), 0, -.825);
      // All playable surfaces are exactly y=0; markings do not alter their collision height.
      const tiles = new THREE.InstancedMesh(new THREE.PlaneGeometry(1.94, 1.94), material(map.tile), map.width / 2 * (map.depth / 2));
      tiles.receiveShadow = true; const tileTransform = new THREE.Object3D(); tileTransform.rotation.x = -Math.PI / 2; let tileIndex = 0;
      for (let x = -map.width / 2 + 1; x < map.width / 2; x += 2) for (let z = -map.depth / 2 + 1; z < map.depth / 2; z += 2) {
        tileTransform.position.set(x, .012, z); tileTransform.updateMatrix(); tiles.setMatrixAt(tileIndex++, tileTransform.matrix);
      }
      group.add(tiles);
      const box = material(map.box), cap = material('#fff0da'), strap = material(map.trim);
      for (const o of map.obstacles) {
        if(ARENA_PROP_KINDS.has(o.kind)){makeArenaProp(group,o,map);continue;}
        add(group, new THREE.BoxGeometry(o.w - .03, o.height - .09, o.d - .03), box, o.x, (o.height - .09) / 2, o.z);
        // Cap is inset within the collider, with its TOP at the declared obstacle height.
        add(group, new THREE.BoxGeometry(o.w, .09, o.d), cap, o.x, o.height - .045, o.z);
        if (o.kind === 'wall') {
          for (let x = -.4 * o.w; x < o.w * .5; x += .8) add(group, new THREE.BoxGeometry(.08, o.height - .12, o.d), strap, o.x + x, o.height / 2, o.z);
        } else {
          add(group, new THREE.BoxGeometry(o.w, .12, o.d), strap, o.x, o.height * .36, o.z);
        }
      }
      const edge = material(map.accent);
      for (const x of [-map.width / 2 + .025, map.width / 2 - .025]) { const line = add(group, new THREE.BoxGeometry(.05, .01, map.depth), edge, x, .025); line.castShadow = false; }
      for (const z of [-map.depth / 2 + .025, map.depth / 2 - .025]) { const line = add(group, new THREE.BoxGeometry(map.width, .01, .05), edge, 0, .025, z); line.castShadow = false; }
      // Corner markers are flat paint, so no visible solid object is missing a collider.
      for (const p of map.spawns) { const ring = add(group, new THREE.RingGeometry(.85, 1, 32), edge, p.x, .026, p.z); ring.rotation.x = -Math.PI / 2; ring.castShadow = false; }

    },
    dispose() { scene.remove(group); disposeGroup(group); current = null; }
  };
}
export function makeCharacter(parent, look = {}) {
  const group = new THREE.Group(); parent.add(group);
  const rig = new THREE.Group(); group.add(rig);
  const upper = new THREE.Group(); upper.position.y = .74; rig.add(upper);
  const skin = characterMaterial('#79cbff'), dark = characterMaterial('#34304c'), white = characterMaterial('#fff3df'), shoeAccent=characterMaterial('#9672d4');
  const body = add(upper, new THREE.IcosahedronGeometry(.6, 2), skin, 0, .13);
  const head = new THREE.Group(); head.position.y=.13; upper.add(head);
  const face = new THREE.Group(); face.scale.setScalar(1); head.add(face);
  const accessories = new THREE.Group(); accessories.scale.setScalar(1); head.add(accessories);
  const arms = [], elbows = [], palms = [], hands=[], limbVisuals=[];
  for (const side of [-1, 1]) {
    const shoulder = new THREE.Group(); shoulder.position.set(side * .57, .1, 0); upper.add(shoulder);


    const elbow = new THREE.Group(); elbow.position.y = -.33; shoulder.add(elbow);


    const palm = new THREE.Group(); palm.position.y = -.35; elbow.add(palm);
    hands.push(makeReferenceGlove(palm,side,white));
    limbVisuals.push(makeLimb(rig,shoulder,elbow,palm,.095,skin));
    arms.push(shoulder); elbows.push(elbow); palms.push(palm);
  }
  const feet = [], soles = [], legPivots = [], knees = [], ankles = [];
  for (const side of [-1, 1]) {
    const hip = new THREE.Group(); hip.position.set(side * .2, .52, 0); rig.add(hip);

    const knee = new THREE.Group(); knee.position.y = -.25; hip.add(knee);

    const ankle = new THREE.Group(); ankle.position.y=-.24; knee.add(ankle);
    const shoe=add(ankle,sneakerUpperGeometry(),[white,shoeAccent],0,0,.07);
    soles.push(add(ankle,sneakerSoleGeometry(),white,0,0,.07));
    const stripe=add(ankle,sneakerSoleGeometry(),shoeAccent,0,-.052,.07);stripe.scale.y=.42;
    add(ankle,new THREE.CylinderGeometry(.115,.135,.105,8),shoeAccent,0,.17,-.005);
    const tongue=add(ankle,new THREE.BoxGeometry(.16,.06,.13),shoeAccent,0,.16,.075);tongue.rotation.x=.25;
    for(const z of [.045,.10,.15]){const lace=add(ankle,new THREE.BoxGeometry(.145,.018,.025),white,0,.176-(z-.045)*.35,z);lace.rotation.x=.25;}
    limbVisuals.push(makeLimb(rig,hip,knee,ankle,.095,skin));
    feet.push(shoe); legPivots.push(hip); knees.push(knee); ankles.push(ankle);
  }
  // Held in the right mitten. Its muzzle follows every aim/recoil animation.
  const gun = new THREE.Group(); palms[1].add(gun); gun.rotation.x = Math.PI / 2;
  makeToyBlaster(gun);
  const gunKinds = {}; for (const kind of ['shotgun', 'rocket', 'laser']) { const variant = new THREE.Group(); gun.add(variant); variant.visible = false; gunKinds[kind] = variant; }
  for (const x of [-.085, .085]) add(gunKinds.shotgun, new THREE.CylinderGeometry(.075, .09, .58, 10), material('#df7b46'), x, .01, .36).rotation.x = Math.PI / 2;
  add(gunKinds.shotgun, new THREE.BoxGeometry(.3, .2, .2), material('#f0b16a'), 0, -.015, -.12);
  add(gunKinds.rocket, new THREE.CylinderGeometry(.2, .18, .67, 14), material('#82b995'), 0, .03, .31).rotation.x = Math.PI / 2;
  add(gunKinds.rocket, new THREE.BoxGeometry(.06, .09, .3), dark, 0, .25, .33);
  const laserMat = new THREE.MeshBasicMaterial({ color: '#ff74cc' }); for (let j = 0; j < 3; j++) add(gunKinds.laser, new THREE.TorusGeometry(.15, .025, 6, 16), laserMat, 0, .035, .36 + j * .11);
  const muzzle = new THREE.Object3D(); muzzle.position.set(0, 0, .72); gun.add(muzzle);
  const guitar = new THREE.Group(); upper.add(guitar); guitar.position.set(.03, -.20, .76); guitar.scale.set(-.95, .95, .95); guitar.rotation.z = -.35; guitar.visible = false;
  makeRetroGuitar(guitar);
  const props = {};
  const wand=new THREE.Group();palms[1].add(wand);props.wand=wand;makeStarWand(wand);
  const cane = new THREE.Group(); palms[1].add(cane); props.cane=cane;
  add(cane,new THREE.CylinderGeometry(.025,.025,.7,10),dark,0,-.28,0);
  const hook=add(cane,new THREE.TorusGeometry(.075,.025,8,16,Math.PI),material('#ffda65'),0,.075,0); hook.rotation.z=0;
  const mic = new THREE.Group(); palms[1].add(mic); props.mic=mic;
  add(mic,new THREE.CylinderGeometry(.035,.035,.18,10),dark,0,.09,0);
  add(mic,new THREE.SphereGeometry(.065,12,8),material('#ff8fba'),0,.21,0);
  const buddy=new THREE.Group(); group.add(buddy); props.buddy=buddy;
  add(buddy,new THREE.SphereGeometry(.23,18,12),material('#67d0ff')).scale.set(1.25,.85,1);
  add(buddy,new THREE.CylinderGeometry(.21,.22,.16,16),dark,0,.21);
  add(buddy,new THREE.CylinderGeometry(.29,.29,.035,20),dark,0,.13);
  add(buddy,new THREE.CylinderGeometry(.215,.22,.025,16),white,0,.15);
  for(const x of [-.09,.09])add(buddy,new THREE.SphereGeometry(.025,8,6),dark,x,.015,.215);
  add(buddy,new THREE.SphereGeometry(.045,10,8),material('#ffb6c6'),0,-.07,.21).scale.set(1,.75,.4);
  Object.values(props).forEach(p=>p.visible=false);
  const shield = add(group, new THREE.SphereGeometry(.96, 24, 16), new THREE.MeshBasicMaterial({ color: '#79cbff', transparent: true, opacity: .12, depthWrite: false }), 0, .68); shield.visible = false;
  let lookKey, mouth;
  function outfit(raw) {
    const clean = cleanLook(raw), key = JSON.stringify(clean); if (key === lookKey) return; lookKey = key;
    skin.color.set(clean.color); shield.material.color.set(clean.color); disposeGroup(face); disposeGroup(accessories);
    const ew = characterMaterial('#fff3df'), ed = characterMaterial('#34304c');
    const accentColors={'#79cbff':'#9672d4','#ffb6da':'#ef92b4','#83e0c0':'#a28bd2','#ffce75':'#91d7dc','#c8a3ff':'#ed999c','#ff8875':'#91d7dc','#d5ef68':'#a28bd2','#f3efe5':'#91d7dc'};
    shoeAccent.color.set(accentColors[clean.color]||'#9672d4');
    for (const x of [-.19, .19]) {
      const y=clean.face==='goofy'&&x>0?.24:.19;
      const eye=add(face,new THREE.SphereGeometry(.16,12,8),ew,x,y,.535);eye.scale.set(.94,clean.face==='goofy'&&x<0?1.4:1.24,.65);
      const pupil=add(face,new THREE.SphereGeometry(.069,10,6),ed,x+(clean.face==='goofy'?.025:0),y,.626);pupil.scale.set(.9,1.25,.4);
      add(face,new THREE.IcosahedronGeometry(.019,0),ew,x-.018,y+.04,.655);
      if(clean.face==='angry'){const brow=add(face,new THREE.BoxGeometry(.24,.06,.055),ed,x,.38,.55);brow.rotation.z=x<0?-.25:.25;}
    }
    const smile=new THREE.Shape();smile.moveTo(-.12,-.07);smile.quadraticCurveTo(0,-.13,.12,-.07);smile.quadraticCurveTo(.10,-.23,0,-.23);smile.quadraticCurveTo(-.10,-.21,-.12,-.07);
    mouth=add(face,new THREE.ShapeGeometry(smile,6),ed,0,0,.603);
    const tongue=add(mouth,new THREE.SphereGeometry(.052,8,6),characterMaterial('#f390a8'),.015,-.195,.008);tongue.scale.set(1.35,.6,.15);
    if(clean.face==='goofy')add(mouth,new THREE.BoxGeometry(.065,.075,.015),ew,.035,-.11,.012);
    const blush=characterMaterial('#f5a0b0');for(const x of [-.3,.3])add(face,new THREE.SphereGeometry(.057,8,6),blush,x,-.055,.525).scale.set(1.3,.75,.25);
    makeHeadAccessory(accessories,clean.hat);
  }
  const character = { group, rig, limbVisuals, upper, body, head, face, accessories, feet, soles, legPivots, knees, ankles, arms, elbows, palms, hands, gun, gunKinds, muzzle, guitar, props, shield, outfit, get mouth() { return mouth; }, visualState: {}, dispose: () => { parent.remove(group); disposeGroup(group); } };
  outfit(look); animateCharacter(character, { mode: 'idle', time: 0 }); return character;
}
export function makeCustomizationPreview(canvas, look, animation = null) {
  const scene = new THREE.Scene(); scene.background = new THREE.Color('#e6ddf3');
  scene.add(new THREE.HemisphereLight(0xffffff, 0x9d8aae, 1.8));
  const light = new THREE.DirectionalLight(0xffedcb, 2.2); light.position.set(3, 5, 4); scene.add(light);
  const camera = new THREE.PerspectiveCamera(32, 1, .1, 20); camera.position.set(0, 1.9, 5.4); camera.lookAt(0, .95, 0);
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true }); renderer.setPixelRatio(Math.min(devicePixelRatio, 2)); renderer.setSize(240, 240, false);
  renderer.toneMapping=THREE.ACESFilmicToneMapping; renderer.toneMappingExposure=1.1;
  const character = makeCharacter(scene, look); const base = add(scene, new THREE.CylinderGeometry(1.25, 1.35, .16, 32), material('#b5aad2'), 0, -.08);
  let width=240,height=240;
  return { character, render(now) {
    const nextWidth=Math.max(1,canvas.clientWidth||240),nextHeight=Math.max(1,canvas.clientHeight||240);
    if(nextWidth!==width||nextHeight!==height){width=nextWidth;height=nextHeight;renderer.setSize(width,height,false);camera.aspect=width/height;camera.updateProjectionMatrix();}
    const pose=animation?animation(now):{mode:'idle',time:now/1000};
    camera.position.z=pose.emoteId==='paranoid'?6.5:5.4;
    character.group.rotation.y = animation ? .12 : Math.sin(now * .0007) * .45; animateCharacter(character, pose); renderer.render(scene, camera);
  }, dispose() { character.dispose(); base.geometry.dispose(); base.material.dispose(); renderer.dispose(); } };
}

// Effects are driven entirely by serialized simulation data; no local random
// state changes their positions or lifetime between the two clients.
const EFFECT_COLORS = { fireball: '#ff873c', frost: '#83eaff', lightning: '#ffe873', meteor: '#ff653f', charm: '#ff83cb', tongue: '#ff709c', fart: '#b5df60', shotgun: '#ffd799', rocket: '#ff8059', boomerang: '#ffd174', dash: '#80f0dc', blink: '#ba95ff', heal: '#8bf8bd', bubble: '#89dfff', stomp: '#ffb97c', tornado: '#b8ecff', blackhole: '#ab87ff', mine: '#ff8181', turret: '#ffe07f', banana: '#ffe46e', vampire: '#f983b6', swap: '#bca4ff', decoy: '#a9dff5', laser: '#ff6db2', hit: '#fff4bd', explosion: '#ff9363' };
function effectMaterial(color, opacity = .9) { return new THREE.MeshBasicMaterial({ color, transparent: true, opacity, depthWrite: false, side: THREE.DoubleSide }); }
function effectMesh(parent, geometry, mat, x = 0, y = 0, z = 0) { const mesh = new THREE.Mesh(geometry, mat); mesh.position.set(x, y, z); parent.add(mesh); return mesh; }
function ring(parent, radius, mat, y = .04, width = .07) { const r = effectMesh(parent, new THREE.TorusGeometry(radius, width, 6, 36), mat, 0, y); r.rotation.x = Math.PI / 2; return r; }
function connector(parent, points, radius, mat) {
  const path = new THREE.CatmullRomCurve3(points.map(p => new THREE.Vector3(...p)));
  return effectMesh(parent, new THREE.TubeGeometry(path, Math.max(8, points.length * 4), radius, 6, false), mat);
}
function heartGeometry(size = .22) {
  const shape = new THREE.Shape(); shape.moveTo(0, -.9);
  shape.bezierCurveTo(-1.2, -.1, -1.1, .8, -.55, .8); shape.bezierCurveTo(-.22, .8, 0, .55, 0, .38);
  shape.bezierCurveTo(0, .55, .22, .8, .55, .8); shape.bezierCurveTo(1.1, .8, 1.2, -.1, 0, -.9);
  const geometry = new THREE.ShapeGeometry(shape, 8); geometry.scale(size, size, size); return geometry;
}
export function makeEffects(scene) {
  const root = new THREE.Group(); scene.add(root); const active = new Map(), UP = new THREE.Vector3(0, 1, 0);
  function beamMesh(group, radius, mat) { return effectMesh(group, new THREE.CylinderGeometry(radius, radius, 1, 10), mat); }
  function segment(mesh, a, b) { const from = new THREE.Vector3(...a), to = new THREE.Vector3(...b), delta = to.sub(from); mesh.position.copy(from).addScaledVector(delta, .5); mesh.scale.set(1, Math.max(.001, delta.length()), 1); mesh.quaternion.setFromUnitVectors(UP, delta.normalize()); }
  function build(e) {
    const group = new THREE.Group(); root.add(group);
    const color = e.color || EFFECT_COLORS[e.type] || '#fff0af', mat = effectMaterial(color), soft = effectMaterial(color, .22), white = effectMaterial('#fffbe9'), dark = effectMaterial('#222239');
    const n = { group, mat, soft, white, dark, meshes: [], type: e.type, rings: [], hearts: [], particles: [] }, radius = Math.max(.1, Number(e.radius) || 1);
    switch (e.type) {
      case 'laser':
        n.meshes.push(beamMesh(group, .055, white), beamMesh(group, .12, mat), beamMesh(group, .25, soft)); break;
      case 'lightning':
        for (let j = 0; j < 11; j++) n.meshes.push(beamMesh(group, j % 3 ? .055 : .075, j % 3 ? mat : white)); break;
      case 'tongue':
        for (let j = 0; j < 12; j++) n.meshes.push(beamMesh(group, .09, mat));
        n.tip = effectMesh(group, new THREE.SphereGeometry(.14, 12, 8), mat); break;
      case 'vampire':
        n.meshes.push(beamMesh(group, .045, mat), beamMesh(group, .12, soft));
        for (let j = 0; j < 7; j++) n.hearts.push(effectMesh(group, heartGeometry(.16), mat)); break;
      case 'fart':
        for (let j = 0; j < 12; j++) { const a = j * 2.4, r = radius * Math.sqrt((j + 1) / 13) * .7; const puff = effectMesh(group, new THREE.SphereGeometry(radius * (.18 + j % 3 * .02), 14, 10), soft, Math.sin(a) * r, .38 + j % 3 * .15, Math.cos(a) * r); n.meshes.push(puff); }
        n.rings.push(ring(group, radius, effectMaterial(color, .28), .025, .025));
        for (let j = 0; j < 4; j++) { const a = j * Math.PI / 2; n.particles.push(effectMesh(group, new THREE.IcosahedronGeometry(.07), mat, Math.sin(a) * radius * .6, .65, Math.cos(a) * radius * .6)); } break;
      case 'meteor':
        n.rings.push(ring(group, radius, mat, .025, .06), ring(group, radius * .82, soft, .028, .025));
        n.meshes.push(effectMesh(group, new THREE.IcosahedronGeometry(.65, 1), mat), effectMesh(group, new THREE.ConeGeometry(.5, 2.2, 12), soft));
        for (let j = 0; j < 7; j++) n.particles.push(effectMesh(group, new THREE.IcosahedronGeometry(.11, 0), white)); break;
      case 'heal':
        n.rings.push(ring(group, .65, soft, -.57, .035));
        for (let j = 0; j < 7; j++) { const cross = new THREE.Group(); group.add(cross); effectMesh(cross, new THREE.BoxGeometry(.1, .32, .06), mat); effectMesh(cross, new THREE.BoxGeometry(.32, .1, .06), mat); n.meshes.push(cross); } break;
      case 'bubble':
        n.meshes.push(effectMesh(group, new THREE.SphereGeometry(radius, 28, 20), effectMaterial(color, .12)));
        for (let j = 0; j < 3; j++) { const hoop = effectMesh(group, new THREE.TorusGeometry(radius, .025, 6, 48), j === 0 ? mat : soft); hoop.rotation.set(j * .6, j * .8, j * .5); n.rings.push(hoop); }
        n.particles.push(effectMesh(group, new THREE.SphereGeometry(.13, 12, 8), white, -.4, .4, .65)); break;
      case 'stomp':
        for (let j = 0; j < 3; j++) n.rings.push(ring(group, radius, j ? soft : mat, .025 + j * .012, j ? .03 : .09));
        for (let j = 0; j < 14; j++) n.particles.push(effectMesh(group, new THREE.DodecahedronGeometry(.13, 0), j % 3 ? mat : white)); break;
      case 'explosion': case 'hit': case 'miss': {
        const little = e.type !== 'explosion'; n.meshes.push(effectMesh(group, new THREE.IcosahedronGeometry(little ? .2 : .4, 1), white), effectMesh(group, new THREE.SphereGeometry(little ? .25 : .58, 12, 8), soft));
        for (let j = 0; j < (little ? 7 : 16); j++) n.particles.push(effectMesh(group, new THREE.OctahedronGeometry(little ? .07 : .14), j % 3 ? mat : white));
        if (!little) n.rings.push(ring(group, radius, mat, 0, .08)); break;
      }
      case 'tornado':
        for (let j = 0; j < 4; j++) { const points = []; for (let k = 0; k <= 32; k++) { const a = k / 32 * Math.PI * 5 + j; const r = radius * (.28 + k / 32 * .55); points.push([Math.sin(a) * r, k / 32 * 2.4, Math.cos(a) * r]); } n.meshes.push(connector(group, points, j % 2 ? .045 : .075, j % 2 ? soft : mat)); }
        n.rings.push(ring(group, radius, soft, .025, .035));
        for (let j = 0; j < 4; j++) { const sock = effectMesh(group, new THREE.BoxGeometry(.12, .32, .09), j % 2 ? white : mat); n.particles.push(sock); } break;
      case 'blackhole':
        n.meshes.push(effectMesh(group, new THREE.SphereGeometry(.65, 24, 16), dark, 0, .85));
        for (let j = 0; j < 3; j++) { const hoop = ring(group, .88 + j * .22, j === 0 ? mat : soft, .85, .055); hoop.rotation.x += j * .18; n.rings.push(hoop); }
        n.rings.push(ring(group, radius, effectMaterial(color, .22), .03, .025));
        for (let j = 0; j < 18; j++) n.particles.push(effectMesh(group, new THREE.SphereGeometry(.055, 8, 6), j % 4 ? mat : white)); break;
      case 'mine': {
        effectMesh(group, new THREE.BoxGeometry(.62, .44, .62), mat, 0, .22);
        effectMesh(group, new THREE.BoxGeometry(.68, .12, .68), white, 0, .49);
        effectMesh(group, new THREE.BoxGeometry(.13, .46, .64), dark, 0, .23);
        effectMesh(group, new THREE.BoxGeometry(.64, .46, .13), dark, 0, .23);
        n.meshes.push(effectMesh(group, new THREE.SphereGeometry(.095, 10, 8), white, 0, .62));
        n.rings.push(ring(group, radius, soft, .025, .022)); break;
      }
      case 'turret': {
        effectMesh(group, new THREE.CylinderGeometry(.4, .45, .18, 16), dark, 0, .09);
        const head = new THREE.Group(); head.position.y = .55; group.add(head);
        effectMesh(head, new THREE.SphereGeometry(.37, 18, 12), mat).scale.set(1, .86, 1.25);
        effectMesh(head, new THREE.SphereGeometry(.24, 16, 10), mat, 0, .28, .22);
        for (const x of [-.13, .13]) effectMesh(head, new THREE.SphereGeometry(.045, 8, 6), dark, x, .36, .39);
        effectMesh(head, new THREE.BoxGeometry(.25, .095, .2), effectMaterial('#ffaf63'), 0, .25, .46);
        effectMesh(head, new THREE.CylinderGeometry(.09, .11, .42, 10), dark, 0, -.01, .37).rotation.x = Math.PI / 2;
        n.meshes.push(head); break;
      }
      case 'banana': {
        // Three open peel arms, visibly a trap rather than a yellow stick.
        for (let j = 0; j < 3; j++) { const a = j * TAU / 3; n.meshes.push(connector(group, [[0, .24, 0], [Math.sin(a) * .2, .28, Math.cos(a) * .2], [Math.sin(a) * .42, .05, Math.cos(a) * .42]], .065, mat)); }
        effectMesh(group, new THREE.CylinderGeometry(.035, .045, .14, 6), dark, 0, .32); break;
      }
      case 'decoy':
        n.character = makeCharacter(group, e.look || { color: e.color }); n.character.gun.visible = false;
        n.character.group.scale.setScalar(.98); n.character.body.material.transparent = true; n.character.body.material.opacity = .65;
        effectMesh(group, new THREE.ConeGeometry(.055, .16, 6), mat, 0, .03);
        n.rings.push(ring(group, .62, soft, .02, .035)); break;
      case 'dash':
        for (let j = 0; j < 5; j++) n.meshes.push(effectMesh(group, new THREE.CapsuleGeometry(.04, .8, 3, 6), j % 2 ? white : mat)); break;
      case 'blink': case 'swap':
        for (let endpoint = 0; endpoint < 2; endpoint++) { const portal = new THREE.Group(); group.add(portal); for (let j = 0; j < 2; j++) effectMesh(portal, new THREE.TorusGeometry(.68 + j * .12, j ? .02 : .055, 6, 36), j ? soft : mat, 0, .68).rotation.y = .2; n.meshes.push(portal); } break;
      default: break;
    }
    const used = new Set(); group.traverse(mesh => { if (mesh.material) used.add(mesh.material); }); for (const m of [mat, soft, white, dark]) if (!used.has(m)) m.dispose();
    return n;
  }
  function remove(id) { const n = active.get(id); if (!n) return; root.remove(n.group); disposeGroup(n.group); active.delete(id); }
  return {
    update(effects = [], stateTime = 0) {
      const present = new Set();
      for (const e of effects) {
        if (!e || e.type === 'muzzle' || !(e.life > 0) || !Number.isFinite(e.x) || !Number.isFinite(e.z)) continue;
        const key = String(e.id); present.add(key); let n = active.get(key); if (n && n.type !== e.type) { remove(key); n = null; } if (!n) { n = build(e); active.set(key, n); }
        const { group, meshes, rings, hearts, particles, mat, soft, white } = n, t = Number(stateTime) || 0;
        const age = Number.isFinite(e.age) ? e.age : Math.max(0, (e.maxLife || e.life) - e.life), max = Math.max(.01, e.maxLife || e.life), u = Math.min(1, age / max), radius = e.radius || 1;
        const fade = Math.min(1, e.life / Math.min(.2, max * .5)); mat.opacity = .9 * fade; soft.opacity = .22 * fade; white.opacity = .95 * fade;
        group.position.set(e.x, Number(e.y) || 0, e.z); group.rotation.set(0, 0, 0); group.scale.set(1, 1, 1);
        const end = [(Number.isFinite(e.targetX) ? e.targetX : e.x) - e.x, (Number.isFinite(e.targetY) ? e.targetY : e.y) - e.y, (Number.isFinite(e.targetZ) ? e.targetZ : e.z) - e.z];
        if (['laser', 'lightning', 'tongue', 'vampire'].includes(e.type)) {
          if (e.type === 'laser' || e.type === 'vampire') meshes.forEach(mesh => segment(mesh, [0, 0, 0], end));
          else for (let j = 0; j < meshes.length; j++) { const a = j / meshes.length, b = (j + 1) / meshes.length, z = e.type === 'lightning' ? .12 : .04; const point = q => [end[0] * q + Math.sin(q * Math.PI) * Math.sin(j * 3.4 + t * 35) * z, end[1] * q + Math.sin(q * Math.PI) * (e.type === 'lightning' ? (j % 2 ? .11 : -.11) : -.05), end[2] * q]; segment(meshes[j], point(a), point(b)); }
          if (n.tip) n.tip.position.set(...end);
          hearts.forEach((heart, j) => { const q = (age * 2 + j / hearts.length) % 1; heart.visible = !!e.draining; heart.position.set(end[0] * (1 - q), end[1] * (1 - q) + .12 * Math.sin(q * Math.PI), end[2] * (1 - q)); heart.rotation.y = e.angle || 0; });
        }
        switch (e.type) {
          case 'fart': meshes.forEach((mesh, j) => { mesh.scale.setScalar(.8 + .12 * Math.sin(t * 3 + j)); mesh.position.y = .4 + j % 3 * .15 + Math.sin(t * 2 + j) * .06; }); particles.forEach((mesh, j) => { mesh.position.y = .5 + (age * .5 + j * .2) % 1; mesh.rotation.y = t; }); break;
          case 'meteor': {
            const fall = Math.min(1, age / .7); meshes[0].position.y = .65 + (1 - fall) * 8; meshes[0].rotation.set(t * 2, t * 1.5, t * .7); meshes[1].position.y = meshes[0].position.y + 1.25;
            particles.forEach((mesh, j) => mesh.position.set(Math.sin(j * 2.4 + t) * .5, meshes[0].position.y + .5 + j * .22, Math.cos(j * 2.4 + t) * .5)); rings[0].scale.setScalar(.93 + Math.sin(age * 20) * .04); break;
          }
          case 'heal': meshes.forEach((mesh, j) => { const a = j * 2.4 + t * .3, q = (age * .9 + j / meshes.length) % 1; mesh.position.set(Math.sin(a) * .62, -.25 + q * 1.1, Math.cos(a) * .62); mesh.rotation.y = -a; }); break;
          case 'bubble': rings.forEach((r, j) => { r.rotation.y = t * .2 + j; }); particles[0].position.x = -.4 + Math.sin(t * .7) * .04; break;
          case 'stomp': rings.forEach((r, j) => r.scale.setScalar(Math.max(.025, Math.min(1, age / .24) - j * .07))); particles.forEach((mesh, j) => { const a = j * TAU / particles.length, r = radius * Math.min(1, age / .24); mesh.position.set(Math.sin(a) * r, .05 + Math.sin(u * Math.PI) * .3, Math.cos(a) * r); mesh.rotation.set(t * 2, t, 0); }); break;
          case 'explosion': case 'hit': case 'miss':
            meshes.forEach((mesh, j) => mesh.scale.setScalar((.4 + u * 1.9) * (j ? 1.1 : 1)));
            particles.forEach((mesh, j) => { const a = j * 2.4, r = radius * u; mesh.position.set(Math.sin(a) * r, Math.sin(j * 1.7) * r * .6 + Math.sin(u * Math.PI) * .15, Math.cos(a) * r); mesh.rotation.set(t * 2 + j, t * 3, 0); }); rings.forEach(r => r.scale.setScalar(.15 + u)); break;
          case 'tornado': group.rotation.y = t * 5; particles.forEach((mesh, j) => { const a = t * 7 + j * 1.6, q = (age * .5 + j * .23) % 1; mesh.position.set(Math.sin(a) * (radius * .4 + q * .4), q * 2, Math.cos(a) * (radius * .4 + q * .4)); mesh.rotation.z = a; }); break;
          case 'blackhole':
            rings.slice(0, 3).forEach((r, j) => { r.rotation.z = t * (j % 2 ? -1 : 1); });
            particles.forEach((mesh, j) => { const q = (age * .45 + j / particles.length) % 1, r = radius * (1 - q), a = j * 2.4 + age * 4; mesh.position.set(Math.sin(a) * r, .5 + q * .35, Math.cos(a) * r); mesh.scale.setScalar(.8 + q * .5); }); break;
          case 'mine': meshes[0].scale.setScalar(.8 + Math.abs(Math.sin(t * 7)) * .2); break;
          case 'turret': meshes[0].rotation.y = e.angle || 0; break;
          case 'banana': group.rotation.y = e.angle || .5; if (e.triggered) group.scale.setScalar(Math.max(.1, fade)); break;
          case 'decoy': group.rotation.y = e.angle || 0; animateCharacter(n.character, { mode: 'idle', time: t }); n.character.gun.visible = false; break;
          case 'dash': {
            const angle = e.angle || 0, direction = new THREE.Vector3(Math.sin(angle), 0, Math.cos(angle));
            meshes.forEach((mesh, j) => { mesh.quaternion.setFromUnitVectors(UP, direction); mesh.position.set(-direction.x * (.4 + j * .13) + Math.cos(angle) * (j - 2) * .16, (j % 3 - 1) * .16, -direction.z * (.4 + j * .13) - Math.sin(angle) * (j - 2) * .16); }); break;
          }
          case 'blink': case 'swap': meshes.forEach((portal, j) => { portal.position.set(j ? end[0] : 0, j ? end[1] : 0, j ? end[2] : 0); portal.rotation.y = e.angle || 0; portal.scale.setScalar(.75 + Math.sin(u * Math.PI) * .2); }); break;
        }
      }
      for (const key of [...active.keys()]) if (!present.has(key)) remove(key);
    },
    clear() { for (const key of [...active.keys()]) remove(key); },
    dispose() { this.clear(); scene.remove(root); }
  };
}
