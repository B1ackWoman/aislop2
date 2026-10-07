import { EMOTE_IDS, EMOTE_MUSIC_DURATION } from './emote-music.js';
import { RecordedEmotes } from './recorded-emotes.js';

const hz = midi => 440 * 2 ** ((midi - 69) / 12);
const isHidden = () => typeof document !== 'undefined' && document.hidden;

export class GameAudio {
  constructor(settings = {}) {
    this.enabled = settings.enabled !== false;
    this.musicVolume = Number.isFinite(settings.musicVolume) ? Math.max(0, Math.min(1, settings.musicVolume)) : .35;
    this.effectsVolume = Number.isFinite(settings.effectsVolume) ? Math.max(0, Math.min(1, settings.effectsVolume)) : .65;
    this.context = null; this.menu = true; this.unlocked = false; this.tick = 0; this.nextNote = 0; this.counters = null;
    this.emoteId = null; this.emoteElapsed = 0; this.emoteAnchor = 0; this.emoteTick = 0;
    this.voices = new Set(); this.noiseBuffer = null;
    this.recordings = new RecordedEmotes(this);
  }
  async unlock() {
    if (!this.context) {
      this.context = new AudioContext();
      this.master = this.context.createGain();
      this.limiter = this.context.createDynamicsCompressor();
      this.limiter.threshold.value = -10; this.limiter.knee.value = 8; this.limiter.ratio.value = 4;
      this.limiter.attack.value = .003; this.limiter.release.value = .12;
      this.master.connect(this.limiter); this.limiter.connect(this.context.destination);
      this.music = this.context.createGain(); this.music.connect(this.master);
      this.emoteMusic = this.context.createGain(); this.emoteMusic.connect(this.master);
      this.effects = this.context.createGain(); this.effects.connect(this.master);
      this.nextNote = this.context.currentTime + .03;
      this.emoteAnchor = this.context.currentTime - this.emoteElapsed;
      this.emoteTick = Math.floor(this.emoteElapsed / .125);
      this.timer = setInterval(() => this.schedule(), 40);
    }
    await this.context.resume(); this.unlocked = this.context.state === 'running'; this.updateVolumes(); this.schedule();
  }
  updateVolumes() {
    if (!this.context) return;
    const now = this.context.currentTime;
    this.master.gain.setTargetAtTime(this.enabled ? .85 : 0, now, .025);
    this.music.gain.setTargetAtTime(this.menu && !this.emoteId ? this.musicVolume * .4 : 0, now, .08);
    this.emoteMusic.gain.setTargetAtTime(this.emoteId ? this.musicVolume * .85 : 0, now, .035);
    this.effects.gain.setTargetAtTime(this.effectsVolume * .72, now, .03);
  }
  setMenu(menu) {
    if (this.menu === menu) return;
    this.menu = menu;
    if (this.context) {
      this.stopVoices(this.music);
      if (menu) { this.nextNote = this.context.currentTime + .03; this.tick = 0; }
    }
    this.updateVolumes();
  }
  // Call every frame with the authoritative celebration clock. The AudioContext
  // clock keeps the groove steady between snapshots; large corrections resync it.
  setEmote(id, elapsed = 0) {
    id = EMOTE_IDS.includes(id) ? id : null;
    const phase = Number.isFinite(elapsed) ? Math.max(0, elapsed) : 0;
    const changed = id !== this.emoteId;
    this.emoteElapsed = phase;
    if (changed) {
      this.stopVoices(this.emoteMusic);
      this.recordings.stop();
      if (id) this.stopVoices(this.music);
      this.emoteId = id;
      this.emoteAnchor = (this.context?.currentTime || 0) - phase;
      this.emoteTick = Math.floor(phase / .125);
      this.updateVolumes();
      this.schedule();
    } else if (id && this.context && Math.abs(this.context.currentTime - this.emoteAnchor - phase) > .24) {
      this.stopVoices(this.emoteMusic);
      this.recordings.stop();
      this.emoteAnchor = this.context.currentTime - phase;
      this.emoteTick = Math.ceil(phase / .125);
    }
  }
  setEnabled(enabled) { this.enabled = enabled; if (!enabled) { this.stopVoices(this.emoteMusic); this.recordings.stop(); } this.updateVolumes(); }
  setVolume(type, value) { this[type === 'music' ? 'musicVolume' : 'effectsVolume'] = Math.max(0, Math.min(1, value)); this.updateVolumes(); }
  settings() { return { enabled: this.enabled, musicVolume: this.musicVolume, effectsVolume: this.effectsVolume }; }
  registerVoice(sources, nodes, envelope, bus, end) {
    const voice = { sources, nodes, envelope, bus, end, ended: false };
    this.voices.add(voice);
    let remaining = sources.length;
    for (const source of sources) source.onended = () => {
      if (--remaining > 0 || voice.ended) return;
      voice.ended = true;
      for (const node of nodes) node.disconnect();
      this.voices.delete(voice);
    };
    return voice;
  }
  stopVoices(bus) {
    if (!this.context || !bus) return;
    const now = this.context.currentTime;
    for (const voice of this.voices) if (voice.bus === bus && !voice.ended) {
      voice.envelope.gain.cancelScheduledValues(now);
      voice.envelope.gain.setTargetAtTime(.0001, now, .008);
      for (const source of voice.sources) { try { source.stop(now + .045); } catch {} }
    }
  }
  tone(freq, start, duration, volume, type = 'sine', bus = this.effects, endFreq = freq) {
    if (!this.context || !bus) return;
    start = Math.max(start, this.context.currentTime + .002);
    const oscillator = this.context.createOscillator(), envelope = this.context.createGain();
    oscillator.type = type; oscillator.frequency.setValueAtTime(Math.max(20, freq), start);
    oscillator.frequency.exponentialRampToValueAtTime(Math.max(20, endFreq), start + duration);
    envelope.gain.setValueAtTime(.0001, start); envelope.gain.exponentialRampToValueAtTime(Math.max(.0002, volume), start + .006); envelope.gain.exponentialRampToValueAtTime(.0001, start + duration);
    oscillator.connect(envelope); envelope.connect(bus);
    this.registerVoice([oscillator], [oscillator, envelope], envelope, bus, start + duration);
    oscillator.start(start); oscillator.stop(start + duration + .025);
  }
  noise(start, duration, volume, frequency, type = 'lowpass', bus = this.effects) {
    if (!this.context || !bus) return;
    start = Math.max(start, this.context.currentTime + .002);
    if (!this.noiseBuffer) {
      this.noiseBuffer = this.context.createBuffer(1, this.context.sampleRate, this.context.sampleRate);
      const data = this.noiseBuffer.getChannelData(0);
      for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
    }
    const source = this.context.createBufferSource(), filter = this.context.createBiquadFilter(), envelope = this.context.createGain();
    source.buffer = this.noiseBuffer; filter.type = type; filter.frequency.value = frequency;
    envelope.gain.setValueAtTime(Math.max(.0002, volume), start); envelope.gain.exponentialRampToValueAtTime(.0001, start + duration);
    source.connect(filter); filter.connect(envelope); envelope.connect(bus);
    this.registerVoice([source], [source, filter, envelope], envelope, bus, start + duration);
    source.start(start, 0, duration); source.stop(start + duration + .01);
  }
  instrument(midi, start, duration, volume, voice = 'piano', bus = this.emoteMusic) {
    if (!this.context || !bus) return;
    start = Math.max(start, this.context.currentTime + .002);
    const ctx = this.context, frequency = hz(midi), envelope = ctx.createGain(), filter = ctx.createBiquadFilter();
    const profiles = {
      piano: { waves: ['triangle', 'sine'], partials: [1, 2], gains: [.8, .18], cutoff: 3400, endCutoff: 1100, attack: .003, sustain: .07 },
      marimba: { waves: ['sine', 'sine'], partials: [1, 3.99], gains: [1, .16], cutoff: 6000, endCutoff: 3000, attack: .002, sustain: .035 },
      harp: { waves: ['triangle', 'sine'], partials: [1, 2], gains: [.8, .17], cutoff: 4500, endCutoff: 1500, attack: .003, sustain: .055 },
      pluck: { waves: ['sawtooth', 'triangle'], partials: [1, 1], gains: [.45, .5], cutoff: 5200, endCutoff: 450, attack: .003, sustain: .09, detune: 6 },
      synth: { waves: ['sawtooth', 'sawtooth'], partials: [1, 1], gains: [.5, .5], cutoff: 4100, endCutoff: 1700, attack: .01, sustain: .38, detune: 9 },
      organ: { waves: ['sine', 'sine', 'sine'], partials: [1, 2, 4], gains: [.66, .25, .13], cutoff: 5000, endCutoff: 5000, attack: .008, sustain: .75 },
      brass: { waves: ['sawtooth', 'square'], partials: [1, 1], gains: [.65, .2], cutoff: 3400, endCutoff: 1700, attack: .03, sustain: .6, detune: 4 },
      strings: { waves: ['sawtooth', 'sawtooth'], partials: [1, 1], gains: [.43, .43], cutoff: 3000, endCutoff: 2200, attack: .035, sustain: .6, detune: 11 },
      pad: { waves: ['triangle', 'sawtooth'], partials: [1, 1], gains: [.7, .2], cutoff: 2000, endCutoff: 1100, attack: .05, sustain: .55, detune: 8 },
      guitar: { waves: ['sawtooth', 'square'], partials: [1, 2], gains: [.65, .1], cutoff: 3800, endCutoff: 1400, attack: .004, sustain: .2, distort: 1.7 },
      robot: { waves: ['sawtooth', 'square'], partials: [1, 1], gains: [.55, .25], cutoff: 1600, endCutoff: 400, attack: .007, sustain: .3, formant: true },
      comic: { waves: ['triangle', 'square'], partials: [1, 1], gains: [.85, .13], cutoff: 2100, endCutoff: 950, attack: .018, sustain: .22, slide: .975 },
      round: { waves: ['sine', 'triangle'], partials: [1, 1], gains: [.72, .3], cutoff: 800, endCutoff: 400, attack: .006, sustain: .5 },
      sub: { waves: ['sine', 'triangle'], partials: [1, 1], gains: [.85, .18], cutoff: 430, endCutoff: 220, attack: .008, sustain: .72, slide: 1.03 },
      electro: { waves: ['sawtooth', 'square'], partials: [1, .5], gains: [.6, .23], cutoff: 1250, endCutoff: 300, attack: .007, sustain: .3 },
      funk: { waves: ['triangle', 'sawtooth'], partials: [1, 2], gains: [.8, .16], cutoff: 1700, endCutoff: 400, attack: .004, sustain: .16 },
      rock: { waves: ['sawtooth', 'triangle'], partials: [1, 1], gains: [.5, .5], cutoff: 1400, endCutoff: 650, attack: .006, sustain: .4 },
    };
    const sound = profiles[voice] || profiles.piano;
    filter.type = sound.formant ? 'bandpass' : 'lowpass'; filter.Q.value = sound.formant ? 2.4 : .65;
    filter.frequency.setValueAtTime(sound.cutoff, start);
    filter.frequency.exponentialRampToValueAtTime(sound.endCutoff, start + duration * .75);
    const attack = Math.min(sound.attack, duration * .15), decayAt = start + Math.min(duration * .45, .09);
    envelope.gain.setValueAtTime(.0001, start);
    envelope.gain.exponentialRampToValueAtTime(Math.max(.0002, volume), start + attack);
    envelope.gain.exponentialRampToValueAtTime(Math.max(.0002, volume * sound.sustain), decayAt);
    envelope.gain.exponentialRampToValueAtTime(.0001, start + duration);
    const sources = [], nodes = [envelope, filter];
    for (let i = 0; i < sound.waves.length; i++) {
      const oscillator = ctx.createOscillator(), gain = ctx.createGain();
      oscillator.type = sound.waves[i]; oscillator.frequency.setValueAtTime(frequency * sound.partials[i] * (sound.slide || 1), start);
      if (sound.slide) oscillator.frequency.exponentialRampToValueAtTime(frequency * sound.partials[i], start + .07);
      oscillator.detune.value = i % 2 ? (sound.detune || 0) : -(sound.detune || 0);
      gain.gain.value = sound.gains[i]; oscillator.connect(gain); gain.connect(filter);
      sources.push(oscillator); nodes.push(oscillator, gain);
    }
    filter.connect(envelope);
    if (sound.distort) {
      const shaper = ctx.createWaveShaper(), curve = new Float32Array(256);
      for (let i = 0; i < curve.length; i++) curve[i] = Math.tanh((i / 127.5 - 1) * sound.distort);
      shaper.curve = curve; shaper.oversample = '2x'; envelope.connect(shaper); shaper.connect(bus); nodes.push(shaper);
    } else envelope.connect(bus);
    this.registerVoice(sources, nodes, envelope, bus, start + duration);
    for (const source of sources) { source.start(start); source.stop(start + duration + .025); }
  }
  effect(kind, other = false, skillId = null) {
    if (!this.enabled || !this.unlocked || !this.context || this.context.state !== 'running') return;
    const t = this.context.currentTime, scale = other ? .7 : 1;
    if (kind === 'shot') {
      this.tone(175, t, .14, .4 * scale, 'triangle', this.effects, 48);
      this.noise(t, .055, .37 * scale, 3500, 'lowpass');
      this.noise(t + .015, .13, .16 * scale, 900, 'bandpass');
      this.tone(820, t, .032, .08 * scale, 'square', this.effects, 160);
    }
    if (kind === 'step') { this.noise(t, .05, .095 * scale, 800); this.tone(95, t, .05, .1 * scale, 'sine', this.effects, 58); }
    if (kind === 'jump') this.tone(180, t, .16, .12 * scale, 'triangle', this.effects, 650);
    if (kind === 'shield') { this.tone(650, t, .22, .13 * scale, 'sine', this.effects, 1100); this.noise(t, .11, .08 * scale, 5200, 'highpass'); }
    if (kind === 'hit') { this.noise(t, .11, .22 * scale, 1100); this.tone(150, t, .13, .18 * scale, 'triangle', this.effects, 45); }
    if (kind === 'pick') [440, 554, 660].forEach((f, i) => this.tone(f, t + i * .06, .16, .13, 'triangle'));
    if (kind === 'victory') [392, 494, 587, 784].forEach((f, i) => this.tone(f, t + i * .1, .3, .12, 'triangle'));
    if (kind === 'skill') {
      if (skillId === 'fart') { this.noise(t, .48, .25 * scale, 240); this.tone(85, t, .4, .2 * scale, 'sawtooth', this.effects, 35); }
      else if (['charm', 'heal', 'vampire', 'bubble'].includes(skillId)) [523, 659, 784].forEach((f, i) => this.tone(f, t + i * .07, .24, .11 * scale, 'sine'));
      else if (skillId === 'tongue') { this.tone(130, t, .25, .2 * scale, 'triangle', this.effects, 800); this.noise(t + .1, .1, .07 * scale, 1900, 'bandpass'); }
      else if (['shotgun', 'rocket', 'turret', 'mine', 'laser'].includes(skillId)) { this.noise(t, .15, .27 * scale, 1800); this.tone(180, t, .2, .25 * scale, 'triangle', this.effects, 45); }
      else { this.tone(320, t, .22, .15 * scale, 'triangle', this.effects, 1100); this.noise(t, .18, .08 * scale, 2900, 'bandpass'); }
    }
    if (kind === 'click') this.tone(580, t, .055, .08, 'sine', this.effects, 760);
  }
  observe(players, self, active) {
    const next = players.map(p => ({ shots: p.shots, footsteps: p.footsteps, jumps: p.jumps, shields: p.shields, releases: p.skillReleases ?? p.casts ?? 0, hp: p.hp }));
    if (active && this.counters) players.forEach((p, i) => {
      for (const [counter, effect] of [['shots', 'shot'], ['footsteps', 'step'], ['jumps', 'jump'], ['shields', 'shield']]) if (next[i][counter] > this.counters[i][counter]) this.effect(effect, i !== self);
      if (next[i].releases > (this.counters[i].releases || 0)) this.effect('skill', i !== self, p.latestRelease?.id || p.latestCast?.id);
      if (p.hp < this.counters[i].hp) this.effect('hit', i !== self);
    });
    // Always update the baseline, including menus and inter-round screens.
    this.counters = next;
  }
  reset(players) { this.counters = null; this.observe(players, 0, false); }
  schedule() {
    if (!this.context) return;
    const ctx = this.context;
    const available = this.enabled && this.unlocked && ctx.state === 'running' && !isHidden() && this.musicVolume > 0;
    if (this.emoteId) { this.recordings.sync(available); return; }
    if (!available || !this.menu) { this.nextNote = ctx.currentTime + .03; return; }
    const beat = 60 / 104 / 2;
    if (this.nextNote < ctx.currentTime) this.nextNote = ctx.currentTime + .02;
    while (this.nextNote < ctx.currentTime + .18) {
      const t = this.nextNote, tick = this.tick % 64, bar = Math.floor(tick / 16), index = tick % 16;
      const roots = [48, 53, 45, 55], root = roots[bar];
      const melody = [12, null, 19, 16, null, 19, 21, null, 16, null, 14, 12, null, 7, 14, null];
      if (melody[index] !== null) { this.instrument(root + melody[index] + 12, t, .23, .15, 'marimba', this.music); this.tone(hz(root + melody[index]), t, .18, .035, 'triangle', this.music); }
      if (index % 4 === 0) this.instrument(root + (index === 8 ? 7 : 0), t, .34, .2, 'round', this.music);
      if (index % 8 === 0) this.tone(130, t, .13, .28, 'sine', this.music, 40);
      if (index % 8 === 4) this.noise(t, .09, .08, 1500, 'bandpass', this.music);
      if (index % 2 === 1) this.noise(t, .035, .018, 6500, 'highpass', this.music);
      this.tick++; this.nextNote += beat;
    }
  }
  async dispose() {
    clearInterval(this.timer);
    this.recordings.stop(); ++this.recordings.epoch;
    this.stopVoices(this.music); this.stopVoices(this.emoteMusic); this.stopVoices(this.effects);
    if (this.context && this.context.state !== 'closed') await this.context.close();
    this.voices.clear(); this.context = null; this.noiseBuffer = null; this.unlocked = false;
  }
}

export { EMOTE_MUSIC_DURATION };
