const CACHE_NAME = "static-cache-v2";
const DATA_CACHE_NAME = "data-cache-v1";
const FILES_TO_CACHE = [
  "/index.html",
  "/icons/icon-192x192.png",
  "/icons/icon-512x512.png",
  "/styles.css",
];

// install
self.addEventListener("install", function (evt) {
  // pre cache image data
  evt.waitUntil(
    caches.open(DATA_CACHE_NAME).then((cache) => cache.add("/api/transaction"))
  );
  // pre cache all static assets
  evt.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE)));

  // tell the browser to activate this service worker immediately once it
  // has finished installing
  self.skipWaiting();
});
