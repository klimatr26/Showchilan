/// <reference lib="webworker" />

declare const self: ServiceWorkerGlobalScope;

const SHELL_CACHE = 'showchilan-shell-v1';
const DATA_CACHE = 'showchilan-datos-v1';
const OFFLINE_URLS = ['/', '/turismo'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(SHELL_CACHE).then((cache) => cache.addAll(OFFLINE_URLS)),
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== SHELL_CACHE && key !== DATA_CACHE)
          .map((key) => caches.delete(key)),
      ),
    ),
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') {
    return;
  }

  const requestUrl = new URL(request.url);

  if (requestUrl.pathname.startsWith('/api/negocios')) {
    event.respondWith(cacheFirstData(request));
    return;
  }

  if (request.mode === 'navigate' || OFFLINE_URLS.includes(requestUrl.pathname)) {
    event.respondWith(networkFirstPage(request));
    return;
  }

  if (['style', 'script', 'image', 'font'].includes(request.destination)) {
    event.respondWith(cacheFirstAsset(request));
  }
});

async function networkFirstPage(request: Request) {
  try {
    const networkResponse = await fetch(request);
    const cache = await caches.open(SHELL_CACHE);
    cache.put(request, networkResponse.clone());
    return networkResponse;
  } catch {
    const cache = await caches.open(SHELL_CACHE);
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    const rootResponse = await cache.match('/');
    return rootResponse ?? Response.error();
  }
}

async function cacheFirstAsset(request: Request) {
  const cache = await caches.open(SHELL_CACHE);
  const cached = await cache.match(request);
  if (cached) {
    return cached;
  }
  const networkResponse = await fetch(request);
  cache.put(request, networkResponse.clone());
  return networkResponse;
}

async function cacheFirstData(request: Request) {
  const cache = await caches.open(DATA_CACHE);
  const cached = await cache.match(request);
  try {
    const networkResponse = await fetch(request);
    cache.put(request, networkResponse.clone());
    return networkResponse;
  } catch {
    if (cached) {
      return cached;
    }
    return new Response(JSON.stringify([]), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
