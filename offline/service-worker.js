// service-worker.js

const cacheName = 'quiz-game-v1';
const filesToCache = [
  '/',
  '/home/index.html',
  '/home/style.css'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
