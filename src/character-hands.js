import * as THREE from 'three';
import {characterMaterial} from './character-accessories.js';
function part(parent,geometry,material,x=0,y=0,z=0){const mesh=new THREE.Mesh(geometry,material);mesh.position.set(x,y,z);mesh.castShadow=true;mesh.receiveShadow=true;parent.add(mesh);return mesh;}
export function makeReferenceGlove(palm,side,cream){
 const trim=characterMaterial('#e7d6bf');
 const glove=part(palm,new THREE.SphereGeometry(.135,10,6),cream,0,-.025,0);glove.scale.set(1.08,1.13,.86);
 // Broad folded cuff, four rounded knuckles and a thumb: no spherical robot joint.
 part(palm,new THREE.CylinderGeometry(.102,.132,.075,10),trim,0,.115);
 part(palm,new THREE.CylinderGeometry(.108,.138,.04,10),cream,0,.145);
 part(palm,new THREE.TorusGeometry(.113,.021,4,10),cream,0,.153).rotation.x=Math.PI/2;
 const fingers=[];
 for(let i=0;i<4;i++){
  const pivot=new THREE.Group();pivot.position.set((i-1.5)*.054,(i===0||i===3)?-.058:-.076,.064);palm.add(pivot);
  const finger=part(pivot,new THREE.CapsuleGeometry(.035,.047,2,7),cream,0,-.041,0);finger.scale.set(1,1,1.04);
  fingers.push(pivot);
 }
 const thumbPivot=new THREE.Group();thumbPivot.position.set(-side*.105,.015,.032);palm.add(thumbPivot);thumbPivot.rotation.z=-side*.55;
 part(thumbPivot,new THREE.CapsuleGeometry(.053,.062,2,8),cream,0,-.022,.025);
 const parts=[];palm.traverse(p=>{if(p.geometry)parts.push(p);});
 return {fingers,thumb:thumbPivot,side,parts};
}
export function poseGloves(character,{mode,weapon,guitar,prop,time=0}){
 for(const [i,hand]of(character.hands||[]).entries()){
  const gripping=(weapon&&i===1)||guitar||(prop&&i===1&&prop!=='buddy');
  hand.fingers.forEach((joint,n)=>{joint.rotation.x=gripping?-1.05:mode==='emote'?.12:0;joint.rotation.z=gripping?0:(n-1.5)*.055;});
  hand.thumb.rotation.x=gripping?-.45:0;
 }
}
