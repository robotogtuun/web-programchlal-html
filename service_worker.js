self.addEventListener("install", (e) => {
	e.waitUntil(
		caches.open("static").then((cache) => {
			return cache.addAll([
				"./",
				"./assets/images/logo_192.png",
                
				"./assets/css/fontawesone.css",
				"./assets/css/font.css",
				"./assets/css/main.css",
                
				"./assets/js/all.js",
				"./assets/js/main.js",
				"./assets/js/utils.js",
				"./assets/js/pwa.js",
				"./assets/js/Modules/Tag.js",
				"./assets/js/Modules/PageConstructor.js",
				"./assets/js/Modules/About.js",
				"./assets/js/Modules/Home.js",
				"./assets/js/Modules/Loader.js",
				"./assets/js/Modules/Article.js",
				"./assets/js/Modules/Following.js",
				"./assets/js/Modules/Recommended.js",
				"./assets/js/Modules/User.js",
                
				"./assets/fonts/manrope-v4-latin_cyrillic-regular.woff2",
				"./assets/fonts/manrope-v4-latin_cyrillic-regular.woff",
				"./assets/fonts/manrope-v4-latin_cyrillic-regular.ttf",
				"./assets/images/main-image-edited.jpg",
				"./assets/fonts/manrope-v4-latin_cyrillic-700.woff",
				"./assets/fonts/fa-solid-900.woff",
				"./assets/fonts/roboto-slab-v16-latin_cyrillic-regular.woff",
				"./assets/fonts/manrope-v4-latin_cyrillic-500.woff",
				"./assets/fonts/fa-regular-400.woff",
				"./assets/fonts/manrope-v4-latin_cyrillic-700.ttf",
				"./assets/fonts/fa-solid-900.ttf",
				"./assets/fonts/manrope-v4-latin_cyrillic-500.ttf",
				"./assets/fonts/fa-regular-400.ttf",
                
				"./assets/images/logo.png",


				"/api/user/all?pageSize=3&pageNum=0",
				"/api/article/all?pageSize=20&pageNum=0",
				"/api/article/special?pageSize=10"
			]);
		})
	);
});
self.addEventListener("fetch", (e) => {
	e.respondWith(
		caches.match(e.request).then((response) => {
			// console.log(e.request)
			return response || fetch(e.request);
		})
	);
});
