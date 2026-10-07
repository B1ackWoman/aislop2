import * as THREE from 'three';
import {characterMaterial} from './character-accessories.js';
function mesh(parent,g,color,x,y,z){const m=new THREE.Mesh(g,characterMaterial(color));m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;}
export function makeArenaProp(parent,o,map){
 const g=new THREE.Group();g.position.set(o.x,0,o.z);g.name='arena-prop-'+o.kind;parent.add(g);const {w,d,height:h}=o;
 if(o.kind==='planter'){
  mesh(g,new THREE.BoxGeometry(w,h*.30,d),'#e8d7b9',0,h*.15,0);
  mesh(g,new THREE.BoxGeometry(w*.95,h*.08,d*.95),'#927988',0,h*.31,0);
  const bush=mesh(g,new THREE.IcosahedronGeometry(1,1),map.id==='candy'?'#e9a3d1':'#94bd88',0,h*.66,0);bush.scale.set(w*.50,h*.34,d*.50);
  for(const side of [-1,1])mesh(g,new THREE.IcosahedronGeometry(.13,0),map.id==='candy'?'#ffe39b':'#f5bed6',side*w*.20,h*.78,d*.32);
 }else if(o.kind==='arcade'){
  mesh(g,new THREE.BoxGeometry(w,h,d),'#b7a0d8',0,h/2,0);
  mesh(g,new THREE.BoxGeometry(w*.78,h*.32,.03),'#39415c',0,h*.65,d/2+.008);
  mesh(g,new THREE.BoxGeometry(w*.60,h*.23,.035),'#8cd0d0',0,h*.65,d/2+.012);
  mesh(g,new THREE.BoxGeometry(w*.8,h*.10,.03),'#ffe39b',0,h*.92,d/2+.008);
  for(const side of [-1,1])mesh(g,new THREE.IcosahedronGeometry(.07,0),side<0?'#ffacbd':'#d7ed99',side*w*.20,h*.38,d/2+.025);
  mesh(g,new THREE.BoxGeometry(w*.54,.025,.025),'#f5edf5',0,h*.15,d/2+.017);
 }else if(o.kind==='gift'){
  mesh(g,new THREE.BoxGeometry(w,h,d),'#e8a9c6',0,h/2,0);
  mesh(g,new THREE.BoxGeometry(w+.01,h*.15,d+.01),'#ffe5a3',0,h*.65,0);
  mesh(g,new THREE.BoxGeometry(w*.15,h+.02,d+.02),'#ffe5a3',0,h/2,0);
  for(const side of [-1,1]){const bow=mesh(g,new THREE.IcosahedronGeometry(.26,0),'#d596c0',side*.2,h-.15,0);bow.scale.set(1,.5,.75);}
 }else if(o.kind==='terminal'){
  mesh(g,new THREE.BoxGeometry(w,h,d),'#8cbcc2',0,h/2,0);
  mesh(g,new THREE.BoxGeometry(w*.74,h*.48,.03),'#40516b',0,h*.65,d/2+.015);
  for(let i=0;i<3;i++)mesh(g,new THREE.BoxGeometry(w*.5,.06,.035),'#d7f0c0',0,h*(.54+i*.11),d/2+.02);
  mesh(g,new THREE.BoxGeometry(w*.3,h*.12,.025),'#fff0c8',0,h*.18,d/2+.015);
 }else if(o.kind==='bench'){
  // Solid toy bench, with a broad base matching the simulation's full collider.
  mesh(g,new THREE.BoxGeometry(w,h*.78,d),'#c6b1dd',0,h*.39,0);
  mesh(g,new THREE.BoxGeometry(w,h*.22,d),'#fff0d1',0,h*.89,0);
  for(let i=-1;i<=1;i++)mesh(g,new THREE.BoxGeometry(w*.015,.014,d*.90),'#bfa7c7',i*w*.24,h+.004,0);
 }
 return g;
}
export const ARENA_PROP_KINDS=new Set(['planter','arcade','gift','terminal','bench']);
