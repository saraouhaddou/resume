'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "c8f6e65709cfa070ba92d4d68787bf9c",
"/": "c8f6e65709cfa070ba92d4d68787bf9c",
"main.dart.js": "c404a134c56f34e60631d3793260c07a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a39b8eb2371f907a7a5313856ec428ff",
"assets/LICENSE": "e7a37f0864c7a3ba56376bf27bd72a59",
"assets/AssetManifest.json": "176eb8d9e140862593e9699102107f4f",
"assets/FontManifest.json": "39692cc1325efb51c74ab707f33e1a32",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/Bangers-Regular.ttf": "a82040ecf06139df2f3e653326b3420c",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/15-image_de_presentation.jpg": "8bce8981eb177ccf5c72544718c74a17",
"assets/assets/BIBLIOGRAPHIE.pdf": "db7076de97b62367067d80d0d3a68bbe",
"assets/assets/17-1.jpg": "155e76d9fac9f3f29f96fb60b7783d95",
"assets/assets/18-IMG_4213-3.jpg": "69b5c25e46dad7b35384b6f0d2022d3d",
"assets/assets/9-2.jpg": "53c7c384d2796f822c7741dad54c1c73",
"assets/assets/4-1.Lettres_Ouvertes-Sara_Ouhaddou-vue1%25C2%25A9ICI-photo_credit-Marc_Domage.jpg": "72c4493f5adbc68795e0a3457b24a13f",
"assets/assets/IMG_3070.mp4": "34df57798c106a2ca285539f43b9bd91",
"assets/assets/IMG_3703.mp4": "cd89f85f731ba98e23697831b7059bd0",
"assets/assets/13-2.jpg": "86317d228282145c5e28c0c827f237f1",
"assets/assets/11-2.jpg": "f81124b08982bd79b0641bd4d19e443a",
"assets/assets/8-1_AAglobal.jpg": "e908978adf8ae7eb58d0e8f2a41db790",
"assets/assets/portrait.jpg": "1afc79f292875a691fe2063b466eaf9e",
"assets/assets/5-3905c208-37f5-4de8-9d81-f807a4ee6da9.jpg": "8f819843b0d9cfcfe550b78c6f36663f",
"assets/assets/12-0.jpg": "fca2485922dc4732b8a3156e107f8fef",
"assets/assets/13-detroit-2.JPG": "4ca9f7a13fb9e169b1183e0c30ab5004",
"assets/assets/16-5.jpg": "d2ac98f12ad21f727b825334eefe0e7e",
"assets/assets/10-12.jpg": "71ac8859377df20e492c49542bb8cee8",
"assets/assets/2-image_presentation.jpg": "cbaf6eee5c7fe1499f1113e4843800f9",
"assets/assets/3-AL_KALIMAT_2.jpg": "770eb19576eb2419f81daa65fb8998c6",
"assets/assets/1-180.jpg": "42c67c0a45dc71af10c07ad00f98a500",
"assets/assets/21-bouanani17.jpg": "76606427c19d425e4ea3bd4eb6daf9cc",
"assets/assets/14-IMG_2050.jpg": "7b9dea41baf8a29bbe989921a1d3f183",
"assets/assets/7-1.AFFICHE%2520OCT.jpg": "54dc8c640fa497c299364b79df13f5c1",
"assets/assets/20-2_district_1.JPG": "4edaab4b2d40e10f0c149c449fef2e9f",
"assets/assets/6-Carreaux_verre-010.jpg": "f690d7d45d58519d42c92cf98370447d",
"assets/assets/19-2.jpg": "5746282617e7ec0198c3a9007a17a56c",
"assets/assets/22-5.jpg": "af32606fd7637770bd1f7e1bb5ec3dc4"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
