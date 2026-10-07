import assert from 'node:assert/strict';
import * as THREE from 'three';
import { MAPS } from '../src/maps.js';
import { state, resetRound } from '../src/game.js';
import { hudPlayer, viewDirection, screenMovement } from '../src/player-view.js';
for(const map of MAPS)for(const self of [0,1]){
 const game=state(map.id,false),direction=viewDirection(self),camera=new THREE.PerspectiveCamera(36,1.4,.5,180);
 camera.position.set(0,50,44*direction);camera.lookAt(0,0,0);camera.updateMatrixWorld();
 const project=p=>new THREE.Vector3(p.x,.8,p.z).project(camera);
 assert(project(game.players[self]).x<project(game.players[1-self]).x,'own spawn must be left in both clients');
 resetRound(game);assert(project(game.players[self]).x<project(game.players[1-self]).x,'next round must keep own spawn left');
 assert.equal(hudPlayer(0,self),self);assert.equal(hudPlayer(1,self),1-self);
 const raw={x:1,z:0,angle:.3,aimX:5,fire:true,skills:[true,false,false]},right=screenMovement(raw,self),origin=game.players[self];
 assert(project({...origin,x:origin.x+right.x}).x>project(origin).x,'D must move screen-right for each client');
 const forward=screenMovement({...raw,x:0,z:-1},self);
 assert(project({...origin,z:origin.z+forward.z}).y>project(origin).y,'W must move screen-up for each client');
 assert.equal(right.angle,raw.angle);assert.equal(right.aimX,raw.aimX);assert.equal(right.fire,true);assert.deepEqual(right.skills,raw.skills);assert.equal(raw.x,1);
}
console.log('All maps/clients/round resets: own fighter and HUD left, opponent right; camera-relative WASD preserves world-space aim and actions.');
