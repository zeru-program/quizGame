// service-worker.js

const cacheName = 'quiz-game-v1';
const filesToCache = [
  '/',
  '/home/index.html',
  '/home/style.css',
  '/lv1/index.html',
  '/lv1/style.css',
  '/lv2/index.html',
  '/lv2/style.css',
  '/lv3/index.html',
  '/lv3/style.css',
  '/lv4/index.html',
  '/lv4/style.css',
  '/lv5/index.html',
  '/lv5/style.css',
  '/selectLevel/index.html',
  '/selectLevel/style.css',
  '/assets/backsound.mp3',
  '/assets/clueIcons.png',
  '/assets/exit.png',
  '/assets/false.png',
  '/assets/true.png',
  '/assets/unknown.png',
  '/assets/gear.png',
  '/assets/logo.png',
  '/assets/mute.png',
  '/assets/onvolume.png',
  '/assets/overlay2.png',
  '/assets/poin.png',
  '/assets/true.mp3',
  '/assets/false.mp3',
  '/offline/icons.png'
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
