/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
// These entries live outside of webpack. We build the index.html with the static
// webpack compiler, and hence, it's not appended to the manifest entries from
// our js-build
const manualEntries = [
  {
    url: '/index.html',
  },
]
self.__precacheManifest = manualEntries.concat(self.__precacheManifest || [])

console.log(self.__precacheManifest);
workbox.precaching.suppressWarnings()
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

workbox.routing.registerNavigationRoute('/index.html')
