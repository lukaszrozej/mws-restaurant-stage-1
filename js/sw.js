let staticCacheName = 'rr-static-v4';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches
      .open(staticCacheName)
      .then(cache =>
        cache.addAll([
          '/',
          '/index.html',
          '/restaurant.html',
          '/css/styles.css',
          '/data/restaurants.json',
          '/js/dbhelper.js',
          '/js/main.js',
          '/js/restaurant_info.js',
          '/js/register-sw.js',
          '/img/1.jpg',
          '/img/2.jpg',
          '/img/3.jpg',
          '/img/4.jpg',
          '/img/5.jpg',
          '/img/6.jpg',
          '/img/7.jpg',
          '/img/8.jpg',
          '/img/9.jpg',
          '/img/10.jpg'
        ])
    )
    .catch(error => console.log(error))
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames
          .filter(cacheName => {
            cacheName.startsWith('rr-') && cacheName != staticCacheName
        })
          .map(cacheName => {
            console.log(cacheName)
            caches.delete(cacheName)
          })
      )
    )
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches
      .match(event.request)
      .then(response => response || fetch(event.request))
  );
});
