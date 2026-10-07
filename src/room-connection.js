export const ROOM_VERSION = '1.15';

export function roomSocketURL(address = '', location = globalThis.location) {
  const raw = address.trim() || (location.protocol === 'file:' ? '' : location.origin);
  if (!raw) throw new Error('Укажи адрес сервера игры или открой игру на его сайте.');
  const url = new URL(raw);
  if (!['http:', 'https:', 'ws:', 'wss:'].includes(url.protocol) || url.username || url.password) throw new Error('Нужен адрес вида https://игра.рф');
  url.protocol = ['https:', 'wss:'].includes(url.protocol) ? 'wss:' : 'ws:';
  if (location.protocol === 'https:' && url.protocol !== 'wss:') throw new Error('Для этой страницы нужен сервер с HTTPS.');
  url.pathname = '/rooms'; url.search = ''; url.hash = '';
  return url.href;
}

export class RoomConnection {
  constructor(address, code = null) {
    this.events = {}; this.open = false; this.closed = false;
    this.socket = new WebSocket(roomSocketURL(address));
    this.socket.onopen = () => this.socket.send(JSON.stringify({action:code?'join':'create',code,version:ROOM_VERSION}));
    this.socket.onmessage = event => {
      let msg; try { msg = JSON.parse(event.data); } catch { return; }
      if(msg.event==='created') this.emit('created',msg.code);
      if(msg.event==='paired') { this.open=true;this.emit('open'); }
      if(msg.event==='data' && this.open) this.emit('data',msg.data);
      if(msg.event==='error') {this.failed=true;this.emit('error',new Error(msg.message));this.close();}
    };
    this.socket.onerror = () => {this.failed=true;this.emit('error',new Error('Сервер комнат недоступен. Проверь адрес и что на нём запущена серверная версия игры.'));};
    this.socket.onclose = () => {this.open=false;this.closed=true;this.emit('close');};
  }
  on(event,fn) {(this.events[event]??=[]).push(fn);return this;}
  emit(event,...args) {for(const fn of this.events[event]||[])fn(...args);}
  removeAllListeners() {this.events={};}
  send(data) {if(this.open&&this.socket.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({action:'data',data}));}
  close() {this.open=false;this.closed=true;this.socket.close();}
}
