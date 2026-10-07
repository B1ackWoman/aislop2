import * as THREE from 'three';
// Joint transforms drive one continuous skin surface; elbows and knees stay internal.
export function makeLimb(parent,start,middle,end,radius,material){
 const segments=16,sides=8,positions=new Float32Array((segments+1)*sides*3),indices=[];
 for(let i=0;i<segments;i++)for(let j=0;j<sides;j++){const a=i*sides+j,b=i*sides+(j+1)%sides;indices.push(a,b,a+sides,b,b+sides,a+sides);}
 const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.BufferAttribute(positions,3).setUsage(THREE.DynamicDrawUsage));geometry.setIndex(indices);
 const mesh=new THREE.Mesh(geometry,material);mesh.castShadow=true;mesh.receiveShadow=true;mesh.frustumCulled=false;parent.add(mesh);
 return {mesh,start,middle,end,radius,segments,sides};
}
const a=new THREE.Vector3(),b=new THREE.Vector3(),c=new THREE.Vector3(),point=new THREE.Vector3(),tangent=new THREE.Vector3(),normal=new THREE.Vector3(),binormal=new THREE.Vector3(),axis=new THREE.Vector3();
export function updateLimbs(character){
 character.rig.updateWorldMatrix(true,true);
 for(const limb of character.limbVisuals||[]){
  character.rig.worldToLocal(limb.start.getWorldPosition(a));character.rig.worldToLocal(limb.middle.getWorldPosition(b));character.rig.worldToLocal(limb.end.getWorldPosition(c));
  const curve=new THREE.CatmullRomCurve3([a.clone(),b.clone(),c.clone()]);const attr=limb.mesh.geometry.attributes.position;
  for(let i=0;i<=limb.segments;i++){
   const t=i/limb.segments;curve.getPoint(t,point);curve.getTangent(t,tangent).normalize();axis.set(0,0,1);if(Math.abs(tangent.z)>.95)axis.set(1,0,0);normal.crossVectors(tangent,axis).normalize();binormal.crossVectors(tangent,normal).normalize();
   const r=limb.radius*(.96+.04*Math.sin(t*Math.PI));
   for(let j=0;j<limb.sides;j++){const angle=j/limb.sides*Math.PI*2;attr.setXYZ(i*limb.sides+j,point.x+r*(normal.x*Math.cos(angle)+binormal.x*Math.sin(angle)),point.y+r*(normal.y*Math.cos(angle)+binormal.y*Math.sin(angle)),point.z+r*(normal.z*Math.cos(angle)+binormal.z*Math.sin(angle)));}
  }
  attr.needsUpdate=true;limb.mesh.geometry.computeVertexNormals();
 }
}
const shoeOutline=Array.from({length:12},(_,i)=>{const a=i/12*Math.PI*2;return [Math.sin(a)*.19,Math.cos(a)*(Math.cos(a)>0?.29:.17)];});
export function sneakerUpperGeometry(){
 const rings=[[-.045,1,0],[.015,1,0],[.095,.93,-.012],[.15,.75,-.035],[.18,.48,-.065]],positions=[],indices=[];
 for(const [y,scale,shift]of rings)for(const [x,z]of shoeOutline)positions.push(x*scale,y-Math.max(0,z)*.18,z*scale+shift);
 const g=new THREE.BufferGeometry();
 for(let i=0;i<4;i++)for(let j=0;j<12;j++){const a=i*12+j,b=i*12+(j+1)%12,at=indices.length;indices.push(a,b,a+12,b,b+12,a+12);const back=(shoeOutline[j][1]+shoeOutline[(j+1)%12][1])/2<.10;g.addGroup(at,6,i>0&&back?1:0);}
 for(let j=1;j<11;j++){const at=indices.length;indices.push(48,48+j,49+j);g.addGroup(at,3,0);}
 g.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));g.setIndex(indices);g.computeVertexNormals();return g;
}
export function sneakerSoleGeometry(){
 const shape=new THREE.Shape();shape.moveTo(...shoeOutline[0]);for(const p of shoeOutline.slice(1))shape.lineTo(...p);shape.closePath();
 const g=new THREE.ExtrudeGeometry(shape,{depth:.055,bevelEnabled:false});g.rotateX(Math.PI/2);g.translate(0,-.035,0);return g;
}
