import { test } from 'node:test';
import assert from 'node:assert/strict';
import { state, step, SKILLS, setLoadout, finishLoadout, chooseRoundSkill, selectEmote, EMOTE_DURATION, dealSkillOffers } from '../src/game.js';

function match() {
  const s = state();
  for (let i=0;i<2;i++) {assert(setLoadout(s,i,[s.players[i].offers[0]]));assert(finishLoadout(s,i));}
  return s;
}
function lose(s, loser) {
  s.players[loser].hp=0;step(s,[{},{}],1/60);assert.equal(s.phase,'celebration');
  assert(selectEmote(s,1-loser,'shuba'));step(s,[{},{}],EMOTE_DURATION);assert.equal(s.phase,'pick');
}
test('five unique options are serialized, exclude equipped skills and stay fixed until a new defeat',()=>{
  const s=match();lose(s,1);const p=s.players[1],offers=[...p.offers];
  assert.equal(offers.length,5);assert.equal(new Set(offers).size,5);assert(offers.every(id=>!p.skills.includes(id)));
  const clone=JSON.parse(JSON.stringify(s));assert.deepEqual(clone.players[1].offers,offers);
  for(let i=0;i<30;i++)step(s,[{},{}],1/60);assert.deepEqual(p.offers,offers);
  assert.equal(dealSkillOffers(p,()=>.5).length,5);
});
test('each defeat adds exactly one skill, then replaces one after all three slots are full',()=>{
  const s=match(),winner=[...s.players[0].skills];
  for(const expected of [2,3]) {lose(s,1);const prior=[...s.players[1].skills],id=s.players[1].offers[0];assert.equal(chooseRoundSkill(s,1,id,0),false);assert(chooseRoundSkill(s,1,id));assert.deepEqual(s.players[1].skills,[...prior,id]);assert.equal(s.players[1].skills.length,expected);assert.equal(chooseRoundSkill(s,1,id),false);assert.deepEqual(s.players[0].skills,winner);}
  lose(s,1);const prior=[...s.players[1].skills],id=s.players[1].offers[0];assert.equal(chooseRoundSkill(s,1,id),false);assert.equal(chooseRoundSkill(s,1,id,3),false);assert(chooseRoundSkill(s,1,id,1));assert.deepEqual(s.players[1].skills,[prior[0],id,prior[2]]);assert.deepEqual(s.players[1].skillCooldowns,[0,0,0]);
});
test('winner, outside offers, duplicates and replayed choices cannot grant extra skills',()=>{
  const s=match();lose(s,1);const prior=[...s.players[1].skills],id=s.players[1].offers[0],outside=SKILLS.find(skill=>!s.players[1].offers.includes(skill.id)&&!prior.includes(skill.id)).id;
  assert.equal(chooseRoundSkill(s,0,id),false);assert.equal(chooseRoundSkill(s,1,outside),false);assert.equal(chooseRoundSkill(s,1,prior[0]),false);assert.deepEqual(s.players[1].skills,prior);
  assert(chooseRoundSkill(s,1,id));const chosen=[...s.players[1].skills];assert.equal(chooseRoundSkill(s,1,id),false);assert.deepEqual(s.players[1].skills,chosen);
});
