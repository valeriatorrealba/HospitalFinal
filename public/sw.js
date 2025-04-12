const CACHE_NAME = "hospital-v1";
const urlsToCache = [
        "/",
        "/index.html",
        "/App.css",
        "/index.css",
        "/logo.png",
        "/manifest.json",
        "/icons/icon-72x72.png",
        "/icons/icon-96x96.png",
        "/icons/icon-128x128.png",
        "/icons/icon-144x144.png",
        "/icons/icon-152x152.png",
        "/icons/icon-192x192.png",
        "/icons/icon-384x384.png",
        "/icons/icon-512x512.png",
        "assets/img/logo.png",
        "assets/img/favicon.png",
];

self.addEventListener("install", (event) => {
    console.log("SW: Installed");
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log("Cache abierto");
            return cache.addAll(urlsToCache);
        })
        .catch((err) => console.error("SW: Error en cache.addAll", err))
    );
    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    console.log("SW: Activated");
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        console.log("SW: Borrando caché antigua", cache);
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
    self.clients.claim(); 
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            console.log(response ? "desde el cache" : "desde la red", event.request.url);
            return response || fetch(event.request);
        })
    );
});

self.addEventListener("message", (event) => {
    if (event.data === "SKIP_WAITING") {
        self.skipWaiting();
    }
});