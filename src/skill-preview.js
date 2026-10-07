import * as THREE from 'three';
import { cleanLook } from './maps.js';
import { makeArena, makeCharacter } from './visuals.js';
import { makeCombatVisuals, syncBattleCharacters } from './combat-visuals.js';
import { makeSkillDemo, advanceSkillDemo, resetSkillDemo, skillDemoCaption } from './skill-demo.js';

const FRAME_INTERVAL = 50;
const intersect = (a, b) => a.bottom > b.top && a.top < b.bottom && a.right > b.left && a.left < b.right;

function framing(state, aspect) {
  // Frame the actual combatants and currently visible action. Projectiles that
  // miss expand the shot while they travel, then the camera returns to the
  // fighters; short skills no longer spend their whole loop in a wide shot.
  let minX = Infinity, maxX = -Infinity, minZ = Infinity, maxZ = -Infinity;
  const add = (x, z, radius = .8) => {
    minX = Math.min(minX, x - radius); maxX = Math.max(maxX, x + radius);
    minZ = Math.min(minZ, z - radius); maxZ = Math.max(maxZ, z + radius);
  };
  state.players.forEach(p => add(p.x, p.z));
  state.bullets.forEach(b => add(b.x, b.z, .35));
  for (const e of state.effects) {
    if (['meteor', 'fart', 'tornado', 'blackhole', 'stomp', 'explosion'].includes(e.type)) add(e.x, e.z, Math.min(4, e.radius || 1));
    else add(e.x, e.z, .8);
    if (['tongue', 'laser', 'lightning', 'vampire', 'blink', 'swap'].includes(e.type) && Number.isFinite(e.targetX)) add(e.targetX, e.targetZ, .6);
  }
  const centerX = (minX + maxX) / 2, centerZ = (minZ + maxZ) / 2;
  const horizontal = Math.max(3.5, (maxX - minX) * .6, ((maxZ - minZ) * .28 + 1.25) * aspect);
  return { centerX, centerZ, horizontal };
}

function makeScene(skillId, look) {
  const demo = makeSkillDemo(skillId, look);
  const scene = new THREE.Scene(); scene.background = new THREE.Color('#ded3ee');
  scene.add(new THREE.HemisphereLight('#e6f1ff', '#657088', 2.1));
  const key = new THREE.DirectionalLight('#fff3d7', 3.2); key.position.set(-5, 9, 6); scene.add(key);
  const arena = makeArena(scene);
  arena.show({ ...demo.state.arena, floor: '#b4cab4', tile: '#c8dbc0', trim: '#9c88b0', box: '#f2d5ac', accent: '#bda4dc' });
  const fighters = demo.state.players.map(p => makeCharacter(scene, p.look));
  const combat = makeCombatVisuals(scene, fighters);
  const camera = new THREE.OrthographicCamera(-3.5, 3.5, 2, -2, .1, 80);
  const view = framing(demo.state, 16 / 9);
  camera.position.set(view.centerX, 6.5, view.centerZ + 10); camera.lookAt(view.centerX, .65, view.centerZ);
  return { demo, scene, camera, arena, fighters, combat, view, lastNow: null, cycle: 0 };
}

function drawOverlay(ctx, width, height, entry, color) {
  const [caster, target] = entry.demo.state.players;
  const inset = 9, barWidth = Math.min(78, (width - 50) / 2);
  ctx.save(); ctx.textBaseline = 'top'; ctx.font = '700 9px system-ui, sans-serif';
  for (const [p, x, label, tint] of [[caster, inset, 'ВЫ', '#9bdfc6'], [target, width - inset - barWidth, 'МАНЕКЕН', '#ffb7a9']]) {
    ctx.fillStyle = '#fffbeeeb'; ctx.fillRect(x - 3, 5, barWidth + 6, 26);
    ctx.fillStyle = '#514563'; ctx.fillText(label, x, 7);
    ctx.textAlign = 'right'; ctx.fillText(`${Math.max(0, Math.ceil(p.hp))}`, x + barWidth, 7); ctx.textAlign = 'left';
    ctx.fillStyle = '#293449'; ctx.fillRect(x, 21, barWidth, 4);
    ctx.fillStyle = tint; ctx.fillRect(x, 21, barWidth * Math.max(0, Math.min(1, p.hp / p.max)), 4);
  }
  ctx.fillStyle = '#ece1f5f2'; ctx.fillRect(0, height - 23, width, 23);
  ctx.font = '600 9px system-ui, sans-serif'; ctx.fillStyle = '#514563'; ctx.textAlign = 'center';
  ctx.fillText(skillDemoCaption(entry.demo), width / 2, height - 18, width - 16);
  ctx.fillStyle = '#53617c'; ctx.fillRect(0, height - 2, width, 2);
  ctx.fillStyle = color || '#d5ef68'; ctx.fillRect(0, height - 2, width * entry.demo.elapsed / entry.demo.duration, 2);
  ctx.restore();
}

/** One WebGL context renders all visible cards. Each card displays a snapshot
 * of a real combat state using the arena's own rig, poses, bullets and VFX. */
