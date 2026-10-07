import { createSkillDemo, step } from './game.js';
import { cleanLook } from './maps.js';
import { skillById } from './skills.js';

const FIXED_STEP = 1 / 120;
export const DEMO_CAST_AT = .8;
export const DEMO_DURATIONS = Object.freeze({
  fireball: 3.5, frost: 4.6, lightning: 3.5, meteor: 3.8,
  charm: 4, tongue: 4, fart: 5.3, shotgun: 3.5, rocket: 3.6,
  boomerang: 4.8, dash: 3.7, blink: 3.7, heal: 3.8, bubble: 4.4,
  stomp: 4, tornado: 5.3, blackhole: 4.8, mine: 5, turret: 11,
  banana: 5, vampire: 4, swap: 3.7, decoy: 4.5, laser: 3.6
});

/** A training fixture only supplies player inputs. Skills, damage, movement and
 * effect lifetime all run in the same authoritative simulation as the arena. */
export function makeSkillDemo(skillId, rawLook = {}) {
  const skill = skillById(skillId);
  if (!skill) throw new Error(`Unknown demonstration skill: ${skillId}`);
  const look = cleanLook(rawLook);
  const demo = {
    skillId, look, state: createSkillDemo(skillId), elapsed: 0, accumulator: 0,
    duration: DEMO_DURATIONS[skillId], cycle: 0, castAt: DEMO_CAST_AT,
    triggered: false, hit: false, initialHealth: [], releasedAt: null
  };
  configure(demo);
  return demo;
}

function configure(demo) {
  demo.state.players[0].look = { ...demo.look };
  demo.state.players[1].look = cleanLook({ color: demo.look.color === '#ff8875' ? '#79cbff' : '#ff8875', face: 'goofy' }, 1);
  demo.initialHealth = demo.state.players.map(p => p.hp);
}

export function resetSkillDemo(demo) {
  demo.state = createSkillDemo(demo.skillId);
  demo.elapsed = 0; demo.accumulator = 0; demo.triggered = false;
  demo.hit = false; demo.releasedAt = null; demo.cycle++;
  configure(demo);
  return demo;
}

/** This export also lets tests replay the exact demonstration inputs through
 * game.step and verify that the preview has no separate combat implementation. */
export function skillDemoInputs(demo) {
  const { state: s, skillId: id, elapsed } = demo;
  const [caster, target] = s.players;
  const inputs = s.players.map((p, i) => ({
    x: 0, z: 0, angle: i ? -Math.PI / 2 : Math.PI / 2,
    fire: false, jump: false, shield: false, skills: [false, false, false]
  }));
  if (elapsed >= demo.castAt && caster.casts === 0) inputs[0].skills[0] = true;
  const targetInput = inputs[1];
  targetInput.angle = Math.atan2(caster.x - target.x, caster.z - target.z);

  if (id === 'bubble') {
    // Real incoming bullets are reflected by the actual shield collision code.
    const flightTime = Math.hypot(caster.x - target.x, caster.z - target.z) / 18;
    targetInput.fire = caster.shield > flightTime + .1;
  } else if (id === 'decoy') {
    const decoy = s.effects.find(e => e.type === 'decoy' && e.life > 0);
    if (decoy && elapsed > demo.castAt + .65) {
      targetInput.angle = Math.atan2(decoy.x - target.x, decoy.z - target.z);
      targetInput.fire = true;
    }
  } else if (id === 'mine' || id === 'banana') {
    const trap = s.effects.find(e => e.type === id && e.life > 0);
    if (trap && elapsed > demo.castAt + .9 && !demo.triggered) {
      const dx = trap.x - target.x, dz = trap.z - target.z;
      const length = Math.hypot(dx, dz);
      if (length > .15) { targetInput.x = dx / length; targetInput.z = dz / length; }
    }
  } else if (id === 'frost' && target.slow > 0 && elapsed < 4.8) {
    // Walking input makes the real speed reduction visible, without moving
    // either fighter by a preview-only transform.
    targetInput.z = .3;
  }
  return inputs;
}

export function advanceSkillDemo(demo, dt, onStep) {
  demo.accumulator += Math.min(.15, Math.max(0, Number(dt) || 0));
  while (demo.accumulator + 1e-10 >= FIXED_STEP) {
    const inputs = skillDemoInputs(demo);
    step(demo.state, inputs, FIXED_STEP);
    demo.elapsed += FIXED_STEP; demo.accumulator -= FIXED_STEP;
    const caster = demo.state.players[0], target = demo.state.players[1];
    if (demo.releasedAt === null && (caster.cast?.released || caster.cast?.fired)) demo.releasedAt = demo.elapsed;
    demo.hit ||= target.hp < demo.initialHealth[1];
    if (demo.skillId === 'mine' || demo.skillId === 'banana') {
      demo.triggered ||= target.hp < demo.initialHealth[1] || target.stun > 0 || target.slow > 0;
    }
    onStep?.(demo.state, inputs, FIXED_STEP);
    if (demo.elapsed >= demo.duration) { resetSkillDemo(demo); break; }
  }
  return demo;
}

export function skillDemoCaption(demo) {
  const { state: s, skillId: id } = demo;
  const [caster, target] = s.players;
  if (demo.elapsed < demo.castAt) return 'Прицеливание';
  if (caster.cast?.phase === 'preparation') return 'Подготовка';
  if (id === 'boomerang' && s.bullets.some(b => b.skill === 'boomerang')) return 'Бросок и возвращение';
  if (id === 'charm' && target.charm > 0) return 'Сердечко притягивает';
  if (id === 'tongue' && (target.pull || caster.cast?.phase === 'active')) return 'Захват и подтягивание';
  if (id === 'frost' && target.slow > 0) return 'Замедление: попробуй идти';
  if (id === 'bubble' && caster.shield > 0) return 'Щит отражает выстрелы';
  if (id === 'heal' && caster.hp > demo.initialHealth[0]) return `Лечение: +${Math.round(caster.hp - demo.initialHealth[0])} HP`;
  if (id === 'vampire' && caster.hp > demo.initialHealth[0]) return `Вампиризм: +${Math.round(caster.hp - demo.initialHealth[0])} HP`;
  if (id === 'turret' && s.effects.some(e => e.type === 'turret')) return 'Турель стреляет 8 секунд';
  if (id === 'mine' || id === 'banana') {
    if (demo.triggered) return id === 'mine' ? 'Мина сработала' : 'Подскользнулся и замедлился';
    if (s.effects.some(e => e.type === id)) return 'Противник входит в ловушку';
  }
  if (id === 'decoy') {
    if (s.effects.some(e => e.type === id)) return 'Копия принимает выстрелы';
    if (demo.releasedAt !== null) return 'Копия взорвалась';
  }
  if (caster.cast?.phase === 'active') return 'Применение';
  if (s.bullets.length || s.effects.some(e => e.active)) return 'Действие навыка';
  if (demo.hit) return `Попадание: −${Math.round(demo.initialHealth[1] - target.hp)} HP`;
  return demo.elapsed > demo.castAt + 1.5 ? 'Завершение' : 'Применение';
}
