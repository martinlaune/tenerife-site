/* Service worker — stratégie "réseau d'abord" (network-first).
   Quand il y a du réseau, on récupère TOUJOURS la dernière version et on
   rafraîchit le cache. Hors-ligne, on sert la dernière version mise en cache.
   → fini les versions périmées : un simple rechargement suffit.
   Note iOS : ne s'active qu'en HTTPS (ou localhost). En http:// sur le réseau
   local, l'ajout à l'écran d'accueil fonctionne quand même, mais sans cache. */
const CACHE = "tenerife-2026-v3";
const ASSETS = [
  "./", "./index.html", "./styles.css", "./data.js", "./app.js",
  "./manifest.webmanifest",
  "./icons/icon-180.png", "./icons/icon-192.png", "./icons/icon-512.png", "./icons/icon-maskable-512.png"
];
self.addEventListener("install", e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));
});
self.addEventListener("activate", e=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener("fetch", e=>{
  if(e.request.method!=="GET") return;
  // Réseau d'abord : on tente le serveur, on met à jour le cache, et on ne
  // retombe sur le cache que si le réseau est indisponible (hors-ligne).
  e.respondWith(
    fetch(e.request).then(res=>{
      const copy=res.clone();
      caches.open(CACHE).then(c=>c.put(e.request, copy)).catch(()=>{});
      return res;
    }).catch(()=> caches.match(e.request))
  );
});
