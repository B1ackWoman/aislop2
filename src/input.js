const MOVEMENT = new Set(['KeyW', 'KeyA', 'KeyS', 'KeyD', 'Space', 'KeyE']);

// Physical input is separate from forces applied by skills in the simulation.
export class GameControls {
  constructor() { this.keys = new Set(); this.fire = false; this.casts = [false, false, false]; }
  down(code, repeat = false) {
    if (/^Digit[123]$/.test(code)) { if (!repeat) this.cast(Number(code.slice(-1)) - 1); return true; }
    if (!MOVEMENT.has(code)) return false;
    this.keys.add(code); return true;
  }
  up(code) { this.keys.delete(code); }
  cast(slot) { if (Number.isInteger(slot) && slot >= 0 && slot < 3) this.casts[slot] = true; }
  read(active = true) {
    return {
      x: active ? Number(this.keys.has('KeyD')) - Number(this.keys.has('KeyA')) : 0,
      z: active ? Number(this.keys.has('KeyS')) - Number(this.keys.has('KeyW')) : 0,
      fire: active && this.fire,
      jump: active && this.keys.has('Space'),
      shield: active && this.keys.has('KeyE'),
      skills: this.casts.map(pressed => active && pressed),
    };
  }
  consumeCasts() { this.casts.fill(false); }
  clear() { this.keys.clear(); this.fire = false; this.consumeCasts(); }
}

// Network movement uses the latest packet; ability taps remain latched until
// the authoritative host has actually stepped its simulation.
export class RemoteControls {
  constructor() { this.clear(); }
  receive(input, now, reset = false) {
    this.latest = input && typeof input === 'object' ? input : {};
    this.receivedAt = now;
    if (reset) this.consumeCasts();
    else for (let i = 0; i < 3; i++) this.casts[i] ||= !!this.latest.skills?.[i];
  }
  read(now) {
    if (now - this.receivedAt > 600) { this.consumeCasts(); return {}; }
    return {...this.latest, skills: [...this.casts]};
  }
  consumeCasts() { this.casts.fill(false); }
  clear() { this.latest = {}; this.receivedAt = -Infinity; this.casts = [false, false, false]; }
}
