'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "69dad99a0ea4752c4cd70e36f6530e48",
"index.html": "ae6ff40a9018eee5fd3202cb1e08a1f0",
"/": "5f3319425a7ea29cb2f46c1b96efec3a",
"firebase-messaging-sw.js": "85722920f1f6d0ff3493ac3eaf3d588a",
"main.dart.js": "cdf923c0f86908f004062aab1019b621",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "f3207c0d9f43ae08cb4f14d8b90791b0",
"public/index.html": "5f3319425a7ea29cb2f46c1b96efec3a",
"icons/Icon-192.png": "ca14c55cb8beede3e906844bd1e2a31c",
"icons/Icon-maskable-192.png": "ca14c55cb8beede3e906844bd1e2a31c",
"icons/Icon-maskable-512.png": "886fb2e4167b04d114f9b936d8fc6134",
"icons/Icon-512.png": "886fb2e4167b04d114f9b936d8fc6134",
"manifest.json": "62ef7e075723c3444163e91533c2db71",
"firebase.json": "ceb3227e948a2fffb08892a8749cf74e",
"assets/AssetManifest.json": "1e558df4fb3faf4324d412f3d16b18fc",
"assets/NOTICES": "b90738192d90d3e41fe55f6a4c7284d0",
"assets/FontManifest.json": "3e89d1019b2a0e78d6cf09e2f44ae9f4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "a192f14ae7495ef7b2eefddc996c7fc2",
"assets/fonts/Roboto-Medium.ttf": "68ea4734cf86bd544650aee05137d7bb",
"assets/fonts/Roboto-Light.ttf": "881e150ab929e26d1f812c4342c15a7c",
"assets/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/fonts/Roboto-MediumItalic.ttf": "c16d19c2c0fd1278390a82fc245f4923",
"assets/fonts/Roboto-ThinItalic.ttf": "7bcadd0675fe47d69c2d8aaef683416f",
"assets/fonts/Roboto-BoldItalic.ttf": "fd6e9700781c4aaae877999d09db9e09",
"assets/fonts/Roboto-LightItalic.ttf": "5788d5ce921d7a9b4fa0eaa9bf7fec8d",
"assets/fonts/MaterialIcons-Regular.otf": "0bc654c38984682f194ba2bb7acd4f49",
"assets/fonts/Roboto-Italic.ttf": "cebd892d1acfcc455f5e52d4104f2719",
"assets/fonts/Roboto-BlackItalic.ttf": "c3332e3b8feff748ecb0c6cb75d65eae",
"assets/fonts/Roboto-Bold.ttf": "b8e42971dec8d49207a8c8e2b919a6ac",
"assets/fonts/Roboto-Thin.ttf": "66209ae01f484e46679622dd607fcbc5",
"assets/fonts/Roboto-Black.ttf": "d6a6f8878adb0d8e69f9fa2e0b622924",
"assets/assets/images/image_places.png": "7f20238cb9d16b5811047530ad18e622",
"assets/assets/images/home_cover.png": "6f449aa7ff73e7d3c256837eeacecf77",
"assets/assets/images/loading.json": "f54c56c5cdb8bc3613f44a6edb69dbc3",
"assets/assets/images/Person.png": "cc8b22bff1c838d6ca614f00115eece1",
"assets/assets/images/home_gif.gif": "00f75d8ea63a5315ec7809b66a932bf7",
"assets/assets/images/Logo.png": "ebc1cb63c011a5a3c15b192fb3e4ca4b",
"assets/assets/images/project_image.png": "0c3ba5834961eb6f931cf0b56c69cb84",
"assets/assets/images/cover.jpg": "e1e4b2e46b8d6eabb7330afb0c0d30ff",
"assets/assets/images/Bitmap.png": "365acd89f77bdb087f10e5047ec36fa5",
"assets/assets/lang/en.json": "c935e3d26427d8c615fecb8878dedde0",
"assets/assets/lang/ar.json": "4e74c9b79aba9d78e6ad13faa6da68c8",
"assets/assets/icons/shower_icon.png": "83ab63b27ab2543c07fe3036fb4f3390",
"assets/assets/icons/search_icon.svg": "64e0bacee42b2c239229b13a45e42a2d",
"assets/assets/icons/app_image.png": "c0b9d20ad05ceec11628238703e361d7",
"assets/assets/icons/google_icon.png": "6b35aeafb38238726ebc6f6b23ff516d",
"assets/assets/icons/Hide.svg": "f665aeae9a01bdb0226b84d8f5fa20fa",
"assets/assets/icons/visiable.svg": "9a2955723eb2b89fb3430aa760025248",
"assets/assets/icons/fav.svg": "22acb79992da8a3bf21d147d5a623c5c",
"assets/assets/icons/apple_icon.png": "0e71a5c1db62deb9b030f721a12eb427",
"assets/assets/icons/google_paly_button.png": "3219d6fe9a8f68e6ca42740e5e30ecc8",
"assets/assets/icons/bed_icons.png": "8405b3d0143c2f4b21bb75ab209e1552",
"assets/assets/icons/Location.svg": "7ea4dc11f4f87f9924543aea894e57f1",
"assets/assets/icons/share.svg": "f048d7b68fad6830927ceb2b9554ce97",
"assets/assets/icons/app_store_button.png": "27125c46d29029884f24eb40f147f58e",
"assets/assets/icons/hash_icon.png": "e414a7bf5ec7937a6fd19a516bb8a885",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
