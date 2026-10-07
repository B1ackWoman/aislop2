import { SKILLS } from './skills.js';
import { makeSkillPreviewController } from './skill-preview.js';

function offeredSkills(offers) { return [...new Set(offers)].map(id => SKILLS.find(skill => skill.id === id)).filter(Boolean).slice(0, 5); }
export function skillPickerMarkup(kind, equipped = [], offers = []) {
  const roundPick = kind === 'replace', full = roundPick && equipped.length === 3;
  return `<div class="draft-screen">
    <div class="draft-titlebar"><span>✦ PICK_ONE.EXE</span><span>ROUNDISH / SKILL SELECT</span><span aria-hidden="true">_ □</span></div>
    <div class="draft-heading"><div><div class="eyebrow">${roundPick ? 'ПОРАЖЕНИЕ — ЭТО АПГРЕЙД' : 'ТВОЙ ПЕРВЫЙ ХОД'}</div>
    <h2>${full ? 'СМЕНИ ТАКТИКУ.' : roundPick ? 'СТАНЬ СИЛЬНЕЕ.' : 'ВЫБЕРИ УМЕНИЕ.'}</h2>
    <p class="picker-intro">${full ? 'Одно новое умение. Один слот на замену.' : roundPick ? 'Возьми одно умение после поражения. Следующий раунд будет твоим.' : 'Пять карточек. Один выбор. Каким будет твой первый ход?'}</p></div><div class="draft-pick-stamp"><b id="draft-count">0<span>/1</span></b><small>ВЫБОР ЗА ТОБОЙ</small></div></div>
    <div class="draft-scroll-hint">ЛИСТАЙ КАРТОЧКИ →</div>
    <div class="skill-catalog skill-offers" aria-label="Пять умений на выбор">${offeredSkills(offers).map((skill,i) => `<article class="skill-card" data-skill-card="${skill.id}" tabindex="0" aria-label="${skill.name}: ${skill.desc}" style="--skill-color:${skill.color};--card-angle:${(i-2)*1.4}deg;--card-index:${i}"><div class="draft-card-top"><span class="draft-card-number">${String(i+1).padStart(2,'0')}</span><span>${skill.category}</span><i aria-hidden="true">✦</i></div><div class="draft-card-art"><canvas data-skill-preview="${skill.id}" width="320" height="180" aria-label="Анимация умения ${skill.name}"></canvas><span class="draft-card-symbol" aria-hidden="true">${skill.symbol}</span></div><div class="skill-preview-actions"><span>ПРИМЕР В БОЮ</span><button data-replay-skill="${skill.id}" aria-label="Повторить применение: ${skill.name}">↻</button></div><div class="skill-card-copy"><h3>${skill.name}</h3><p>${skill.desc}</p><div class="skill-card-meta"><small>↻ ${skill.cooldown} СЕК.</small><span>${skill.range ? 'ДО '+skill.range+' М' : 'НА СЕБЯ'}</span></div><button class="skill-select" data-select-skill="${skill.id}" aria-pressed="false">ВЫБРАТЬ <span aria-hidden="true">→</span></button></div><span class="draft-selected-badge" aria-hidden="true">✓ ТВОЙ ВЫБОР</span></article>`).join('')}</div>
    <div id="replacement-hint" class="replacement-hint" role="status">${full ? 'Выбери карточку, затем слот для замены.' : 'Нажми на карточку. Подтверди, когда будешь готов.'}</div>
    <div class="draft-bar"><div id="draft-slots" aria-label="Три слота умений">${[0, 1, 2].map(i => `<button class="draft-slot" data-draft-slot="${i}" disabled><kbd>${i + 1}</kbd><span>${SKILLS.find(skill => skill.id === equipped[i])?.name || 'Пустой слот'}</span><small>${full ? 'Заменить' : i === equipped.length ? 'Новое умение' : equipped[i] ? 'В наборе' : 'После поражения'}</small></button>`).join('')}</div><div class="draft-actions">${roundPick ? '<button id="skip-skill" class="secondary">Оставить набор</button>' : ''}<button id="confirm-loadout" class="primary" disabled>${full ? 'Выбери слот ↓' : 'ПОГНАЛИ →'}</button></div></div>
    <div class="draft-statusbar"><span>✿ ТРИ СЛОТА. МНОГО ПРИКОЛОВ.</span><span>НАВЕДИ / ВЫБЕРИ / ПОБЕЖДАЙ</span></div></div>`;
}
export function bindSkillPicker(container, { kind, equipped = [], offers = [], look, onConfirm, onReplace, onSkip }) {
  let candidate = null;
  const skills = offeredSkills(offers), preview = makeSkillPreviewController(container, skills, look);
  const roundPick = kind === 'replace', full = roundPick && equipped.length === 3;
  function refresh() {
    container.querySelectorAll('[data-select-skill]').forEach(button => {
      const selected = button.dataset.selectSkill === candidate;
      button.setAttribute('aria-pressed', String(selected)); button.innerHTML = selected ? 'ВЫБРАНО <span aria-hidden="true">✓</span>' : 'ВЫБРАТЬ <span aria-hidden="true">→</span>';
      button.closest('.skill-card').classList.toggle('selected', selected);
    });
    container.querySelectorAll('[data-draft-slot]').forEach(button => {
      const index = Number(button.dataset.draftSlot), id = equipped[index] || (!full && index === equipped.length ? candidate : null);
      button.querySelector('span').textContent = SKILLS.find(skill => skill.id === id)?.name || 'Пустой слот';
      button.disabled = !full || !candidate; button.classList.toggle('replace-ready', full && !!candidate);
    });
    const confirm = container.querySelector('#confirm-loadout'); confirm.hidden = full;
    confirm.disabled = !candidate; confirm.textContent = roundPick ? 'ВЗЯТЬ УМЕНИЕ →' : 'ПОГНАЛИ →';
    container.querySelector('#draft-count').innerHTML = `${candidate ? 1 : 0}<span>/1</span>`;
    container.querySelector('#replacement-hint').textContent = full ? candidate ? 'Нажми на один из трёх слотов внизу, чтобы заменить его.' : 'Сначала выбери карточку, затем нажми на заменяемый слот.' : candidate ? `«${SKILLS.find(skill => skill.id === candidate).name}» займёт слот ${equipped.length + 1}.` : 'Выбери одну карточку. Можно изменить выбор до подтверждения.';
  }
  container.querySelectorAll('[data-select-skill]').forEach(button => button.onclick = () => { candidate = button.dataset.selectSkill; refresh(); });
  container.querySelectorAll('[data-skill-card]').forEach(card=>{
    const select=()=>card.querySelector('[data-select-skill]').click();
    card.onclick=event=>{if(!event.target.closest('button'))select();};
    card.onkeydown=event=>{if(event.target===card&&(event.key==='Enter'||event.key===' ')){event.preventDefault();select();}};
  });
  container.querySelectorAll('[data-draft-slot]').forEach(button => button.onclick = () => { if (full && candidate) onReplace(candidate, Number(button.dataset.draftSlot)); });
  container.querySelector('#confirm-loadout').onclick = () => { if (!candidate || full) return; if (roundPick) onReplace(candidate); else onConfirm([candidate]); };
  if (roundPick) container.querySelector('#skip-skill').onclick = onSkip;
  container.querySelectorAll('[data-replay-skill]').forEach(button => button.onclick = () => preview.reset(button.dataset.replaySkill));
  refresh();
  return { inspect: id => preview.inspect(id), render: now => preview.render(now), dispose: () => preview.dispose() };
}
