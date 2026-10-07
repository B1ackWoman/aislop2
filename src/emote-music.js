// Emote songs are recordings supplied by the player/server, never synthesized.
export { EMOTE_IDS } from './emote-catalog.js';
export { EMOTE_DURATION as EMOTE_MUSIC_DURATION } from './emote-catalog.js';
export function recordingSpec(value, base) {
  if (!value || typeof value.src !== 'string' || !value.src.trim()) return null;
  const url = new URL(value.src, base);
  if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password) throw new Error('Нужна ссылка на аудиофайл HTTP/HTTPS.');
  return { src: url.href, name: String(value.title || value.name || url.pathname.split('/').pop()).slice(0, 120), start: Number.isFinite(value.start) ? Math.max(0, value.start) : 0 };
}
