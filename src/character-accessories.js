import * as THREE from 'three';
export const characterMaterial = color => new THREE.MeshStandardMaterial({color,roughness:.82,metalness:0,flatShading:true});
const cream='#fff3df', violet='#9672d4', ink='#34304c', coral='#f39598', aqua='#91d7dc';
function mesh(parent,geometry,color,x=0,y=0,z=0){const m=new THREE.Mesh(geometry,characterMaterial(color));m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;}
function polygon(points,depth=.035){const s=new THREE.Shape();s.moveTo(...points[0]);for(const p of points.slice(1))s.lineTo(...p);s.closePath();return new THREE.ExtrudeGeometry(s,{depth,bevelEnabled:false,steps:1});}
function star(radius){return Array.from({length:10},(_,i)=>{const a=Math.PI/2+i*Math.PI/5,r=i%2?radius*.46:radius;return [Math.cos(a)*r,Math.sin(a)*r];});}
export function makeHeadAccessory(parent,id){
 parent.userData.accessory=id;
 if(id==='beanie'){
  mesh(parent,new THREE.SphereGeometry(.53,12,6,0,Math.PI*2,0,Math.PI/2),violet,0,.34);
  mesh(parent,new THREE.CylinderGeometry(.535,.535,.11,12),'#8060b5',0,.37);
  for(let i=0;i<12;i++){const a=i*Math.PI/6;const rib=mesh(parent,new THREE.BoxGeometry(.025,.11,.025),'#a88be0',Math.sin(a)*.532,.37,Math.cos(a)*.532);rib.rotation.y=a;}
  mesh(parent,new THREE.IcosahedronGeometry(.135,1),'#d5c5ee',0,.91);
 }else if(id==='crown'){
  mesh(parent,new THREE.CylinderGeometry(.34,.38,.13,8),'#f0c96c',0,.55);
  for(let i=0;i<5;i++){const a=i*Math.PI*2/5;mesh(parent,new THREE.ConeGeometry(.115,.23,4),'#ffdc81',Math.sin(a)*.3,.72,Math.cos(a)*.3);const gem=mesh(parent,new THREE.OctahedronGeometry(.055),'#ed98b7',Math.sin(a)*.365,.57,Math.cos(a)*.365);gem.rotation.y=a;}
 }else if(id==='antenna'){
  const curve=new THREE.CatmullRomCurve3([new THREE.Vector3(0,.56,0),new THREE.Vector3(-.02,.76,0),new THREE.Vector3(-.13,.95,0)]);
  mesh(parent,new THREE.TubeGeometry(curve,4,.022,5,false),'#709780');mesh(parent,new THREE.IcosahedronGeometry(.13,0),'#c5e58c',-.13,.98);
 }else if(id==='headphones'){
  const band=mesh(parent,new THREE.TorusGeometry(.605,.048,4,16,Math.PI),cream,0,.08);band.rotation.z=0;
  for(const side of [-1,1]){mesh(parent,new THREE.BoxGeometry(.075,.12,.12),coral,side*.595,.24);mesh(parent,new THREE.CylinderGeometry(.18,.18,.12,10),cream,side*.61,.04).rotation.z=Math.PI/2;mesh(parent,new THREE.CylinderGeometry(.13,.13,.135,10),aqua,side*.65,.04).rotation.z=Math.PI/2;}
 }else if(id==='visor'){
  mesh(parent,new THREE.CylinderGeometry(.50,.50,.085,12),aqua,0,.41);
  const brim=mesh(parent,new THREE.CylinderGeometry(.43,.46,.055,8),aqua,0,.39,.45);brim.scale.set(1.35,1,.67);
  mesh(parent,new THREE.CylinderGeometry(.505,.505,.022,12),'#c6f0ee',0,.43);
 }else if(id==='starshades'){
  for(const side of [-1,1]){
   mesh(parent,polygon(star(.24),.04),violet,side*.21,.2,.61);
   mesh(parent,polygon(star(.177),.015),ink,side*.21,.2,.655);
   const shine=mesh(parent,new THREE.BoxGeometry(.025,.063,.008),cream,side*.21-.035,.255,.678);shine.rotation.z=-.45;
   const temple=mesh(parent,new THREE.BoxGeometry(.035,.035,.3),violet,side*.43,.2,.47);temple.rotation.y=side*-.35;
  }
  mesh(parent,new THREE.BoxGeometry(.12,.035,.035),violet,0,.23,.65);
 }
}
export function makeToyBlaster(parent){
 parent.userData.design='pastel-toy-blaster';
 mesh(parent,new THREE.BoxGeometry(.22,.2,.41),'#ffe19a',0,.035,.19);
 mesh(parent,new THREE.BoxGeometry(.16,.2,.12),violet,0,-.14,.03);
 mesh(parent,new THREE.BoxGeometry(.20,.05,.10),violet,0,.16,.09);
 mesh(parent,new THREE.CylinderGeometry(.115,.115,.27,8),'#f9d582',0,.035,.46).rotation.x=Math.PI/2;
 mesh(parent,new THREE.CylinderGeometry(.15,.15,.095,8),'#ee9b91',0,.035,.64).rotation.x=Math.PI/2;
 // Hollow ring reads as a toy barrel; its end matches the existing simulated muzzle.
 mesh(parent,new THREE.CircleGeometry(.102,8),'#976775',0,.035,.689);
 for(const side of [-1,1])mesh(parent,new THREE.BoxGeometry(.013,.1,.17),'#fff0c7',side*.116,.035,.20);
}
export function makeRetroGuitar(parent){
 parent.userData.design='coral-retro-guitar';
 const body=[[-.32,-.16],[-.29,-.25],[-.13,-.25],[-.04,-.14],[.10,-.16],[.16,-.08],[.10,-.01],[.16,.12],[.06,.2],[-.05,.13],[-.16,.24],[-.3,.2],[-.33,.09],[-.21,.01]];
 mesh(parent,polygon(body,.075),coral);
 mesh(parent,new THREE.BoxGeometry(.43,.078,.06),'#70525f',.29,.04,.04);
 mesh(parent,new THREE.BoxGeometry(.115,.15,.065),coral,.55,.04,.04).rotation.z=.18;
 mesh(parent,polygon([[-.24,-.08],[-.2,.09],[-.1,.12],[.01,.02],[-.05,-.10]],.01),'#ffe6c8',0,0,.077);
 mesh(parent,new THREE.BoxGeometry(.025,.11,.025),ink,-.17,.03,.09);
 for(let n=0;n<4;n++){
  mesh(parent,new THREE.BoxGeometry(.70,.004,.007),cream,.15,.015+n*.016,.096);
  mesh(parent,new THREE.BoxGeometry(.01,.073,.012),'#d4bdad',.14+n*.085,.04,.075);
 }
 for(const y of [-.055,.14])for(const x of [.50,.55,.60])mesh(parent,new THREE.IcosahedronGeometry(.022,0),aqua,x,y,.045);
 for(const x of [-.12,-.045])mesh(parent,new THREE.CylinderGeometry(.019,.019,.02,8),aqua,x,-.135,.095).rotation.x=Math.PI/2;
}

export function makeStarWand(parent){
 mesh(parent,new THREE.CylinderGeometry(.022,.022,.32,6),violet,0,.14);
 mesh(parent,new THREE.CylinderGeometry(.026,.026,.035,6),coral,0,.02);
 mesh(parent,polygon(star(.13),.035),'#ffdb81',0,.38,-.018);
}
