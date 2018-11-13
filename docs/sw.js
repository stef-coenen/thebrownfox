/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "about-me.html",
    "revision": "19b89c565aec404784e3998e9e6a4ce5"
  },
  {
    "url": "design/css/brownfox.css",
    "revision": "b3358055632e5795d2271d8f8a3aa655"
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
    "revision": "11e2b5c7a16e7742bb260806c07ca2d0"
  },
  {
    "url": "design/js/lib.js",
    "revision": "2d1333f3e86ab96e83d6ffb4a918275c"
  },
  {
    "url": "index.html",
    "revision": "cea033ce74dcbea9b2b02e02cdef3254"
  },
  {
    "url": "over-mij.html",
    "revision": "da24f91987fb539b8135381803f56ca8"
  },
  {
    "url": "projecten.html",
    "revision": "fb53c24fe6e62ff4f6d492709865da66"
  },
  {
    "url": "projects.html",
    "revision": "e01b81d431f2568ca19ff6c32bdcfff9"
  },
  {
    "url": "workbox-sw.prod.v2.1.3.js",
    "revision": "a9890beda9e5f17e4c68f42324217941"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
