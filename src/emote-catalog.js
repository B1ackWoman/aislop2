// Shared by the simulation, previews and audio; old emotes are intentionally absent.
export const EMOTE_DURATION = 8;
export const emoteFrameTime = time => Math.max(0,Math.min(EMOTE_DURATION,Number.isFinite(time)?time:0));
export const EMOTES = Object.freeze([
  Object.freeze({"id": "pbj", "name": "ПБЖ", "icon": "🥪", "bpm": 120}),
  Object.freeze({"id": "tenna", "name": "Тенна", "icon": "🎩", "bpm": 120}),
  Object.freeze({"id": "die", "name": "Умереть", "icon": "💀", "bpm": 110}),
  Object.freeze({"id": "paranoid", "name": "Параноид", "icon": "🌀", "bpm": 128}),
  Object.freeze({"id": "sickriff", "name": "Сикрифф", "icon": "🎸", "bpm": 132}),
  Object.freeze({"id": "teto", "name": "Тето", "icon": "🎶", "bpm": 130}),
  Object.freeze({"id": "boom", "name": "БУМ!", "icon": "💥", "bpm": 120}),
  Object.freeze({"id": "qualified", "name": "Квалифицированный", "icon": "✨", "bpm": 112}),
  Object.freeze({"id": "griddy", "name": "Гриди", "icon": "👟", "bpm": 140}),
  Object.freeze({"id": "metroswing", "name": "Метрошвинги", "icon": "🚇", "bpm": 120}),
  Object.freeze({"id": "talking", "name": "Говорили о", "icon": "🎤", "bpm": 110}),
  Object.freeze({"id": "kazotsky", "name": "Казотский", "icon": "🪗", "bpm": 130}),
  Object.freeze({"id": "down", "name": "ОНО СХОДИТ ВНИЗ", "icon": "⬇", "bpm": 128}),
  Object.freeze({"id": "shuba", "name": "Шуба", "icon": "🦆", "bpm": 120}),
  Object.freeze({"id": "friends", "name": "С друзьями", "icon": "🤝", "bpm": 120}),
  Object.freeze({"id": "aura", "name": "Аура", "icon": "🌟", "bpm": 110}),
  Object.freeze({"id": "jackpot", "name": "Джекпот", "icon": "🎰", "bpm": 135}),
]);
export const EMOTE_IDS = Object.freeze(EMOTES.map(emote => emote.id));
export const emoteById = id => EMOTES.find(emote => emote.id === id);
