import assert from 'node:assert/strict';
import * as THREE from 'three';
import { EMOTES, EMOTE_IDS } from '../src/emote-catalog.js';
import { sampleEmote, CHOREOGRAPHY_IDS } from '../src/emote-choreography.js';
import { makeCharacter } from '../src/visuals.js';
import { animateCharacter } from '../src/animations.js';
import { state, step, selectEmote } from '../src/game.js';
assert.equal(EMOTES.length,17);
assert.deepEqual([...CHOREOGRAPHY_IDS].sort(),[...EMOTE_IDS].sort());
const old=['robot','wave','spin','dab','shuffle','breakdance','moonwalk','victory','bow','laugh','floss','salute','bounce','airguitar','disco','wiggle'];
const match=state();match.phase='celebration';match.winner=0;
for(const id of old){assert.equal(sampleEmote(id,1),null);assert.equal(selectEmote(match,0,id),false);}
const scene=new THREE.Scene(),a=makeCharacter(scene),b=makeCharacter(scene);
const fingerprint=new Set();
for(const id of EMOTE_IDS){
 fingerprint.add(JSON.stringify([sampleEmote(id,.7),sampleEmote(id,1.3)]));
 for(let n=0;n<=480;n++){
  const time=n/60;
  assert.equal(sampleEmote(id,time).rot[1],0,id+' must never spin around its vertical axis');
  const input={mode:'emote',emoteId:id,time};
  animateCharacter(a,input);animateCharacter(b,input);
  a.group.updateMatrixWorld(true);b.group.updateMatrixWorld(true);
  for(const part of [a.rig,a.upper,a.head,...a.arms,...a.elbows,...a.legPivots,...a.knees,...a.ankles])assert(part.matrixWorld.elements.every(Number.isFinite),id+' must have finite joint transforms');
  const pose=c=>[c.rig,c.upper,c.head,...c.arms,...c.elbows,...c.legPivots,...c.knees,...c.ankles].map(p=>p.matrixWorld.toArray());
  assert.deepEqual(pose(a),pose(b),id+' must reproduce the same pose at the same network/preview time');
  assert.equal(a.gun.visible,false,id+' must hide weapon');

  for(const shoe of a.feet){const points=shoe.geometry.attributes.position,v=new THREE.Vector3();let min=Infinity;for(let i=0;i<points.count;i++)min=Math.min(min,v.fromBufferAttribute(points,i).applyMatrix4(shoe.matrixWorld).y);assert(min>=-.000001,id+' shoe penetrates stage');}
 }
}
assert.equal(fingerprint.size,17,'every dance needs distinct choreography');
assert.notDeepEqual(sampleEmote('pbj',1.001),sampleEmote('pbj',1.02),'dance must interpolate continuously without a frame cap');
// Returning to gameplay must reset dance accessories, head, floor rotation and IK.
animateCharacter(a,{mode:'emote',emoteId:'shuba',time:2});assert.equal(a.props.buddy.visible,true);
animateCharacter(a,{mode:'idle',time:0});assert.equal(a.props.buddy.visible,false);assert.equal(a.gun.visible,true);assert.equal(a.head.rotation.x,0);
const initial=a.group.position.clone();for(let n=0;n<60;n++)animateCharacter(a,{mode:'walk',time:n/60,speed:4,moveZ:1});assert(a.group.position.equals(initial),'animation cannot move the simulated character');
a.dispose();b.dispose();
console.log('17 replacement choreographies: old IDs rejected, finite transforms, identical shared-time poses, grounded shoes and clean return to combat passed');
