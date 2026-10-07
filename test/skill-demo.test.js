import assert from 'node:assert/strict';
import { SKILLS, step } from '../src/game.js';
import { makeSkillDemo, advanceSkillDemo, resetSkillDemo } from '../src/skill-demo.js';

const snapshots = new Map();
for (const skill of SKILLS) {
  const demo = makeSkillDemo(skill.id, { color: '#c8a3ff', hat: 'crown' });
  const replay = structuredClone(demo.state);
  const seen = { phases: new Set(), effects: new Set(), bullets: new Set(), slow: false, pull: false, reflection: false, minEnemyHp: demo.state.players[1].hp, maxCasterHp: demo.state.players[0].hp, maxEnemyMotion: 0, maxCasterMotion: 0 };
  const origins = demo.state.players.map(p => ({ x: p.x, z: p.z }));
  const originalHp = demo.state.players.map(p => p.hp);
  const count = Math.round((demo.duration - .4) * 120);
  for (let n = 0; n < count; n++) {
    advanceSkillDemo(demo, 1 / 120, (s, inputs, dt) => {
      // Replaying only ordinary player inputs must reproduce the preview
      // byte-for-byte, including collision, cooldowns and skill phases.
      step(replay, inputs, dt);
      assert.deepEqual(s, replay, `${skill.id}: demonstration diverged from combat`);
      const [caster, target] = s.players;
      if (caster.cast) seen.phases.add(caster.cast.phase);
      s.effects.forEach(e => seen.effects.add(e.type));
      s.bullets.forEach(b => { seen.bullets.add(b.skill); if (b.owner === 0 && b.skill === undefined) seen.reflection = true; });
      seen.slow ||= target.slow > 0;
      seen.pull ||= target.charm > 0 || !!target.pull;
      seen.minEnemyHp = Math.min(seen.minEnemyHp, target.hp);
      seen.maxCasterHp = Math.max(seen.maxCasterHp, caster.hp);
      seen.maxEnemyMotion = Math.max(seen.maxEnemyMotion, Math.hypot(target.x - origins[1].x, target.z - origins[1].z));
      seen.maxCasterMotion = Math.max(seen.maxCasterMotion, Math.hypot(caster.x - origins[0].x, caster.z - origins[0].z));
    });
  }
  assert.equal(demo.state.players[0].casts, 1, `${skill.id}: exactly one cast per demonstration`);
  assert(seen.phases.has('preparation'), `${skill.id}: preparation is shown`);
  assert(seen.phases.has('active'), `${skill.id}: activation is shown`);
  assert(seen.phases.has('recovery'), `${skill.id}: recovery is shown`);
  assert(demo.releasedAt !== null, `${skill.id}: real release was observed`);
  if (!['blink', 'swap', 'bubble', 'heal'].includes(skill.id)) assert(seen.minEnemyHp < originalHp[1], `${skill.id}: action reaches its target`);
  if (['heal', 'vampire'].includes(skill.id)) assert(seen.maxCasterHp > originalHp[0], `${skill.id}: actual healing shown`);
  if (['charm', 'tongue', 'tornado', 'blackhole'].includes(skill.id)) assert(seen.maxEnemyMotion > 1, `${skill.id}: real attraction is visible`);
  if (['dash', 'blink', 'swap'].includes(skill.id)) assert(seen.maxCasterMotion > 2, `${skill.id}: real relocation shown`);
  if (['frost', 'banana', 'fart'].includes(skill.id)) assert(seen.slow, `${skill.id}: actual slow effect shown`);
  if (skill.id === 'bubble') {
    assert(seen.minEnemyHp < originalHp[1], 'bubble: reflected bullets hit the attacker');
    assert.equal(demo.state.players[0].hp, originalHp[0], 'bubble: every incoming demonstration bullet arrives before shield expiry');
  }
  if (skill.id === 'decoy') { assert(seen.effects.has('decoy'), 'decoy: created'); assert(seen.effects.has('explosion'), 'decoy: destroyed by incoming bullets'); }
  snapshots.set(skill.id, seen);
  resetSkillDemo(demo);
  assert.equal(demo.elapsed, 0);
  assert.equal(demo.state.players[0].casts, 0);
  assert.deepEqual(demo.state.players[0].look, { color: '#c8a3ff', hat: 'crown', face: 'happy' });
}

console.log(`✓ ${snapshots.size} skill cards replay the arena simulation and demonstrate their real result`);
