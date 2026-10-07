import { EMOTE_IDS, recordingSpec, EMOTE_MUSIC_DURATION } from './emote-music.js';

export class RecordedEmotes {
  constructor(audio) { this.audio = audio; this.tracks = new Map(); this.server = new Map(); this.local = new Map(); this.epoch = 0; this.source = null; this.finished = false; }
  async loadEmbedded() {
    if (this.embedded) return this.embedded;
    const element = typeof document !== 'undefined' && document.getElementById('roundish-emote-bundle');
    if (!element) return;
    this.embedded = (async () => {
      const entries = JSON.parse(element.textContent);
      for (const id of EMOTE_IDS) {
        const spec = entries[id];
        if (!spec?.audio) continue;
        try {
          const bytes = Uint8Array.from(atob(spec.audio), char => char.charCodeAt(0));
          const buffer = await this.audio.context.decodeAudioData(bytes.buffer);
          const track = {name:String(spec.title).slice(0,120), start:0, buffer, local:false, embedded:true};
          this.server.set(id, track);
          if (!this.local.has(id)) this.tracks.set(id, track);
        } catch(error) { if (!this.local.has(id)) this.tracks.set(id, {error:'Не удалось прочитать встроенную песню.'}); }
      }
    })();
    return this.embedded;
  }
  async load(address = '') {
    const epoch = ++this.epoch;
    try {
      await this.loadEmbedded();
      if (epoch !== this.epoch) return;
      const base = new URL(address || location.href);
      if (base.protocol === 'file:') return;
      if (base.protocol === 'ws:') base.protocol = 'http:';
      if (base.protocol === 'wss:') base.protocol = 'https:';
      const manifest = new URL('/emotes/tracks.json', base);
      const response = await fetch(manifest, {cache:'no-store', signal:AbortSignal.timeout(10000)});
      if (!response.ok) throw new Error('Не удалось открыть список песен сервера.');
      const entries = await response.json();
      if (epoch !== this.epoch) return;
      this.server.clear(); this.tracks = new Map(this.local); this.error = null;
      await Promise.all(EMOTE_IDS.map(async id => {
        let spec;
        try {
          spec = recordingSpec(entries[id], manifest);
          if (!spec) return;
          if (base.protocol === 'https:' && new URL(spec.src).protocol !== 'https:') throw new Error('Для этой песни нужна ссылка HTTPS.');
          if (!this.local.has(id)) this.tracks.set(id, {...spec, loading:true});
          const res = await fetch(spec.src, {signal:AbortSignal.timeout(20000)});
          if (!res.ok) throw new Error('Аудиофайл не найден.');
          if (Number(res.headers.get('content-length')) > 20*1024*1024) throw new Error('Аудиофайл больше 20 МБ.');
          const bytes = await res.arrayBuffer();
          if (bytes.byteLength > 20*1024*1024) throw new Error('Аудиофайл больше 20 МБ.');
          const buffer = await this.audio.context.decodeAudioData(bytes);
          if (spec.start >= buffer.duration) throw new Error('Начало фрагмента находится за концом песни.');
          if (epoch !== this.epoch) return;
          const track = {...spec, buffer, local:false}; this.server.set(id, track);
          if (!this.local.has(id)) this.tracks.set(id, track);
        } catch (error) {
          if (epoch === this.epoch && !this.local.has(id)) this.tracks.set(id, {...spec, error:error.message});
        }
      }));
    } catch (error) { if (epoch === this.epoch) this.error = error.message; }
  }
  async import(id, file, start = 0) {
    if (!EMOTE_IDS.includes(id)) throw new Error('Неизвестная эмоция.');
    if (file.size > 20*1024*1024) throw new Error('Выбери аудиофайл до 20 МБ.');
    await this.audio.unlock();
    let buffer;
    try { buffer = await this.audio.context.decodeAudioData(await file.arrayBuffer()); }
    catch { throw new Error('Браузер не смог прочитать аудио. Попробуй MP3, WAV или OGG.'); }
    start = Number.isFinite(start) ? Math.max(0, start) : 0;
    if (start >= buffer.duration) throw new Error('Начало фрагмента находится за концом песни.');
    const track = {name:file.name, buffer, start, local:true};
    this.local.set(id, track); this.tracks.set(id, track);
    if (this.audio.emoteId === id) this.stop();
    return track;
  }
  remove(id) {
    this.local.delete(id);
    if (this.server.has(id)) this.tracks.set(id, this.server.get(id)); else this.tracks.delete(id);
    if (this.audio.emoteId === id) this.stop();
  }
  caption(id) {
    const track = this.tracks.get(id);
    return track?.buffer ? '♫ ' + track.name : track?.loading ? 'Песня загружается…' : track?.error || 'Песня ещё не добавлена';
  }
  stop() {
    const source = this.source; this.source = null; this.finished = false;
    if (source) { try { source.stop(); } catch {} source.disconnect(); }
  }
  sync(available) {
    const {context, emoteId, emoteAnchor, emoteMusic} = this.audio, track = this.tracks.get(emoteId);
    if (!available || !track?.buffer) { this.stop(); return; }
    if (this.source || this.finished) return;
    const elapsed = Math.max(0, context.currentTime - emoteAnchor);
    const offset = track.start + elapsed, remaining = Math.min(EMOTE_MUSIC_DURATION - elapsed, track.buffer.duration - offset);
    if (remaining <= .015) { this.finished = true; return; }
    const source = context.createBufferSource(); source.buffer = track.buffer; source.connect(emoteMusic); this.source = source;
    source.onended = () => { if (this.source === source) { this.source = null; this.finished = true; source.disconnect(); } };
    source.start(context.currentTime, offset, remaining);
  }
}
