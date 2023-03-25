'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "81fb3b8dafbac3f9235921039cade618",
"assets/assets/fonts/NewFont.ttf": "fc8d66d7803c5703326895c99f36aa39",
"assets/assets/icons/Documents.svg": "51896b51d35e28711cf4bd218bde185d",
"assets/assets/icons/doc_file.svg": "552a02a5a3dbaee682de14573f0ca9f3",
"assets/assets/icons/drop_box.svg": "3295157e194179743d6093de9f1ff254",
"assets/assets/icons/excle_file.svg": "dc91b258ecf87f5731fb2ab9ae15a3ec",
"assets/assets/icons/Figma_file.svg": "0ae328b79325e7615054aed3147c81f9",
"assets/assets/icons/folder.svg": "40a82e74e930ac73aa6ccb85d8c5a29c",
"assets/assets/icons/google_drive.svg": "9a3005a58d47a11bfeffc11ddd3567c1",
"assets/assets/icons/logo.svg": "b3af0c077a73709c992d7e075b76ce33",
"assets/assets/icons/media.svg": "059dfe46bd2d92e30bf361c2f7055c3b",
"assets/assets/icons/media_file.svg": "2ac15c968f8a8cea571a0f3e9f238a66",
"assets/assets/icons/menu_dashbord.svg": "b2cdf62e9ce9ca35f3fc72f1c1fcc7d4",
"assets/assets/icons/menu_doc.svg": "09673c2879de2db9646345011dbaa7bb",
"assets/assets/icons/menu_notification.svg": "460268d6e4bdeab56538d7020cc4b326",
"assets/assets/icons/menu_profile.svg": "fe56f998a7c1b307809ea3653a1b62f9",
"assets/assets/icons/menu_setting.svg": "d0e24d5d0956729e0e2ab09cb4327e32",
"assets/assets/icons/menu_store.svg": "2fd4ae47fd0fca084e50a600dda008cd",
"assets/assets/icons/menu_task.svg": "1a02d1c14f49a765da34487d23a3093b",
"assets/assets/icons/menu_tran.svg": "6c95fa7ae6679737dc57efd2ccbb0e57",
"assets/assets/icons/one_drive.svg": "aa908c0a29eb795606799385cdfc8592",
"assets/assets/icons/pdf_file.svg": "ca854643eeee7bedba7a1d550e2ba94f",
"assets/assets/icons/Search.svg": "396d519c18918ed763d741f4ba90243a",
"assets/assets/icons/sound_file.svg": "fe212d5edfddd0786319edf50601ec73",
"assets/assets/icons/unknown.svg": "b2f3cdc507252d75dea079282f14614f",
"assets/assets/icons/xd_file.svg": "38913b108e39bcd55988050d2d80194c",
"assets/assets/images/001-corporate.png": "fded6c160346c555ba0d0a856b44a470",
"assets/assets/images/002-settings.png": "2906c671e2f6e24fa18daa7ebf4573ef",
"assets/assets/images/003-trademark.png": "4a6c20bad8f5fd5e89621cf033a495e8",
"assets/assets/images/004-secure-shield.png": "860e090b75cbf02fb14862dfd261f0e8",
"assets/assets/images/005-prototype.png": "64d12e40c85a8555d53d4c01eab63976",
"assets/assets/images/006-handshake%2520(1).png": "6740b08225fd2452b780ca69c59c34a1",
"assets/assets/images/006-handshake.png": "86855daa6051f3ac6e18ebe9ec7bc4ee",
"assets/assets/images/about.svg": "179d6d39ed95c737932adcefbcbd1b30",
"assets/assets/images/accept.svg": "06ed92e3231529e26f7063d8f617e0c1",
"assets/assets/images/Bg.png": "9a666cdf58c873ac678e828bde81c00b",
"assets/assets/images/camp.json": "c7998b0fa001d2646b1f26e637868490",
"assets/assets/images/car.json": "c44df54f7bc5fc2a027741e10a7af516",
"assets/assets/images/center.svg": "9070d48bc25df546e014b45f7d0ef479",
"assets/assets/images/chat.png": "8670b47f469ab2bea51e807eefa18aa2",
"assets/assets/images/detailsCard.png": "829de2c2e5b171a973f8a46905da7d24",
"assets/assets/images/document.json": "15ad4248e7756525c4d9d28ce28d5a31",
"assets/assets/images/dokkan.png": "b5f4d751aaec4f1545d8e17856174715",
"assets/assets/images/done.json": "74f014c34362fdba446cae35cdecf33a",
"assets/assets/images/eye.png": "00496555f218110aef953a6f0a9d8e28",
"assets/assets/images/face.png": "0dfe6ab07e52e3f2734960c96a1b66fa",
"assets/assets/images/facebook.json": "11081ce39878c3a645239b17d8589f1b",
"assets/assets/images/feedBack.svg": "a1af266c0f9cac4b547688c8345fcf08",
"assets/assets/images/inst.png": "4a8c23476a7c20c5bee2a752a6f96e9e",
"assets/assets/images/instagram.json": "9cbe86a99be6f4766a473622efcf815c",
"assets/assets/images/ky-1%25201.png": "c7ff5b8e5fd10396e7b4607b353cfcd5",
"assets/assets/images/lf30_editor_liiftrlk.json": "641cf77475ae5a3b3ad2e12cee536974",
"assets/assets/images/logo.png": "5315be9d0a7602fb12a0ad4c2e3006e9",
"assets/assets/images/logoPin.png": "c7ff5b8e5fd10396e7b4607b353cfcd5",
"assets/assets/images/LogoSplash.png": "224976c279ae55a1be822569e45f553c",
"assets/assets/images/noData.json": "1004ad18314975b3cf8f91240df03d69",
"assets/assets/images/noti.svg": "4bdfd35b4728b8273f41232b02a2529f",
"assets/assets/images/no_data.json": "b11cbed5df33c65ca0f4d2128d23ed6b",
"assets/assets/images/partBack%2520copy.png": "2c0b0b37c6a4ee65e431edcd0487a9d4",
"assets/assets/images/partBack.png": "2c0b0b37c6a4ee65e431edcd0487a9d4",
"assets/assets/images/persons.json": "e58d34f620e42abbd147f83aa9218861",
"assets/assets/images/phone.json": "988367b6ae4ff02f9b1f878035982723",
"assets/assets/images/phone.svg": "9c073a38985d595284ae9e3969980b6e",
"assets/assets/images/pin.svg": "c57c0f72fda1792a50a13ef8ca8c7888",
"assets/assets/images/pinBack.png": "9a666cdf58c873ac678e828bde81c00b",
"assets/assets/images/plashHolder.png": "224976c279ae55a1be822569e45f553c",
"assets/assets/images/proccessing.svg": "8b3161843882a9f11a49879d2c1be0c9",
"assets/assets/images/profile_pic.png": "5f56c3070f1c066ae15ecad12fb44f54",
"assets/assets/images/refused.svg": "c7eb958d7f2183c059f55bf94a000c77",
"assets/assets/images/search.json": "1bba5dcdb65e119ee585bd1792792bea",
"assets/assets/images/settingBack.png": "0cb57130bfdd85fc44744b0dd360325d",
"assets/assets/images/status.svg": "577f7614c8df569432887483b1ed0ea5",
"assets/assets/images/trademarkes.json": "71f5b5fa9587f8f185c2b7bec351fb79",
"assets/assets/images/twit.png": "88727afbb7680c7b17de147503c23495",
"assets/assets/images/unEye.svg": "a874f0f4d0d2c85633befc3c0db02cfd",
"assets/assets/images/user.png": "0e049e5510748c6048654bc4282920ff",
"assets/assets/images/wallet.svg": "946673cdca98932adc21890c3627ef7e",
"assets/assets/images/website.json": "0ee1e8368dd0731b100a88fddda9f868",
"assets/FontManifest.json": "d7dc39b430c7e280bd5aff30e391d43a",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "bfe5345f35440967fda7e629a75b8c45",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/fluttericon/lib/fonts/Brandico.ttf": "791921e9b25210e2551b6eda3f86c733",
"assets/packages/fluttericon/lib/fonts/Elusive.ttf": "23f24df0388819e94db2b3c19841841c",
"assets/packages/fluttericon/lib/fonts/Entypo.ttf": "58edfaf27b1032ea4778b69297c02b5a",
"assets/packages/fluttericon/lib/fonts/FontAwesome.ttf": "799bb4e5c577847874f20bd0e9b38a9d",
"assets/packages/fluttericon/lib/fonts/FontAwesome5.ttf": "221b27a41202ddd33990e299939e4504",
"assets/packages/fluttericon/lib/fonts/Fontelico.ttf": "3a1e1cecf0a3eae6be5cba3677379ba2",
"assets/packages/fluttericon/lib/fonts/Iconic.ttf": "34e12214307f5f7cf7bc62086fbf55a3",
"assets/packages/fluttericon/lib/fonts/LineariconsFree.ttf": "276b1d61e45eb9b2dde9482545d9e3ac",
"assets/packages/fluttericon/lib/fonts/Linecons.ttf": "2d0ac407ed11860bf470cb01745fb144",
"assets/packages/fluttericon/lib/fonts/Maki.ttf": "9ecdcd7d24a2461a55d532b86b2740bd",
"assets/packages/fluttericon/lib/fonts/Meteocons.ttf": "8b9c7982496155bb39c67eaf2a243731",
"assets/packages/fluttericon/lib/fonts/MfgLabs.ttf": "09daa533ea11600a98e3148b7531afe3",
"assets/packages/fluttericon/lib/fonts/ModernPictograms.ttf": "5046c536516be5b91c15eb7795e0352d",
"assets/packages/fluttericon/lib/fonts/Octicons.ttf": "7242d2fe9e36eb4193d2bc7e521779bf",
"assets/packages/fluttericon/lib/fonts/RpgAwesome.ttf": "99232001effca5cf2b5aa92cc3f3e892",
"assets/packages/fluttericon/lib/fonts/Typicons.ttf": "3386cae1128e52caf268508d477fb660",
"assets/packages/fluttericon/lib/fonts/WebSymbols.ttf": "4fd66aa74cdc6e5eaff0ec916ac269c6",
"assets/packages/fluttericon/lib/fonts/Zocial.ttf": "c29d6e34d8f703a745c6f18d94ce316d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/iconly/fonts/IconlyBold.ttf": "128714c5bf5b14842f735ecf709ca0d1",
"assets/packages/iconly/fonts/IconlyBroken.ttf": "6fbd555150d4f77e91c345e125c4ecb6",
"assets/packages/iconly/fonts/IconlyLight.ttf": "5f376412227e6f8450fe79aec1c2a800",
"assets/packages/im_stepper/assets/me.jpg": "487511e754834bdf2e6771376d59707e",
"assets/shaders/ink_sparkle.frag": "32f0da1e7a7727026a06c3e364694aa3",
"cors.json": "f9f6de16aebb41c05064bc85a2127e0c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "47d41bdc0f3f1ed03e9e955040c66184",
"/": "47d41bdc0f3f1ed03e9e955040c66184",
"main.dart.js": "ea4a9013bb2658e36a70b439a246bf10",
"manifest.json": "5894adc1097818a69c8a2685071c8020",
"version.json": "5040d2d203449cddcc860300b3c5f7de"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
