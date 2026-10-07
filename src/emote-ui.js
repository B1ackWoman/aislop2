import { EMOTES, EMOTE_DURATION } from './animations.js';
import { makeCustomizationPreview } from './visuals.js';
export function emoteLibraryMarkup(){
 return `<div class="eyebrow">ТАНЦЫ И ПЕСНИ</div><h2>Нажми — и танцуй.</h2><p class="small-note">Выбери любую эмоцию: боец покажет танец под её музыку.</p><div class="emote-gallery"><div class="emote-demo"><canvas id="emote-demo" aria-label="Предпросмотр танца"></canvas><p id="emote-track-name" role="status">Выбери танец справа</p><button id="preview-emote" class="primary" hidden>■ Остановить</button><div class="demo-timeline"><i id="demo-time"></i></div></div><div class="emote-song-grid" role="group" aria-label="Все танцы с музыкой">${EMOTES.map(e=>`<button class="song-choice" data-song="${e.id}" aria-pressed="false"><span class="song-icon" aria-hidden="true">${e.icon}</span><b>${e.name}</b><small><span class="song-play">▶</span> ${EMOTE_DURATION} сек.</small></button>`).join('')}</div></div>`;
}
export function bindEmoteLibrary(root,audio,look,onAudioChange=()=>{}){
 const $=id=>root.querySelector('#'+id);let selected=EMOTES[0].id,playing=false,started=0,disposed=false,request=0;
 const elapsed=now=>Math.max(0,(now-started)/1000);
 const preview=makeCustomizationPreview($('emote-demo'),look,now=>playing?{mode:'emote',emoteId:selected,time:Math.min(EMOTE_DURATION,elapsed(now))}:{mode:'idle',time:now/1000});
 const buttons=[...root.querySelectorAll('[data-song]')];
 function update(){for(const b of buttons){const active=playing&&b.dataset.song===selected;b.setAttribute('aria-pressed',String(active));b.querySelector('.song-play').textContent=active?'♫':'▶';}$('preview-emote').hidden=!playing;}
 function stop(){request++;playing=false;audio.setEmote(null);update();}
 async function play(id){stop();selected=id;const ticket=++request;audio.setEnabled(true);onAudioChange();try{await audio.unlock();if(disposed||ticket!==request)return;started=performance.now();playing=true;update();}catch{if(!disposed&&ticket===request)$('emote-track-name').textContent='Нажми ещё раз, чтобы разрешить звук.';}}
 for(const b of buttons)b.onclick=()=>play(b.dataset.song);
 $('preview-emote').onclick=stop;
 return {get emote(){return playing&&elapsed(performance.now())<EMOTE_DURATION?selected:null;},elapsed,
 render(){const now=performance.now();if(playing&&elapsed(now)>=EMOTE_DURATION)stop();preview.render(now);$('demo-time').style.width=playing?Math.min(100,elapsed(now)/EMOTE_DURATION*100)+'%':'0%';if(playing)$('emote-track-name').textContent=audio.recordings.caption(selected);},
 dispose(){disposed=true;stop();preview.dispose();}};
}
