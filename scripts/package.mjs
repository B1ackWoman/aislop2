import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
const root = resolve(import.meta.dirname, '..');
let html = await readFile(resolve(root, 'dist/index.html'), 'utf8');
const scripts = [...html.matchAll(/<script type="module" crossorigin src="([^"]+)"><\/script>/g)];
for (const match of scripts) {
  const code = await readFile(resolve(root, 'dist', match[1].replace(/^\//, '')), 'utf8');
  html = html.replace(match[0], () => '<script type="module">' + code.replace(/<\/script/gi, '<\\/script') + '</script>');
}
const styles = [...html.matchAll(/<link rel="stylesheet" crossorigin href="([^"]+)">/g)];
for (const match of styles) {
  const css = await readFile(resolve(root, 'dist', match[1].replace(/^\//, '')), 'utf8');
  html = html.replace(match[0], () => '<style>' + css + '</style>');
}
if ((html.match(/<script type="module"/g) || []).length !== 1 || (html.match(/<\/script/gi) || []).length !== 1) throw new Error('Invalid standalone script embedding');
// Include real audio recordings so the single HTML also has all victory songs.
const manifest = JSON.parse(await readFile(resolve(root, 'public/emotes/tracks.json'), 'utf8'));
const bank = {};
for (const [id, track] of Object.entries(manifest)) {
  if (!track?.src) continue;
  const audio = await readFile(resolve(root, 'public/emotes', track.src));
  bank[id] = { title: track.title, audio: audio.toString('base64') };
}
const embedded = JSON.stringify(bank).replace(/</g, '\\u003c');
html = html.replace('</head>', () => '<script type="application/json" id="roundish-emote-bundle">' + embedded + '</script></head>');
await writeFile(resolve(root, 'ROUNDISH.html'), html);
console.log('Standalone game: ROUNDISH.html');