export function makeSkillPreviewController(container, skills, initialLook = {}) {
  let look = cleanLook(initialLook), disposed = false, lastFrame = -Infinity;
  const catalog = new Map(skills.map(skill => [skill.id, skill]));
  const entries = new Map(), contexts = new WeakMap();
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'low-power' });
  renderer.setPixelRatio(1); renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.08;

  return {
    setLook(raw) {
      look = cleanLook(raw);
      for (const entry of entries.values()) { entry.demo.look = { ...look }; entry.demo.state.players[0].look = { ...look }; }
    },
    reset(id) {
      const entry = entries.get(id);
      if (!entry || disposed) return;
      resetSkillDemo(entry.demo); entry.combat.clear(); entry.lastNow = null; lastFrame = -Infinity;
    },
    inspect(id) {
      const entry = entries.get(id);
      return entry ? { elapsed: entry.demo.elapsed, duration: entry.demo.duration, cycle: entry.demo.cycle, state: structuredClone(entry.demo.state) } : null;
    },
    render(now) {
      const time = Number(now) || 0;
      if (disposed || !container?.isConnected || time - lastFrame < FRAME_INTERVAL) return;
      lastFrame = time;
      const catalogBounds = container.querySelector('.skill-catalog')?.getBoundingClientRect() || container.getBoundingClientRect();
      const viewport = { top: 0, left: 0, bottom: globalThis.innerHeight || 10000, right: globalThis.innerWidth || 10000 };
      const clip = { top: Math.max(viewport.top, catalogBounds.top), left: Math.max(viewport.left, catalogBounds.left), bottom: Math.min(viewport.bottom, catalogBounds.bottom), right: Math.min(viewport.right, catalogBounds.right) };
      const visible = new Set();
      for (const canvas of container.querySelectorAll('canvas[data-skill-preview]')) {
        const id = canvas.dataset.skillPreview, skill = catalog.get(id);
        if (!skill || canvas.closest('[data-skill-card]')?.hidden || !intersect(canvas.getBoundingClientRect(), clip)) continue;
        visible.add(id);
        let ctx = contexts.get(canvas);
        if (!ctx) { ctx = canvas.getContext('2d', { alpha: false }); if (!ctx) continue; contexts.set(canvas, ctx); }
        let entry = entries.get(id);
        if (!entry) { entry = makeScene(id, look); entries.set(id, entry); }
        const dt = entry.lastNow === null ? 0 : Math.min(.1, Math.max(0, (time - entry.lastNow) / 1000));
        entry.lastNow = time;
        advanceSkillDemo(entry.demo, dt);
        if (entry.cycle !== entry.demo.cycle) { entry.cycle = entry.demo.cycle; entry.combat.clear(); entry.view = framing(entry.demo.state, 16 / 9); }
        syncBattleCharacters(entry.fighters, entry.demo.state, dt);
        entry.combat.update(entry.demo.state, dt);
        const cssWidth = Math.max(160, canvas.clientWidth || 240), cssHeight = Math.max(84, canvas.clientHeight || 125);
        const ratio = Math.min(globalThis.devicePixelRatio || 1, 1.5);
        const width = Math.round(cssWidth * ratio), height = Math.round(cssHeight * ratio);
        if (canvas.width !== width || canvas.height !== height) { canvas.width = width; canvas.height = height; }
        renderer.setSize(width, height, false);
        const nextView = framing(entry.demo.state, width / height), follow = dt > 0 ? 1 - Math.exp(-dt * 8) : 1;
        entry.view.centerX += (nextView.centerX - entry.view.centerX) * follow;
        entry.view.centerZ += (nextView.centerZ - entry.view.centerZ) * follow;
        // Expand immediately so a projectile or burst is fully in frame.
        const requiredWidth = nextView.horizontal + Math.abs(nextView.centerX - entry.view.centerX) + Math.abs(nextView.centerZ - entry.view.centerZ) * .28 * width / height;
        entry.view.horizontal = requiredWidth > entry.view.horizontal ? requiredWidth : entry.view.horizontal + (requiredWidth - entry.view.horizontal) * follow;
        const horizontal = entry.view.horizontal, vertical = horizontal * height / width;
        entry.camera.position.set(entry.view.centerX, 6.5, entry.view.centerZ + 10);
        entry.camera.lookAt(entry.view.centerX, .65, entry.view.centerZ);
        entry.camera.left = -horizontal; entry.camera.right = horizontal; entry.camera.top = vertical; entry.camera.bottom = -vertical; entry.camera.updateProjectionMatrix();
        renderer.render(entry.scene, entry.camera);
        ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.drawImage(renderer.domElement, 0, 0, width, height);
        ctx.setTransform(ratio, 0, 0, ratio, 0, 0); drawOverlay(ctx, cssWidth, cssHeight, entry, skill.color);
        canvas.dataset.previewPhase = entry.demo.state.players[0].cast?.phase || (entry.demo.elapsed < entry.demo.castAt ? 'ready' : 'result');
        canvas.dataset.previewCycle = String(entry.demo.cycle);
      }
      // Paused cards resume from their current action instead of skipping it
      // when the player scrolls back to inspect a skill.
      for (const [id, entry] of entries) if (!visible.has(id)) entry.lastNow = null;
    },
    dispose() {
      if (disposed) return; disposed = true;
      for (const entry of entries.values()) {
        entry.combat.dispose(); entry.fighters.forEach(f => f.dispose()); entry.arena.dispose(); entry.scene.clear();
      }
      entries.clear(); renderer.dispose(); renderer.forceContextLoss();
    }
  };
}
