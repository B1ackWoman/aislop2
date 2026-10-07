import { viewDirection, hudPlayer, screenMovement } from './player-view.js';
import './style.css';
import './nostalgia.css';
import * as THREE from 'three';
import { RoomConnection } from './room-connection.js';
import { state, step, SKILLS, skillById, setLoadout, finishLoadout, chooseRoundSkill, selectEmote, EMOTE_DURATION, MAPS, getMap, overlapsBox, clearShot } from './game.js';
import { cleanLook, LOOK_PRESETS } from './maps.js';
import { mapChoicesMarkup } from './map-ui.js';
import { customizationMarkup } from './customization-ui.js';
import { GameAudio } from './audio.js';
import { GameControls, RemoteControls } from './input.js';
import { storedEmotes } from './emote-storage.js';
import { emoteLibraryMarkup, bindEmoteLibrary } from './emote-ui.js';
import { makeCombatVisuals, syncBattleCharacters } from './combat-visuals.js';
import { makeArena, makeCharacter, makeCustomizationPreview } from './visuals.js';
import { EMOTES, animateCharacter } from './animations.js';
import { skillPickerMarkup, bindSkillPicker } from './skill-ui.js';

const $ = id => document.getElementById(id);
let saved = {}; try { saved = JSON.parse(localStorage.getItem('roundish-settings-v2') || '{}') || {}; } catch {}
const settings = { roomServer: typeof saved.roomServer==='string'?saved.roomServer.slice(0,2048):'', mapId: getMap(saved.mapId).id, rotateMaps: saved.rotateMaps !== false, look: cleanLook(saved.look), audio: saved.audio || {}, loadout: Array.isArray(saved.loadout) ? [...new Set(saved.loadout)].filter(id => SKILLS.some(s => s.id === id)).slice(0, 3) : [] };
const audio = new GameAudio(settings.audio);
function saveSettings() { settings.audio = audio.settings(); try { localStorage.setItem('roundish-settings-v2', JSON.stringify(settings)); } catch {} }
let game = state(settings.mapId, settings.rotateMaps), mode = 'menu', self = 0, conn, lastPhase = '', pendingLoadout = null, lastSent = 0, roomTimer, botTimer = 0, botInput = {}, botPath = [], preview = null, skillPreview = null, accumulator = 0, receivedGameAt = 0;
const controls = new GameControls(), remoteControls = new RemoteControls(), mouse = new THREE.Vector2(), ray = new THREE.Raycaster(), plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0), aim = new THREE.Vector3();
const renderPositions = [new THREE.Vector3(), new THREE.Vector3()];
const scene = new THREE.Scene(); scene.background = new THREE.Color('#b6a4d1'); scene.fog = new THREE.Fog('#b6a4d1', 60, 140);
const renderer = new THREE.WebGLRenderer({ canvas: $('world'), antialias: true }); renderer.setPixelRatio(Math.min(devicePixelRatio, 2)); renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.1;renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
const camera = new THREE.PerspectiveCamera(36, innerWidth / innerHeight, .5, 180); camera.position.set(29, 34, 44);
scene.add(new THREE.HemisphereLight(0xd7e7ff, 0x515175, 2.4));
const sun = new THREE.DirectionalLight(0xfff0d5, 3); sun.position.set(8, 25, 10); sun.castShadow = true; sun.shadow.mapSize.set(2048, 2048); Object.assign(sun.shadow.camera, { left: -24, right: 24, top: 24, bottom: -24, far: 80 }); sun.shadow.bias = -.00025; scene.add(sun);
const arena = makeArena(scene); arena.show(settings.mapId);
const menuPreview = makeCustomizationPreview($('menu-character'), settings.look, now=>({mode:'idle',time:now/1000}));
const fighters = [makeCharacter(scene, settings.look), makeCharacter(scene, cleanLook({ color: '#ff8875', hat: 'beanie' }, 1))];
const combatVisuals = makeCombatVisuals(scene, fighters);
const victoryStage = new THREE.Group(); scene.add(victoryStage);
const pedestal = new THREE.Mesh(new THREE.CylinderGeometry(1.22, 1.38, .22, 32), new THREE.MeshStandardMaterial({color:'#d5ef68',roughness:.6})); pedestal.castShadow=true;pedestal.receiveShadow=true;pedestal.position.y=-.14; victoryStage.add(pedestal);
const stageRing = new THREE.Mesh(new THREE.TorusGeometry(1.55, .035, 8, 64), new THREE.MeshBasicMaterial({color:'#fff2aa'})); stageRing.rotation.x=Math.PI/2; stageRing.position.y=.04;victoryStage.add(stageRing);victoryStage.visible=false;
const cameraFocus = new THREE.Vector3(-8,0,0);
function resize() { renderer.setSize(innerWidth, innerHeight); camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix(); }
addEventListener('resize', resize); resize();
function toast(text) { $('toast').textContent = text; $('toast').classList.add('show'); clearTimeout(toast.timer); toast.timer = setTimeout(() => $('toast').classList.remove('show'), 4200); }
function closeModal() { preview?.dispose(); preview = null; skillPreview?.dispose(); skillPreview = null; $('modal').hidden = true; $('modal').classList.remove('skill-picker'); }
function modal(html, closable = true) { closeModal(); $('dialog-content').innerHTML = html; $('modal').hidden = false; $('close').hidden = !closable; }
function send(data) { if (conn?.open) conn.send(data); }
function updateSoundButton() { $('sound').textContent = audio.enabled ? '♫ Звук: вкл.' : '♫ Звук: выкл.'; $('sound').setAttribute('aria-pressed', String(audio.enabled)); }
updateSoundButton();
let recordingsReady;
function prepareRecordings() { return recordingsReady ||= (async()=>{try{for(const entry of await storedEmotes()){try{await audio.recordings.import(entry.id,entry.file,entry.start);}catch{}}}catch{}await audio.recordings.load(settings.roomServer);})(); }
function unlockAudio() { audio.unlock().then(() => { prepareRecordings(); if ($('audio-hint')) $('audio-hint').hidden = true; updateSoundButton(); }).catch(() => toast('Браузер заблокировал звук. Нажми кнопку звука ещё раз.')); }
addEventListener('pointerdown', unlockAudio, { once: true, capture: true }); addEventListener('keydown', unlockAudio, { once: true, capture: true });
$('sound').onclick = () => { audio.setEnabled(!audio.enabled); if (audio.enabled) unlockAudio(); updateSoundButton(); saveSettings(); };
$('emote-settings').onclick = () => {modal(emoteLibraryMarkup());preview=bindEmoteLibrary($('dialog-content'),audio,settings.look,()=>{updateSoundButton();saveSettings();});};
$('audio-settings').onclick = () => {
  modal('<div class="eyebrow">ГРОМКОСТЬ</div><h2>Звучит как хаос.</h2><p>Музыка играет в меню и во время победных танцев. Выстрелы, шаги и умения звучат на арене.</p><label class="volume-row">Музыка <input id="music-volume" type="range" min="0" max="100" value="' + Math.round(audio.musicVolume * 100) + '"><output id="music-value">' + Math.round(audio.musicVolume * 100) + '%</output></label><label class="volume-row">Эффекты <input id="effects-volume" type="range" min="0" max="100" value="' + Math.round(audio.effectsVolume * 100) + '"><output id="effects-value">' + Math.round(audio.effectsVolume * 100) + '%</output></label><button id="test-sound" class="secondary">Послушать выстрел</button>');
  for (const type of ['music', 'effects']) $(type + '-volume').oninput = event => { audio.setVolume(type, Number(event.target.value) / 100); $(type + '-value').textContent = event.target.value + '%'; saveSettings(); };
  $('test-sound').onclick = () => { audio.setEnabled(true); updateSoundButton(); audio.unlock().then(() => audio.effect('shot')); saveSettings(); };
};
$('customize').onclick = () => {
  audio.effect('click');
  modal(customizationMarkup(settings.look));
  preview = makeCustomizationPreview($('character-preview'), settings.look);
  function apply() {
    settings.look=cleanLook(settings.look);preview.character.outfit(settings.look);fighters[0].outfit(settings.look);menuPreview.character.outfit(settings.look);saveSettings();
    const root=$('dialog-content');root.querySelector('.custom-grid').style.setProperty('--fighter-color',settings.look.color);
    root.querySelectorAll('[data-preset]').forEach(button=>button.setAttribute('aria-pressed',String(JSON.stringify(cleanLook(LOOK_PRESETS.find(p=>p.id===button.dataset.preset)))===JSON.stringify(settings.look))));
    for(const field of ['color','hat','face'])root.querySelectorAll('[data-'+field+']').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset[field]===settings.look[field])));
  }
  for(const field of ['color','hat','face'])$('dialog-content').querySelectorAll('[data-'+field+']').forEach(button=>button.onclick=()=>{settings.look[field]=button.dataset[field];apply();audio.effect('click');});
  $('dialog-content').querySelectorAll('[data-preset]').forEach(button=>button.onclick=()=>{settings.look=cleanLook(LOOK_PRESETS.find(p=>p.id===button.dataset.preset));apply();audio.effect('pick');});
  $('save-look').onclick = () => { closeModal(); audio.effect('pick'); };
};
$('menu-character').onclick=()=>$('customize').click();
$('menu-character').onkeydown=event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();$('customize').click();}};
$('map-choices').innerHTML=mapChoicesMarkup(settings.mapId);$('rotate-maps').checked=settings.rotateMaps;
function mapLabel(){const map=getMap(settings.mapId);$('arena-title').textContent=String(MAPS.indexOf(map)+1).padStart(2,'0')+' / '+map.name.toUpperCase();$('arena-subtitle').textContent=map.subtitle;document.querySelectorAll('[data-map]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.map===settings.mapId)));}
mapLabel();
for(const button of document.querySelectorAll('[data-map]'))button.onclick=()=>{settings.mapId=button.dataset.map;arena.show(settings.mapId);mapLabel();saveSettings();audio.effect('click');};
$('rotate-maps').onchange = event => { settings.rotateMaps = event.target.checked; saveSettings(); };
function start(m) {
  mode = m; self = m === 'guest' ? 1 : 0;
  game = state(settings.mapId, settings.rotateMaps, self === 0 ? [settings.look, cleanLook({ color: '#ff8875', hat: 'beanie', face: 'angry' }, 1)] : [undefined, settings.look]);
  lastPhase = ''; pendingLoadout = null; accumulator = 0; controls.consumeCasts(); botTimer = 0; botPath = []; controls.clear(); remoteControls.clear(); audio.setMenu(false); audio.reset(game.players);
  $('menu').hidden = true; $('hud').hidden = false; $('exit').hidden = false; $('footer-mark').hidden = true; closeModal(); document.body.classList.add('playing');
  $('name0').textContent = 'ТЫ'; $('name1').textContent = m === 'bot' ? 'БОТ' : 'ДРУГ';
  const map=getMap(game.mapId),height=Math.max(map.depth*1.65,map.width/camera.aspect*1.13);
  camera.position.set(0,height,height*.88*viewDirection(self));cameraFocus.set(0,0,0);camera.lookAt(cameraFocus);
  if (m === 'guest') game.phase='connecting';
  if (m === 'bot') { setLoadout(game, 1, [game.players[1].offers[Math.floor(Math.random()*5)]]); finishLoadout(game, 1); }
  toast('Выбери одно из пяти умений. После поражения сможешь взять ещё одно.');
}
$('bot').onclick = () => start('bot');
function cleanup() { clearTimeout(roomTimer); if (conn) { conn.removeAllListeners(); conn.close(); } conn = null; remoteControls.clear(); }
$('exit').onclick = () => { cleanup(); mode = 'menu'; $('audio-settings').disabled=false;controls.clear(); audio.setMenu(true); audio.setEmote(null); combatVisuals.clear(); victoryStage.visible=false; $('victory-showcase').hidden=true; $('skill-hud').hidden=true; document.body.classList.remove('celebrating'); $('menu').hidden = false; $('hud').hidden = true; $('exit').hidden = true; $('footer-mark').hidden = false; closeModal(); document.body.classList.remove('playing'); fighters[0].outfit(settings.look); };
$('close').onclick = () => { closeModal(); if (mode === 'menu') cleanup(); else lastPhase=''; };
$('online').onclick = () => {
  modal('<div class="eyebrow">ПРИВАТНАЯ ДУЭЛЬ</div><h2>Две пушки.<br>Одна дружба.</h2><p>Создай комнату и передай код другу. Карты и их смену выбирает хозяин комнаты. Каждый играет своим бойцом.</p><label for="room-server">Адрес сервера игры</label><input id="room-server" aria-label="Адрес сервера игры" placeholder="https://игра.рф"><p class="small-note">Если игра открыта на своём сервере, оставь поле пустым. Для игры с другом у обоих должен быть один адрес сервера.</p><div class="room-actions"><button class="primary" id="host">Создать комнату ›</button></div><div class="room-actions"><input id="code" aria-label="Код комнаты" placeholder="Код комнаты" maxlength="6"><button class="secondary" id="join">Войти</button></div><p id="netstatus">Оба игрока должны открыть эту версию игры. Для соединения нужен интернет.</p>');
  $('room-server').value=settings.roomServer; $('room-server').style.textTransform='none';
  $('host').onclick = host; $('join').onclick = join;
};
function netStatus(text) { if ($('netstatus')) $('netstatus').textContent = text; else toast(text); }
function connectRoom(isHost,code=null) {
  cleanup();settings.roomServer=$('room-server').value.trim();saveSettings();
  try {
    const c=new RoomConnection(settings.roomServer,code);
    c.on('created',roomCode=>{clearTimeout(roomTimer);netStatus('Ждём друга. Передай ему код:');document.querySelector('.room-code')?.remove();const el=document.createElement('div');el.className='room-code';el.textContent=roomCode;$('netstatus').after(el);});
    c.on('error',error=>{netStatus(error.message);clearTimeout(roomTimer);if($('host'))$('host').disabled=false;if($('join'))$('join').disabled=false;});
    wire(c,isHost);
    roomTimer=setTimeout(()=>{netStatus('Сервер не ответил. На этом адресе должен быть запущен сервер ROUNDISH 1.15, а не только HTML-файл.');cleanup();if($('host'))$('host').disabled=false;if($('join'))$('join').disabled=false;},10000);
  } catch(error) {netStatus(error.message);if($('host'))$('host').disabled=false;if($('join'))$('join').disabled=false;}
}
function wire(c, isHost) {
  if (conn && conn !== c) { c.close(); return; }
  conn = c;
  c.on('open', () => {
    clearTimeout(roomTimer); start(isHost ? 'host' : 'guest');
    audio.unlock().then(()=>prepareRecordings()).then(()=>audio.recordings.load(settings.roomServer)).catch(()=>{});
    if (isHost) send({ type: 'start', game });
    send({ type: 'look', look: settings.look });
  });
  c.on('data', msg => {
    if (!msg || typeof msg !== 'object') return;
    if (mode === 'host') {
      if (msg.type === 'input') { remoteControls.receive(msg.input,performance.now(),!!msg.reset); }
      if (msg.type === 'look') { game.players[1].look = cleanLook(msg.look, 1); send({ type: 'state', game }); }
      if (msg.type === 'loadout' && game.phase === 'loadout') { if (Array.isArray(msg.ids) && msg.ids.length === 1 && setLoadout(game, 1, msg.ids) && finishLoadout(game, 1)) send({type:'state',game}); else send({type:'reject',reason:'Выбери одно умение из предложенных пяти.'}); }
      if (msg.type === 'pick' && game.phase === 'pick' && game.loser === 1) { if (chooseRoundSkill(game,1,msg.id ?? null,msg.slot)) { botTimer=0;send({type:'state',game}); } else send({type:'reject',reason:'Выбери одно из предложенных умений и подходящий слот.'}); }
      if (msg.type === 'emote' && selectEmote(game,1,msg.id)) send({type:'state',game});
    } else if (mode === 'guest') {
      if ((msg.type === 'state' || msg.type === 'start') && msg.game?.players?.length === 2) { game = msg.game; receivedGameAt = performance.now(); if (game.players[1].ready || game.phase !== 'loadout') pendingLoadout = null; }
      if (msg.type === 'start') { lastPhase = ''; audio.reset(game.players); }
      if (msg.type === 'reject') { pendingLoadout=null; lastPhase='';toast(msg.reason || 'Не удалось выбрать умения.'); }
    }
  });
  c.on('close', () => { clearTimeout(roomTimer); if(mode==='menu'&&!c.failed){netStatus('Соединение с сервером закрыто. Создай комнату заново.');if($('host'))$('host').disabled=false;if($('join'))$('join').disabled=false;} if (mode !== 'menu') { game.phase = 'disconnected'; closeModal(); toast('Друг отключился. Вернись в меню, чтобы начать новую игру.'); } });
}
function host() {
  netStatus('Создаём комнату…');$('host').disabled=true;connectRoom(true);
}
function join() {
  const code=$('code').value.trim().toUpperCase();if(!/^[A-Z2-9]{6}$/.test(code)){netStatus('Введи код из 6 символов.');return;}
  netStatus('Подключаемся…');$('join').disabled=true;connectRoom(false,code);
}
function confirmLoadout(ids) {
  settings.loadout = ids; saveSettings();
  if (mode === 'guest') { pendingLoadout = ids; send({type:'loadout',ids}); lastPhase=''; return; }
  if (setLoadout(game,self,ids) && finishLoadout(game,self)) { closeModal(); audio.effect('pick'); send({type:'state',game}); }
}
function replaceSkill(id,slot) {
  if (mode === 'guest') { send({type:'pick',id,slot}); modal('<div class="waiting-screen"><div class="waiting-dots">● ● ●</div><h2>Готовимся к раунду…</h2></div>',false);return; }
  if (chooseRoundSkill(game,self,id,slot)) { botTimer=0;botPath=[];closeModal();audio.effect('pick');send({type:'state',game}); }
}
function openSkillPicker(kind) {
  const equipped=game.players[self].skills, offers=game.players[self].offers || [];
  modal(skillPickerMarkup(kind,equipped,offers),false);$('modal').classList.add('skill-picker');
  skillPreview=bindSkillPicker($('dialog-content'),{kind,equipped,offers,look:settings.look,onConfirm:confirmLoadout,onReplace:replaceSkill,onSkip:()=>replaceSkill(null)});
}
function chooseEmote(id) {
  if (game.phase !== 'celebration' || game.winner !== self) return;
  if (mode === 'guest') send({type:'emote',id});
  else if (selectEmote(game,self,id)) { send({type:'state',game});audio.effect('pick'); }
}
function phaseUI() {
  const phaseKey = game.phase + ':' + (game.phase === 'loadout' ? !!(game.players[self].ready || pendingLoadout) : game.phase === 'celebration' ? game.celebration?.emote || '' : game.round) + ':' + (['loadout','pick'].includes(game.phase)?(game.players[self].offers||[]).join(','):'');
  if (phaseKey === lastPhase) return; lastPhase=phaseKey;closeModal(); releaseControls(); remoteControls.consumeCasts();
  if(game.phase==='fight') game.players.forEach((p,i)=>renderPositions[i].set(p.x,p.y,p.z));
  $('audio-settings').disabled=['loadout','pick','celebration'].includes(game.phase);$('victory-showcase').hidden=game.phase!=='celebration';$('skill-hud').hidden=game.phase!=='fight';document.body.classList.toggle('celebrating',game.phase==='celebration');
  if (game.phase === 'connecting') modal('<div class="waiting-screen"><h2>Готовим выбор умений…</h2><p>Ждём варианты от хозяина комнаты.</p></div>',false);
  if (game.phase === 'loadout') {
    if (game.players[self].ready || pendingLoadout) modal('<div class="waiting-screen"><div class="eyebrow">НАБОР ГОТОВ</div><div class="waiting-dots">● ● ●</div><h2>Друг выбирает первое умение.</h2><p>Он тоже выбирает одно из пяти. Бой начнётся, когда готовы оба.</p></div>',false);
    else openSkillPicker('initial');
  }
  if (game.phase === 'celebration') {
    const won = game.winner === self, emote = game.celebration?.emote;if(!emote)audio.effect('victory');$('toast').classList.remove('show');
    $('winner-name').textContent = won ? 'ТВОЙ ВЫХОД!' : mode === 'bot' ? 'БОТ УМЕЕТ ПРАЗДНОВАТЬ' : 'ВЫХОД ДРУГА';
    $('emote-caption').textContent = emote ? (EMOTES.find(e=>e.id===emote)?.name || 'Победная эмоция')+' · '+audio.recordings.caption(emote) : won ? 'Выбери эмоцию — её увидят оба игрока' : 'Победитель выбирает свою эмоцию…';
    $('emote-progress').hidden=!emote;
    $('emote-buttons').innerHTML = !emote && won ? EMOTES.map(e=>`<button class="emote-choice" data-emote="${e.id}"><span>${e.icon}</span>${e.name}</button>`).join('') : '';
    document.querySelectorAll('[data-emote]').forEach(button=>button.onclick=()=>chooseEmote(button.dataset.emote));
    if (mode==='bot' && !won && !emote) {const round=game.round;setTimeout(()=>{if(mode==='bot'&&game.phase==='celebration'&&game.round===round&&!game.celebration.emote)selectEmote(game,1,EMOTES[Math.floor(Math.random()*EMOTES.length)].id);},1000);}
  }
  if (game.phase === 'pick') {
    if (game.loser === self) openSkillPicker('replace');
    else if (mode==='bot') {
      toast('Бот выбирает новое умение…');const round=game.round;
      setTimeout(()=>{if(mode==='bot'&&game.phase==='pick'&&game.round===round){const choices=game.players[1].offers;chooseRoundSkill(game,1,choices[Math.floor(Math.random()*choices.length)],game.players[1].skills.length===3?Math.floor(Math.random()*3):undefined);botTimer=0;}},1400);
    } else modal('<div class="waiting-screen"><div class="eyebrow">РАУНД ЗА ТОБОЙ</div><div class="waiting-dots">● ● ●</div><h2>Друг меняет тактику.</h2><p>Он выбирает одно из пяти новых умений. При трёх занятых слотах — заменяет одно.</p></div>',false);
  }
  if (game.phase === 'over') {
    modal('<div class="eyebrow">GG · ХОРОШАЯ ИГРА</div><h2>'+(game.winner===self?'Победа! Ты — легенда.':'Реванш?')+'</h2><p>Итоговый счёт: '+game.players[self].score+' : '+game.players[1-self].score+'</p><button id="again" class="primary">В меню ›</button>',false);$('again').onclick=()=>$('exit').click();
  }
  if (game.phase === 'fight') {const map=getMap(game.mapId),height=Math.max(map.depth*1.65,map.width/camera.aspect*1.13);camera.position.set(0,height,height*.88*viewDirection(self));cameraFocus.set(0,0,0);camera.lookAt(cameraFocus);settings.loadout=[...game.players[self].skills];saveSettings();document.activeElement?.blur();toast('Раунд '+game.round+' · '+getMap(game.mapId).name);updateSkillHUD(true);}
}
function updateSkillHUD(rebuild=false) {
  const p=game.players[self];const key=p.skills.join(',');
  if (rebuild || $('skill-slots').dataset.loadout!==key) {
    $('skill-slots').dataset.loadout=key;$('skill-slots').innerHTML=p.skills.map((id,i)=>{const skill=skillById(id);return `<button class="active-skill" data-cast="${i}" style="--skill-color:${skill.color}"><i class="cooldown-mask"></i><kbd>${i+1}</kbd><b>${skill.name}</b><small>Готово</small></button>`;}).join('');
    document.querySelectorAll('[data-cast]').forEach(button=>button.onclick=()=>{controls.cast(Number(button.dataset.cast));button.blur();});
  }
  document.querySelectorAll('[data-cast]').forEach(button=>{const i=Number(button.dataset.cast),cd=p.skillCooldowns[i]||0,skill=skillById(p.skills[i]);button.disabled=cd>0||!!p.cast||game.phase!=='fight';button.classList.toggle('ready',cd<=0);button.querySelector('small').textContent=p.cast?.slot===i?({preparation:'Подготовка',active:'Применение',recovery:'Завершение'}[p.cast.phase]):cd>0?cd.toFixed(1)+' с':'Готово';button.querySelector('.cooldown-mask').style.height=Math.min(100,cd/skill.cooldown*100)+'%';});
}
function releaseControls() {
  controls.clear();
  if (mode === 'guest') send({type:'input', input:{...controls.read(false), angle:game.players[self].angle},reset:true});
}
function canControl() { return mode !== 'menu' && game.phase === 'fight' && $('modal').hidden && !document.hidden; }
addEventListener('keydown', event => {
  if (!canControl() || ['INPUT', 'SELECT', 'TEXTAREA', 'BUTTON'].includes(event.target.tagName)) return;
  if (controls.down(event.code, event.repeat)) event.preventDefault();
});
addEventListener('keyup', event => controls.up(event.code));
addEventListener('blur', releaseControls);
document.addEventListener('visibilitychange', () => { if (document.hidden) releaseControls(); });
addEventListener('pointermove', event => { mouse.set(event.clientX / innerWidth * 2 - 1, 1 - event.clientY / innerHeight * 2); if(!(event.buttons & 1)) controls.fire=false; });
$('world').addEventListener('pointerdown', event => { if (event.button === 0 && canControl()) controls.fire = true; });
addEventListener('pointerup', () => { controls.fire = false; });
addEventListener('pointercancel', () => { controls.fire = false; });
function input() {
  const p = game.players[self]; plane.constant = -(p.y + .8); ray.setFromCamera(mouse, camera); ray.ray.intersectPlane(plane, aim);
  return { ...screenMovement(controls.read(canControl()),self), angle: Math.atan2(aim.x - p.x, aim.z - p.z), aimX: aim.x, aimZ: aim.z };
}
// A small grid search lets the bot go around crates rather than run into them.
function findPath(from, target, map) {
  const width = map.width - 2, depth = map.depth - 2, minX = -map.width / 2 + 1.5, minZ = -map.depth / 2 + 1.5;
  const toCell = p => ({ x: Math.max(0, Math.min(width - 1, Math.round(p.x - minX))), z: Math.max(0, Math.min(depth - 1, Math.round(p.z - minZ))) });
  const start = toCell(from), end = toCell(target), key = c => c.z * width + c.x, parents = new Map([[key(start), -1]]), queue = [start]; let best = start, bestDistance = Infinity;
  for (let cursor = 0; cursor < queue.length; cursor++) {
    const c = queue[cursor], distance = Math.hypot(c.x - end.x, c.z - end.z);
    if (distance < bestDistance) { best = c; bestDistance = distance; } if (distance === 0) break;
    for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const n = { x: c.x + dx, z: c.z + dz }, id = key(n);
      if (n.x < 0 || n.x >= width || n.z < 0 || n.z >= depth || parents.has(id)) continue;
      const x = n.x + minX, z = n.z + minZ;
      if (map.obstacles.some(o => o.height > from.y + .01 && overlapsBox(x, z, .67, o))) continue;
      parents.set(id, key(c)); queue.push(n);
    }
  }
  const path = []; let id = key(best);
  while (id !== key(start) && id !== -1 && path.length < width * depth) { path.unshift({ x: id % width + minX, z: Math.floor(id / width) + minZ }); id = parents.get(id) ?? -1; }
  return path;
}
function bot(dt) {
  botTimer -= dt; const p = game.players[1], target = game.players[0], map = getMap(game.mapId), dx = target.x - p.x, dz = target.z - p.z, distance = Math.hypot(dx, dz), visible = clearShot(p, target, map.obstacles, p.y + .65);
  if (botTimer <= 0) {
    botTimer = .35;
    if (!visible || distance > 8) botPath = findPath(p, target, map);
    let x = 0, z = 0;
    if (visible && distance <= 8) { const toward = distance < 4 ? -1 : distance > 6 ? 1 : 0; x = dx / (distance || 1) * toward + Math.cos(game.time * .8) * .45; z = dz / (distance || 1) * toward + Math.sin(game.time * .8) * .45; }
    else {
      while (botPath.length && Math.hypot(p.x - botPath[0].x, p.z - botPath[0].z) < .65) botPath.shift();
      if (botPath[0]) { x = botPath[0].x - p.x; z = botPath[0].z - p.z; }
    }
    if (Math.abs(p.x) > map.width / 2 - 2) x = -Math.sign(p.x); if (Math.abs(p.z) > map.depth / 2 - 2) z = -Math.sign(p.z);
    const danger = game.bullets.some(b => b.owner === 0 && Math.hypot(b.x - p.x, b.z - p.z) < 3);
    const skills=p.skills.map((id,i)=>{const skill=skillById(id);return (p.skillCooldowns[i]||0)<=0 && Math.random()<.45 && ((['heal','bubble'].includes(id)&&p.hp<75) || (!['heal','bubble'].includes(id)&&distance<skill.range+1));});
    botInput = { x, z, skills, angle: Math.atan2(dx, dz) + (Math.random() - .5) * .075, fire: visible, jump: danger && Math.random() < .4, shield: danger };
  }
  botInput.angle = Math.atan2(dx, dz); return botInput;
}
let previous = performance.now();
function frame(now) {
  requestAnimationFrame(frame); const dt = Math.min((now - previous) / 1000, .1); previous = now; let localInput;
  if (mode !== 'menu') {
    localInput = input();
    if (mode === 'guest') { if (now - lastSent > 30) { send({ type: 'input', input: localInput }); controls.consumeCasts();lastSent = now; } }
    else {
      accumulator += dt;
      let advanced=false;while (accumulator >= 1 / 60) { step(game, [localInput, mode === 'bot' ? bot(1 / 60) : remoteControls.read(now)], 1 / 60); accumulator -= 1 / 60;advanced=true; } if(advanced){controls.consumeCasts();remoteControls.consumeCasts();}
      if (mode === 'host' && now - lastSent > 40) { phaseUI(); send({ type: 'state', game }); lastSent = now; }
    }
    phaseUI(); audio.observe(game.players, self, game.phase==='fight');
    for (let i = 0; i < 2; i++) {
      const p = game.players[hudPlayer(i,self)]; $('hp' + i).style.width = Math.max(0, p.hp / p.max * 100) + '%'; $('hp' + i).style.background = p.look.color;
      $('cards' + i).textContent = p.skills.map(id => skillById(id)?.symbol).join('  ')+(p.stun>0?' · Оглушён':p.pull?.type==='tongue'?' · Язык притягивает':p.charm>0?' · Обаяние: можно сопротивляться':p.slow>0?' · Замедлен':''); fighters[hudPlayer(i,self)].outfit(p.look);
    }
    $('score').textContent = game.players[self].score + ' : ' + game.players[1-self].score; $('round').textContent = 'РАУНД ' + game.round; $('map-name').textContent = getMap(game.mapId).name;updateSkillHUD();
  }
  if(mode==='menu')menuPreview.render(now);
  const menu = mode === 'menu', map = getMap(menu ? settings.mapId : game.mapId); arena.show(map.id);
  const narrow = camera.aspect < 1.1;
  const overview = Math.max(map.depth * 1.65, map.width / camera.aspect * 1.13);
  const celebrating=!menu&&game.phase==='celebration',winner=game.players[game.winner]||game.players[0];
  const snapshotAge=mode==='guest'?Math.min(.1,Math.max(0,(now-receivedGameAt)/1000)):0;
  const presentationTime=game.time+snapshotAge;
  const emoteTime=(game.celebration?.elapsed||0)+(game.celebration?.emote?snapshotAge:0);
  const stageY=Math.max(...map.obstacles.map(o=>o.height))+.8;
  const target=celebrating?new THREE.Vector3(winner.x,stageY+.85,winner.z):menu?new THREE.Vector3(narrow?-2:-8,0,0):new THREE.Vector3(0,0,0);
  const destination=celebrating?target.clone().add(new THREE.Vector3(4.4,3.1,6.8)):menu?new THREE.Vector3(narrow?15:29,narrow?38:34,narrow?48:44):new THREE.Vector3(0,overview,overview*.88*viewDirection(self));
  if(celebrating){const progress=1-Math.exp(-Math.max(0,presentationTime-(game.celebration.startedAt??presentationTime))*3.5);camera.position.copy(new THREE.Vector3(0,overview,overview*.88*viewDirection(self)).lerp(destination,progress));cameraFocus.copy(target);}
  else{camera.position.lerp(destination,1-Math.exp(-dt*5));cameraFocus.lerp(target,1-Math.exp(-dt*5));}camera.lookAt(cameraFocus);
  victoryStage.visible=celebrating;victoryStage.position.set(winner.x,stageY,winner.z);stageRing.rotation.z=now*.001;
  if(celebrating&&game.celebration?.emote)$('emote-progress').querySelector('i').style.width=Math.min(100,emoteTime/EMOTE_DURATION*100)+'%';
  audio.setEmote(menu && preview?.emote ? preview.emote : celebrating ? game.celebration?.emote : null, menu && preview?.emote ? preview.elapsed(performance.now()) : emoteTime);
  if(celebrating&&game.celebration?.emote)$('emote-caption').textContent=(EMOTES.find(e=>e.id===game.celebration.emote)?.name||'Победная эмоция')+' · '+audio.recordings.caption(game.celebration.emote);
  for(let i=0;i<2;i++) {
    const p=game.players[i],fighter=fighters[i];fighter.group.visible=!celebrating||i===game.winner;
    if (!menu && !celebrating) {
      const destination=new THREE.Vector3(p.x,p.y,p.z);
      if (renderPositions[i].distanceTo(destination)>3 || game.phase!=='fight') renderPositions[i].copy(destination);
      else renderPositions[i].lerp(destination,1-Math.exp(-dt*24));
      fighter.group.position.copy(renderPositions[i]);
    } else fighter.group.position.set(menu?i?6:8:p.x,celebrating?stageY:0,menu?i?-7:-2:p.z);
    const heading=celebrating?Math.atan2(4.4,6.8):menu?i?.2:.4:(p.cast?.aim??p.angle);
    const angleDelta=Math.atan2(Math.sin(heading-fighter.group.rotation.y),Math.cos(heading-fighter.group.rotation.y));
    fighter.group.rotation.y+=angleDelta*(1-Math.exp(-dt*24));
    if(menu) { animateCharacter(fighter,{mode:'idle',time:now/1000,dt}); fighter.shield.visible=false; }
  }
  if(!menu)syncBattleCharacters(fighters,game,dt,{time:presentationTime,castSnapshotAge:snapshotAge,poseOnly:true});
  if(menu||celebrating)combatVisuals.clear();else combatVisuals.update(game,dt,{time:presentationTime,smooth:mode==='guest'});
  renderer.render(scene,camera);preview?.render(now);skillPreview?.render(now);
}
requestAnimationFrame(frame);
