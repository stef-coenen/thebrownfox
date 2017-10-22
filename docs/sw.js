importScripts('workbox-sw.prod.v2.1.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "design/css/brownfox.css",
    "revision": "f77f33f06522f49829bb667618bc2926"
  },
  {
    "url": "design/fonts/fontawesome/fontawesome-webfont.svg",
    "revision": "8ef356884e8bc0128e25921e21fab64f"
  },
  {
    "url": "design/icons/android-chrome-192x192.png",
    "revision": "e362687d529a5763508db167da9ee1cc"
  },
  {
    "url": "design/icons/android-chrome-512x512.png",
    "revision": "95667cda7e16d5e9b1c7e09d6f3f6278"
  },
  {
    "url": "design/icons/apple-touch-icon.png",
    "revision": "740f395af581ef7093e1e1e81e49551d"
  },
  {
    "url": "design/icons/favicon-16x16.png",
    "revision": "de162307e8ddf5350506c96246cf5294"
  },
  {
    "url": "design/icons/favicon-32x32.png",
    "revision": "eb8f9bd0342f5f94ae2d9bbe0678c9bd"
  },
  {
    "url": "design/icons/mstile-150x150.png",
    "revision": "da38017f324086a65bce387b755292d6"
  },
  {
    "url": "design/icons/safari-pinned-tab.svg",
    "revision": "bf7c6ebd8870333ec625741e86423c29"
  },
  {
    "url": "design/img/logo-thebrownfox.png",
    "revision": "e950ad74db51faca8db0b1936d6a3f73"
  },
  {
    "url": "design/img/logo-thebrownfox.svg",
    "revision": "2c5d620acf5037b76e1cd1489d42c54a"
  },
  {
    "url": "design/img/logo/logo-thebrownfox-black copy.png",
    "revision": "0ff5da2c674abed544c80c0e97b55f4d"
  },
  {
    "url": "design/img/logo/logo-thebrownfox-black copy.svg",
    "revision": "1d4d8746f10de15cfdeabd3aa2d4c2b9"
  },
  {
    "url": "design/img/logo/logo-thebrownfox-black copy@0.5x.png",
    "revision": "9e5139eb3317ddfb6ecd93eecdc593d2"
  },
  {
    "url": "design/img/logo/logo-thebrownfox-black.png",
    "revision": "787efe19641a983323b43754d1b87e4f"
  },
  {
    "url": "design/img/logo/logo-thebrownfox-black.svg",
    "revision": "d5a26da9e8c2c23efb2cf22ff4f5dcb9"
  },
  {
    "url": "design/img/logo/logo-thebrownfox-black@0.5x.png",
    "revision": "d5ddeec153cfc3a638fa9d9540a2742a"
  },
  {
    "url": "design/img/logo/logo-thebrownfox-white.png",
    "revision": "0ff5da2c674abed544c80c0e97b55f4d"
  },
  {
    "url": "design/img/logo/logo-thebrownfox-white.svg",
    "revision": "1d4d8746f10de15cfdeabd3aa2d4c2b9"
  },
  {
    "url": "design/img/logo/logo-thebrownfox-white@0.5x.png",
    "revision": "9e5139eb3317ddfb6ecd93eecdc593d2"
  },
  {
    "url": "design/img/logo/logo-thebrownfox.png",
    "revision": "e950ad74db51faca8db0b1936d6a3f73"
  },
  {
    "url": "design/img/logo/logo-thebrownfox.svg",
    "revision": "2c5d620acf5037b76e1cd1489d42c54a"
  },
  {
    "url": "design/img/logo/logo-thebrownfox@0.5x.png",
    "revision": "b16e3924f93fc477ee404e7e7bf747e3"
  },
  {
    "url": "design/img/projects/attorno.jpg",
    "revision": "a692b51a6e576f0b9f92d848171a3534"
  },
  {
    "url": "design/img/projects/fixit-volley.be- (1).png",
    "revision": "ba317ae666b85ad95d285cef30570b36"
  },
  {
    "url": "design/img/projects/fixit-volley.jpg",
    "revision": "c23d876027c4741ba82c1f2f279cecb6"
  },
  {
    "url": "design/img/projects/sportpunten.jpg",
    "revision": "c88aa0bd8a370034b859269742ada4b8"
  },
  {
    "url": "design/img/projects/tspoor.jpg",
    "revision": "e03a54af1429be4f3622e829921bda7a"
  },
  {
    "url": "design/img/stef.jpg",
    "revision": "75576d0f89d883f5be9940197925f043"
  },
  {
    "url": "design/js/applib.js",
    "revision": "ac016b9e1aceea3c2531d29ed43fb3da"
  },
  {
    "url": "design/js/lib.js",
    "revision": "2d1333f3e86ab96e83d6ffb4a918275c"
  },
  {
    "url": "index.html",
    "revision": "388e3424c0867d6c7354c674c06a2570"
  },
  {
    "url": "over-mij.html",
    "revision": "60a83cf0f5063abae6d322835210d80c"
  },
  {
    "url": "projecten.html",
    "revision": "9db44c5add97f17c60f423afff4d3a84"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
