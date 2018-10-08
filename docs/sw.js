importScripts('workbox-sw.prod.v2.1.3.js');

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
    "revision": "c8672adb61df90a68b9dee4612a290b8"
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
    "url": "design/img/logo-thebrownfox-bg.svg",
    "revision": "aa406a8512448923fe27a20ce255da16"
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
    "revision": "02cd6d84006f6e70236d2588ae1ca90d"
  },
  {
    "url": "design/img/projects/delegation.jpg",
    "revision": "e5de0cc36db8eba2826852d24097c491"
  },
  {
    "url": "design/img/projects/fixit-volley.jpg",
    "revision": "c23d876027c4741ba82c1f2f279cecb6"
  },
  {
    "url": "design/img/projects/khc-dragons.jpg",
    "revision": "af6b55d25dda47af774f5a443091fe65"
  },
  {
    "url": "design/img/projects/knap-geknipt.jpg",
    "revision": "cac7be82f3d2b2d7058c1dc8ebf53fc8"
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
    "revision": "e654c3bd428699966e9968e1369cefaa"
  },
  {
    "url": "design/js/applib.js",
    "revision": "1cb681e5ecc969086e91c569308f27fe"
  },
  {
    "url": "design/js/lib.js",
    "revision": "2d1333f3e86ab96e83d6ffb4a918275c"
  },
  {
    "url": "index.html",
    "revision": "8a056bdd59d4161f63d3c7418c162b8f"
  },
  {
    "url": "over-mij.html",
    "revision": "ae700b5d1f9f99231e0e531420cec968"
  },
  {
    "url": "projecten.html",
    "revision": "b2866245aa36c1b4048e762a20efec6b"
  },
  {
    "url": "workbox-sw.prod.v2.1.0.js",
    "revision": "e5f207838d7fd9c81835d5705a73cfa2"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
