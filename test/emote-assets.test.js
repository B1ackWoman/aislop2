import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { EMOTE_IDS, recordingSpec } from '../src/emote-music.js';

const directory = new URL('../public/emotes/', import.meta.url);
const manifest = JSON.parse(await readFile(new URL('tracks.json', directory), 'utf8'));
assert.deepEqual(Object.keys(manifest).sort(), [...EMOTE_IDS].sort(), 'all seventeen new animations need default recordings');
const hashes = new Set();
for (const id of EMOTE_IDS) {
  const spec = manifest[id];
  assert.equal(spec.src, id+'.mp3');
  assert.equal(spec.duration, 8); assert.equal(spec.start, 0);
  assert.match(spec.title, /Roblox/); assert.match(spec.source, /^MedalTVRoblox\d+\.mp4$/); assert.equal(spec.sourceAudioStream,2);
  const bytes = await readFile(new URL(spec.src, directory));
  assert(bytes.byteLength > 100000 && bytes.byteLength < 150000, id+' must contain its eight-second recording');
  const hash = createHash('sha256').update(bytes).digest('hex'); assert.equal(hash, spec.sha256); assert(!hashes.has(hash), 'do not reuse one recording for different dances'); hashes.add(hash);
  assert(recordingSpec(spec, 'https://game.example/emotes/tracks.json'));
}
console.log('All seventeen unique video MP3 recordings, source credits, file sizes and checksums passed');
