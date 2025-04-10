'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a2e0d153bbb10fcc89c25ebd6fe10b74",
"assets/AssetManifest.bin.json": "abe0f4ed7bc00c3e0586a0ff43e0e869",
"assets/AssetManifest.json": "52faaebe7212c4bde480f312c99b4436",
"assets/assets/%25C3%258Dcones/Add_branco.png": "6d1b445b19ab397991650af976b037e1",
"assets/assets/%25C3%258Dcones/Add_lil%25C3%25A1s.png": "95bd55c55d171b1d55ccfb38cbc5c493",
"assets/assets/%25C3%258Dcones/check.png": "fcac5a7c9150de3c422a2d55f42d24af",
"assets/assets/%25C3%258Dcones/check.svg": "bb86d021f5aeaf6d511c947e4e2c044b",
"assets/assets/%25C3%258Dcones/Check_branco.png": "6e1654cfde402e134014ff3bcf0c0cab",
"assets/assets/%25C3%258Dcones/Check_branco.svg": "b96e3d864713351f3427a901e4f79244",
"assets/assets/%25C3%258Dcones/Check_verde.png": "cbab4eb573d58cd202152b4039982d2c",
"assets/assets/%25C3%258Dcones/Check_verde.svg": "5b60da2f9235741ff3d7939aabae60a2",
"assets/assets/%25C3%258Dcones/close%2520(1).svg": "e9bf941da41bad467bf8150a18c72dc0",
"assets/assets/%25C3%258Dcones/close%2520(2).svg": "ec082baf4fcc6fd501e30b0e18ed1093",
"assets/assets/%25C3%258Dcones/close%2520(7).png": "f21437771614a56658b77b23f39ac630",
"assets/assets/%25C3%258Dcones/close%2520(8).png": "e9464e10a758a20a3feda52ae4c6dda0",
"assets/assets/%25C3%258Dcones/delete%2520(1).png": "17ef533905fb5d7e8daaf4d9357935d1",
"assets/assets/%25C3%258Dcones/delete%2520(1).svg": "41b546497ae82c8485110f369f309c75",
"assets/assets/%25C3%258Dcones/delete%2520(2).png": "d1b08da4da70f6921d81249aff24036c",
"assets/assets/%25C3%258Dcones/delete.svg": "dfb7d424fd543a92071e8535e734812f",
"assets/assets/%25C3%258Dcones/delete_outline%2520(1).png": "62dcf74101ea371176f5c7bc01c7e052",
"assets/assets/%25C3%258Dcones/delete_outline%2520(1).svg": "7674b21dbc983694dfb182fe31d1defe",
"assets/assets/%25C3%258Dcones/delete_outline%2520(2).png": "cbca188313c649fb4531eb580bf74d97",
"assets/assets/%25C3%258Dcones/delete_outline.svg": "efaeb7d3279bd5b4a749d75b006aedb0",
"assets/assets/%25C3%258Dcones/edit%2520(1).png": "205bcc76c6f2af61c1a6b8c42731c8c1",
"assets/assets/%25C3%258Dcones/more_vert%2520lil%25C3%25A1s.png": "af88c91a118545e36e6685fb652f0fc5",
"assets/assets/%25C3%258Dcones/more_vert%2520lil%25C3%25A1s.svg": "c8f2f776bc67216ce8b85eeac6fbb514",
"assets/assets/%25C3%258Dcones/more_vert.png": "5b81ff39cea80a3848a72f850050693f",
"assets/assets/%25C3%258Dcones/more_vert.svg": "084f729ea1c9a0f3d03a53e87b146a1f",
"assets/assets/%25C3%258Dcones/Music%2520note.png": "db2c6d86764da89b99c9cafdcde09de2",
"assets/assets/%25C3%258Dcones/Music%2520note.svg": "32618ba0107526cc8954265995682796",
"assets/assets/%25C3%258Dcones/Music%2520off.png": "7fb1902f69d3df11e04f7bb7aa3b86b4",
"assets/assets/%25C3%258Dcones/Music%2520off.svg": "3d02d1b0c72035a8b64e88af54cce6c8",
"assets/assets/%25C3%258Dcones/music_note.png": "3b3c7236eb82706aa889b1f1039474f0",
"assets/assets/%25C3%258Dcones/music_note.svg": "23acaeaa6c499a44ba0bfc622125d6c3",
"assets/assets/%25C3%258Dcones/music_off.png": "6b66c65a987c4572e2b52e06bb58d92b",
"assets/assets/%25C3%258Dcones/music_off.svg": "2524e69d1211b52af0a9ad6c284ecb9a",
"assets/assets/%25C3%258Dcones/pause.png": "511c588670b414a0c5b82b7e8310fe52",
"assets/assets/%25C3%258Dcones/pause.svg": "6614b209ba3db66942d9cb60e019db6b",
"assets/assets/%25C3%258Dcones/play_arrow.png": "11a64c673a97dce6782ac87166874827",
"assets/assets/%25C3%258Dcones/play_arrow.svg": "63ddc36e2a08c108309b7fd52470f09e",
"assets/assets/%25C3%258Dcones/save.png": "4d50fcfa18d3a208dcbdecbd5c5f2257",
"assets/assets/%25C3%258Dcones/save.svg": "45ac4bf43f74b17c717e754d81bf75e0",
"assets/assets/%25C3%258Dcones/save_small.png": "d199f5c6be455943550bb9ff148b6863",
"assets/assets/%25C3%258Dcones/save_small.svg": "5666679d077da96b87938c3e0137fe39",
"assets/assets/Figma/Componentes.png": "f720cc29ac0d011df970baf9107aff4e",
"assets/assets/Figma/Cores.png": "02b27ac2551c3db011c0846dd142adab",
"assets/assets/Figma/Descanso%2520curto%2520%2520(Tablet).png": "e228ba1cb1081ebd4aa483c5f2c22365",
"assets/assets/Figma/Descanso%2520curto%2520(Mobile).png": "7d4d975cde0b9fca6380568008a82dc7",
"assets/assets/Figma/Descanso%2520longo%2520(Desktop).png": "e5f474f4142909be718aab88122c38d2",
"assets/assets/Figma/Descanso%2520longo%2520(Mobile).png": "5bf240deef4295bfbbe46e70128fea5f",
"assets/assets/Figma/Descanso%2520longo%2520(Tablet).png": "be0ac7fbb1736ca344bf527b7a2473e2",
"assets/assets/Figma/Foco%2520-%2520Adi%25C3%25A7%25C3%25A3o%2520tarefas%2520(Desktop).png": "92eb82b8285eea129cbbc24a041050f7",
"assets/assets/Figma/Foco%2520-%2520Adi%25C3%25A7%25C3%25A3o%2520tarefas%2520(Mobile).png": "9307b5910a26386e7878f16d2bee34ea",
"assets/assets/Figma/Foco%2520-%2520Adi%25C3%25A7%25C3%25A3o%2520tarefas%2520(Tablet).png": "11f7c96cff524fd199fc16d9b5f7b39a",
"assets/assets/Figma/Foco%2520-%2520Vazio%2520(Desktop).png": "1fba27e1cca705ca875a21e2158d34dd",
"assets/assets/Figma/Modo%2520descanso%2520curto%2520(Desktop).png": "13314df137bf814f21b638d7cc88582d",
"assets/assets/Figma/Tipografia.png": "09bc1fdef8346256dacd0f4787ac6abc",
"assets/assets/Imagens/Background-linhas.png": "76d93c284b636b35fcb853b1b109505f",
"assets/assets/Imagens/Imagem%2520descanso%2520curto.png": "6abea74fad477e2ec07f75b63b1444fd",
"assets/assets/Imagens/Imagem%2520descanso%2520longo.png": "4307b1de6bf80a19542014cfdee1ae84",
"assets/assets/Imagens/Imagem%2520foco.png": "9a2e026befcbb47f4fdb4f533e7b1282",
"assets/assets/Imagens/Imagem%2520tela%2520inicial%2520(1).png": "063dc3bda8d00a1127b83f2f25fa1011",
"assets/assets/Imagens/Imagem%2520tela%2520inicial.png": "b103144da8c0710cbfb551443e78c314",
"assets/assets/Logo/Favicon-1.png": "ce7ac4df560eb9945099ef804d647555",
"assets/assets/Logo/Favicon-2.png": "5f4662869508b33fa7720c1e7441d8d0",
"assets/assets/Logo/Logo.png": "172bff609ff934c332c478a94dd657e7",
"assets/assets/Sons/Beep.mp3": "eef9dcf01d4228cbfb724406c0566f93",
"assets/assets/Sons/Contagem%2520regressiva%2520e%2520toque.mp3": "348e44d91de031624fdcdc4edea2dc0c",
"assets/assets/Sons/Press%2520play.wav": "1c578bd831b920724e84036cd8a4c7a7",
"assets/assets/Sons/Press%2520stop%2520button.mp3": "37eb8a517f24c418293f0fcc0f9ad021",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "21e16132e9abda1e95472627918674fe",
"assets/NOTICES": "cd6b16a7cff5077e167bbd3598c7a75f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "aa4b37c593224f974d168cb722415a22",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ebeb6718b70466239e8ea392d20f8036",
"/": "ebeb6718b70466239e8ea392d20f8036",
"main.dart.js": "7ffc1baf4ae9348f5f93ebd9bd9c8243",
"manifest.json": "1d9b05e43fd874ac20d1e36d444e3857",
"version.json": "168b6d2bce4609bdb089b7b284b8201d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
