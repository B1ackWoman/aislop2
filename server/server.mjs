import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { randomInt } from 'node:crypto';
import { pathToFileURL } from 'node:url';
import { WebSocketServer, WebSocket } from 'ws';

const VERSION='1.15', alphabet='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json; charset=utf-8','.mp3':'audio/mpeg','.wav':'audio/wav','.ogg':'audio/ogg','.m4a':'audio/mp4','.png':'image/png','.ico':'image/x-icon'};
export function createRoomServer({root=resolve(import.meta.dirname,'../dist'),emoteRoot=resolve(import.meta.dirname,'../public/emotes')}={}) {
  const rooms=new Map(), clients=new Set();
  const server=createServer(async(req,res)=>{
    try {
      const url=new URL(req.url,'http://localhost');
      if(url.pathname==='/health') {res.writeHead(200,{'Content-Type':'application/json'});res.end(JSON.stringify({ok:true,version:VERSION}));return;}
      if(!['GET','HEAD'].includes(req.method)) {res.writeHead(405);res.end();return;}
      const emoteRequest=url.pathname.startsWith('/emotes/'), base=emoteRequest?emoteRoot:root;
      const requested=emoteRequest?url.pathname.slice('/emotes'.length):url.pathname==='/'?'/index.html':url.pathname;
      const path=resolve(base,'.'+decodeURIComponent(requested));
      if(!path.startsWith(resolve(base)+sep)) {res.writeHead(403);res.end();return;}
      const body=await readFile(path);
      res.writeHead(200,{'Content-Type':types[extname(path)]||'application/octet-stream','Cache-Control':['.html','.json'].includes(extname(path))?'no-cache':'public, max-age=3600','X-Content-Type-Options':'nosniff',...(emoteRequest?{'Access-Control-Allow-Origin':'*'}:{})});
      res.end(req.method==='HEAD'?undefined:body);
    } catch {res.writeHead(404);res.end('Not found');}
  });
  const wss=new WebSocketServer({noServer:true,maxPayload:256*1024,perMessageDeflate:false});
  const send=(socket,msg)=>{
    if(socket.readyState!==WebSocket.OPEN)return;
    if(socket.bufferedAmount>1024*1024) {socket.close(1013,'Slow connection');return;}
    socket.send(JSON.stringify(msg));
  };
  const reject=(socket,message)=>{send(socket,{event:'error',message});socket.close(1008);};
  server.on('upgrade',(req,socket,head)=>{
    try {
      if(new URL(req.url,'http://localhost').pathname!=='/rooms') {socket.destroy();return;}
      wss.handleUpgrade(req,socket,head,ws=>wss.emit('connection',ws,req));
    } catch {socket.destroy();}
  });
  wss.on('connection',socket=>{
    clients.add(socket);socket.alive=true;
    const idle=setTimeout(()=>reject(socket,'Не получен запрос комнаты.'),10000);idle.unref();
    socket.on('pong',()=>socket.alive=true);
    socket.on('error',()=>{});
    socket.on('message',raw=>{
      let msg;try{msg=JSON.parse(raw.toString());}catch{return reject(socket,'Некорректный запрос.');}
      if(!msg||typeof msg!=='object')return reject(socket,'Некорректный запрос.');
      if(msg.action==='data') {
        const room=socket.room;if(!room?.guest)return;
        const allowed=socket===room.host?['start','state','look','reject']:['input','look','loadout','pick','emote'];
        if(msg.data&&allowed.includes(msg.data.type))send(socket===room.host?room.guest:room.host,{event:'data',data:msg.data});
        return;
      }
      if(socket.room)return reject(socket,'Комната уже выбрана.');
      if(msg.version!==VERSION)return reject(socket,'Откройте одинаковую новую версию игры (1.15).');
      clearTimeout(idle);
      if(msg.action==='create') {
        if(rooms.size>=1000)return reject(socket,'Сервер заполнен. Попробуй позже.');
        let code;do{code=Array.from({length:6},()=>alphabet[randomInt(alphabet.length)]).join('');}while(rooms.has(code));
        const room={code,host:socket,guest:null};rooms.set(code,room);socket.room=room;send(socket,{event:'created',code});
      } else if(msg.action==='join') {
        const code=typeof msg.code==='string'?msg.code.trim().toUpperCase():'';
        const room=/^[A-Z2-9]{6}$/.test(code)?rooms.get(code):null;
        if(!room)return reject(socket,'Комната не найдена. Проверь код и адрес сервера.');
        if(room.guest)return reject(socket,'В комнате уже два игрока.');
        room.guest=socket;socket.room=room;send(room.host,{event:'paired'});send(socket,{event:'paired'});
      } else reject(socket,'Неизвестный запрос.');
    });
    socket.on('close',()=>{
      clearTimeout(idle);clients.delete(socket);
      const room=socket.room;if(!room||rooms.get(room.code)!==room)return;
      rooms.delete(room.code);
      const other=socket===room.host?room.guest:room.host;
      if(other?.readyState===WebSocket.OPEN)other.close(1000,'Opponent disconnected');
    });
  });
  const heartbeat=setInterval(()=>{for(const socket of clients){if(!socket.alive){socket.terminate();continue;}socket.alive=false;socket.ping();}},15000);heartbeat.unref();
  const close=()=>new Promise(resolve=>{clearInterval(heartbeat);for(const socket of clients)socket.terminate();wss.close();server.close(resolve);});
  return {server,rooms,close};
}
if(process.argv[1]&&import.meta.url===pathToFileURL(resolve(process.argv[1])).href) {
  const app=createRoomServer();const port=Number(process.env.PORT||3000);
  app.server.listen(port,process.env.HOST||'0.0.0.0',()=>console.log(`ROUNDISH 1.15: http://localhost:${port}`));
  for(const sig of ['SIGINT','SIGTERM'])process.once(sig,()=>app.close().then(()=>process.exit(0)));
}
