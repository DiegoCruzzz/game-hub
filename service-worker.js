const CACHE_NAME = 'game-hub-v1';
const ASSETS = [
    '/',
    '/index.html',
    '/index.css',
    '/manifest.json'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(ASSETS);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request).then(fetchRes => {
                return caches.open(CACHE_NAME).then(cache => {
                    // Solo guardamos GET requests
                    if (event.request.method === 'GET' && !event.request.url.startsWith('chrome-extension')) {
                        cache.put(event.request.url, fetchRes.clone());
                    }
                    return fetchRes;
                });
            });
        }).catch(() => {
            // Fallback para HTML si no hay red y no está en caché
            if (event.request.headers.get('accept').includes('text/html')) {
                return caches.match('/');
            }
        })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.filter(key => key !== CACHE_NAME)
                    .map(key => caches.delete(key))
            );
        })
    );
});
