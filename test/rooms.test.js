import assert from 'node:assert/strict';
import { once } from 'node:events';
import { WebSocket } from 'ws';
import { createRoomServer } from '../server/server.mjs';
import { roomSocketURL } from '../src/room-connection.js';

assert.equal(roomSocketURL('https://игра.рф/путь',{protocol:'https:'}), 'wss://xn--80afo7a.xn--p1ai/rooms');
assert.throws(()=>roomSocketURL('http://example.com',{protocol:'https:'}),/HTTPS/);
assert.throws(()=>roomSocketURL('',{protocol:'file:'}),/адрес/);
const app=createRoomServer();app.server.listen(0,'127.0.0.1');await once(app.server,'listening');
const url=`ws://127.0.0.1:${app.server.address().port}/rooms`;
const sockets=[];
async function client(){const ws=new WebSocket(url);sockets.push(ws);const queue=[],waiters=[];ws.on('message',raw=>{const data=JSON.parse(raw);const waiter=waiters.shift();if(waiter)waiter(data);else queue.push(data);});await once(ws,'open');return {ws,send:msg=>ws.send(JSON.stringify(msg)),next:()=>queue.length?Promise.resolve(queue.shift()):new Promise(resolve=>waiters.push(resolve))};}
try {
 const h=await client();h.send({action:'create',version:'1.15'});const created=await h.next();assert.equal(created.event,'created');assert.match(created.code,/^[A-Z2-9]{6}$/);
 const old=await client();old.send({action:'join',code:created.code,version:'1.3'});assert.equal((await old.next()).event,'error');
 const missing=await client();missing.send({action:'join',code:'AAAAAA',version:'1.15'});assert.equal((await missing.next()).event,'error');
 const g=await client();g.send({action:'join',code:created.code,version:'1.15'});assert.equal((await h.next()).event,'paired');assert.equal((await g.next()).event,'paired');
 const third=await client();third.send({action:'join',code:created.code,version:'1.15'});assert.equal((await third.next()).event,'error');
 h.send({action:'data',data:{type:'state',game:{round:2}}});assert.deepEqual((await g.next()).data,{type:'state',game:{round:2}});
 g.send({action:'data',data:{type:'state',game:{round:999}}});g.send({action:'data',data:{type:'input',input:{skills:[true,false,false]}}});assert.equal((await h.next()).data.type,'input','Guest cannot inject state');
 const other=await client();other.send({action:'create',version:'1.15'});const own=await other.next();assert.notEqual(own.code,created.code);
 const closed=once(g.ws,'close');h.ws.close();await closed;await new Promise(r=>setImmediate(r));assert.equal(app.rooms.has(created.code),false);assert.equal(app.rooms.has(own.code),true);
 console.log('Room server: actual WebSocket pairing, data, isolation, full room, version mismatch, disconnect and Cyrillic domain checks passed');
} finally {for(const ws of sockets)ws.terminate();await app.close();}
