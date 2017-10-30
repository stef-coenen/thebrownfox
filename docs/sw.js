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
    "revision": "1bf92d2f60a0a32a1fadac1f3bfae175"
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
    "url": "design/img/projects/agenda-tspoor.jpg",
    "revision": "c69111e46ea453e2b763dca404938b93"
  },
  {
    "url": "design/img/projects/attorno.jpg",
    "revision": "a692b51a6e576f0b9f92d848171a3534"
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
    "url": "design/img/projects/watnu-legal.jpg",
    "revision": "f35612caedbd7299dd4e7d002536d8e8"
  },
  {
    "url": "design/img/stef.jpg",
    "revision": "75576d0f89d883f5be9940197925f043"
  },
  {
    "url": "design/js/applib.js",
    "revision": "d355e1dd40245a0bc5779087d845debb"
  },
  {
    "url": "design/js/lib.js",
    "revision": "2d1333f3e86ab96e83d6ffb4a918275c"
  },
  {
    "url": "index.html",
    "revision": "f1862c2b6de991a3c50976f2ab61fcdd"
  },
  {
    "url": "over-mij.html",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "projecten.html",
    "revision": "de23ae14601afbc3ef4ee7da34f1d351"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
