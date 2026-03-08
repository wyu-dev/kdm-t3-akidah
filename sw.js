// ============================================================
// KAFA Digital — Service Worker v2
// Path relatif — sesuai untuk Workers & Pages
// ============================================================

const CACHE_NAME = 'kafa-digital-v2';
const BASE = self.location.pathname.replace('/sw.js', '');

const FAIL_CACHE = [
  BASE + '/index.html',
  BASE + '/kafa-digital-full.html',
  BASE + '/akidah-tahun3_1-data.js',
  BASE + '/manifest.json',
  BASE + '/pwa-icons/icon-192.png',
  BASE + '/pwa-icons/icon-512.png',
];

// ── INSTALL ──
self.addEventListener('install', event => {
  console.log('[SW v2] Install, base:', BASE);
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(FAIL_CACHE))
      .then(() => self.skipWaiting())
  );
});

// ── ACTIVATE: buang cache lama ──
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// ── FETCH: Cache First ──
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  if (event.request.url.startsWith('chrome-extension://')) return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;

      return fetch(event.request).then(response => {
        if (response && response.status === 200 && response.type !== 'opaque') {
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, response.clone()));
        }
        return response;
      }).catch(() => {
        if (event.request.destination === 'document') {
          return caches.match(BASE + '/kafa-digital-full.html');
        }
      });
    })
  );
});
