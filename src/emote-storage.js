// Local files stay on this device. Multiplayer recordings live on the server.
function database() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('roundish-emote-files', 1);
    request.onupgradeneeded = () => request.result.createObjectStore('tracks', { keyPath: 'id' });
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}
export async function storedEmotes() {
  const db = await database();
  try { return await new Promise((resolve, reject) => { const req = db.transaction('tracks').objectStore('tracks').getAll(); req.onsuccess = () => resolve(req.result); req.onerror = () => reject(req.error); }); }
  finally { db.close(); }
}
export async function storeEmote(id, file, start) {
  const db = await database();
  try { await new Promise((resolve, reject) => { const tx = db.transaction('tracks', 'readwrite'); tx.objectStore('tracks').put({id, file, start}); tx.oncomplete = resolve; tx.onerror = () => reject(tx.error); tx.onabort = () => reject(tx.error); }); }
  finally { db.close(); }
}
export async function deleteEmote(id) {
  const db = await database();
  try { await new Promise((resolve, reject) => { const tx = db.transaction('tracks', 'readwrite'); tx.objectStore('tracks').delete(id); tx.oncomplete = resolve; tx.onerror = () => reject(tx.error); }); }
  finally { db.close(); }
}
