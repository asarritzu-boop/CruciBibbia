const CACHE_NAME = 'cruci-bibbia-v1';
const ASSETS = [
  './',
  './index.html',
  './icona-192.png',
  './icona-512.png',
  './manifest.json'
];

// Installazione del Service Worker e salvataggio dei file in cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(ASSETS);
      })
  );
});

// Attivazione e pulizia delle vecchie cache
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME)
            .map((key) => caches.delete(key))
      );
    })
  );
});

// Gestione delle richieste: prova la cache, altrimenti vai in rete
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
