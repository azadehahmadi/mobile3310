const staticMobileApp = "mobile'App-site-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/code.js",
  "/images",

]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticMobileApp).then(cache => {
      cache.addAll(assets)
    })
  )
})
self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})
