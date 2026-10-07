// Seconds shared by the simulation, character rig and real combat previews.
const TIMINGS = {
  fireball: [.26, .15, .24], frost: [.25, .15, .22], lightning: [.32, .18, .25],
  meteor: [.55, .22, .35], charm: [.42, .2, .32], tongue: [.28, .65, .25],
  fart: [.28, .35, .3], shotgun: [.18, .1, .34], rocket: [.38, .12, .36],
  boomerang: [.24, .18, .28], dash: [.15, .36, .22], blink: [.25, .1, .2],
  heal: [.5, .5, .25], bubble: [.2, .22, .18], stomp: [.36, .28, .34],
  tornado: [.4, .2, .3], blackhole: [.48, .2, .35], mine: [.3, .25, .22],
  turret: [.4, .35, .28], banana: [.25, .18, .2], vampire: [.38, .35, .3],
  swap: [.38, .18, .3], decoy: [.38, .35, .28], laser: [.42, .3, .32],
};
// Shared, serializable skill metadata for the battle, loadout UI and previews.
export const SKILLS = [
  { id: 'fireball', name: 'Огненный шар', symbol: '🔥', desc: 'Взрывной шар: 30 урона в радиусе 2 м.', color: '#ff7849', category: 'Магия', cooldown: 5, range: 16 },
  { id: 'frost', name: 'Ледяная плюшка', symbol: '❄', desc: '20 урона и замедление врага на 2,5 с.', color: '#86e7ff', category: 'Магия', cooldown: 6, range: 16 },
  { id: 'lightning', name: 'Разряд', symbol: 'ϟ', desc: 'Мгновенная молния: 24 урона и короткое оглушение.', color: '#ffe773', category: 'Магия', cooldown: 7, range: 11 },
  { id: 'meteor', name: 'Метеор-пончик', symbol: '☄', desc: 'Через 0,7 с падает метеор: 40 урона в области.', color: '#ffad68', category: 'Магия', cooldown: 10, range: 7 },
  { id: 'charm', name: 'Сила обаяния', symbol: '♥', desc: 'Сердечко мягко притягивает врага 1,2 с. Можно сопротивляться!', color: '#ff82c2', category: 'Приколы', cooldown: 8, range: 14 },
  { id: 'tongue', name: 'Язык-хватайка', symbol: '👅', desc: 'Длинный язык подтягивает врага и наносит 12 урона.', color: '#ff779e', category: 'Приколы', cooldown: 7, range: 9 },
  { id: 'fart', name: 'Газовая атака', symbol: '💨', desc: 'Облако на 3 с: 12 урона/с и медленные ножки.', color: '#b8e56e', category: 'Приколы', cooldown: 9, range: 3 },
  { id: 'shotgun', name: 'Конфетный дробовик', symbol: '⋔', desc: 'Шесть конфет веером, по 9 урона каждая.', color: '#ffcb8b', category: 'Оружие', cooldown: 5, range: 10 },
  { id: 'rocket', name: 'Ракета-хлопушка', symbol: '🚀', desc: 'Медленная ракета: 38 урона и мощный толчок.', color: '#ff8e6f', category: 'Оружие', cooldown: 8, range: 18 },
  { id: 'boomerang', name: 'Бумеранг-пицца', symbol: '↝', desc: 'Летит, отскакивает от стен и возвращается: 20 урона.', color: '#ffcf67', category: 'Оружие', cooldown: 6, range: 10 },
  { id: 'dash', name: 'Таран пузиком', symbol: '➜', desc: 'Рывок на 5 м: 20 урона при столкновении.', color: '#c8a3ff', category: 'Движение', cooldown: 5, range: 5 },
  { id: 'blink', name: 'Пшик-телепорт', symbol: '✧', desc: 'Мгновенно перемещает на 7 м до ближайшего укрытия.', color: '#b6abff', category: 'Движение', cooldown: 8, range: 7 },
  { id: 'heal', name: 'Вкусная аптечка', symbol: '✚', desc: 'Восстанавливает 35 здоровья. Обнимашки себе!', color: '#83edbd', category: 'Защита', cooldown: 12, range: 0 },
  { id: 'bubble', name: 'Мыльный щит', symbol: '◉', desc: 'Пузырь отражает снаряды и блокирует магию 2 с.', color: '#a9edff', category: 'Защита', cooldown: 10, range: 0 },
  { id: 'stomp', name: 'Топот великана', symbol: '◎', desc: 'Удар по земле: 24 урона и толчок в радиусе 4 м.', color: '#ffd09a', category: 'Магия', cooldown: 8, range: 4 },
  { id: 'tornado', name: 'Вихрь носков', symbol: '🌀', desc: 'Вихрь на 3 с притягивает и наносит 9 урона/с.', color: '#b7dbff', category: 'Магия', cooldown: 10, range: 5 },
  { id: 'blackhole', name: 'Карманная дыра', symbol: '●', desc: '2,5 с притяжения, затем взрыв на 28 урона.', color: '#a18bff', category: 'Магия', cooldown: 12, range: 6 },
  { id: 'mine', name: 'Мина-подарок', symbol: '🎁', desc: 'Подарок ждёт 12 с. Враг рядом — взрыв на 38 урона.', color: '#ff94b5', category: 'Оружие', cooldown: 8, range: 1.5 },
  { id: 'turret', name: 'Пушка-утёнок', symbol: '🦆', desc: 'Утёнок 8 с стреляет по видимому врагу: 12 урона.', color: '#ffe17a', category: 'Оружие', cooldown: 14, range: 1.5 },
  { id: 'banana', name: 'Банановая ловушка', symbol: '🍌', desc: 'Кожура на 9 с: враг скользит, теряет 8 HP и замедляется.', color: '#fff07d', category: 'Приколы', cooldown: 7, range: 2 },
  { id: 'vampire', name: 'Вампирский поцелуй', symbol: '🦇', desc: 'Забирает у видимого врага до 28 HP и лечит тебя.', color: '#e09aff', category: 'Магия', cooldown: 10, range: 9 },
  { id: 'swap', name: 'Поменялись!', symbol: '⇄', desc: 'Меняет тебя и видимого врага местами до 10 м.', color: '#9cebe4', category: 'Движение', cooldown: 12, range: 10 },
  { id: 'decoy', name: 'Надувной двойник', symbol: '♟', desc: 'Двойник на 6 с перехватывает пули; лопается с уроном 18.', color: '#f3ace9', category: 'Приколы', cooldown: 10, range: 2 },
  { id: 'laser', name: 'Диско-лазер', symbol: '━', desc: 'Луч до 19 м: 36 урона. Укрытия останавливают луч.', color: '#ff7ed4', category: 'Оружие', cooldown: 9, range: 19 },
].map(skill => {
  const [preparation, active, recovery] = TIMINGS[skill.id];
  return Object.freeze({ ...skill, preview: skill.id, timing: Object.freeze({ preparation, active, recovery }), duration: preparation + active + recovery });
});

export function skillById(id) { return SKILLS.find(skill => skill.id === id); }
export { EMOTE_IDS, EMOTE_DURATION } from './emote-catalog.js';
