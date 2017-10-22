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
    "url": "design/js/applib.js",
    "revision": "88ccad5ef9d4e75a2c70a5f1b29e581b"
  },
  {
    "url": "design/js/lib.js",
    "revision": "3d72ddae5ea97950db4327794fadd501"
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
