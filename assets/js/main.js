import { gebi } from "./utils.js";
import PageConstructor from "./Modules/PageConstructor.js";
import Home from "./Modules/Home.js";
import About from "./Modules/About.js";
import User from "./Modules/User.js";
import Following from "./Modules/Following.js";
import Recommended from "./Modules/Recommended.js";
import Creator from "./Modules/Creator.js";
import Article from "./Modules/Article.js";
if ((document.cookie || "").split("=").some((str) => str === "token")) {
	let token = "";
	(document.cookie || "")
		.split("; ")
		.map((str) => (str.split("=")[0] === "token" ? (token = str.split("=")[1]) : null));
	fetch(`/api/verify/token?token=${token}`, {
		method: "GET",
		headers: {
			Accept: "application/json",
			"Content-type": "application/json"
		}
	})
		.then((c) => c.text())
		.then((c) => JSON.parse(c))
		.then((c) => {
			if (c.success) {
				const app = new PageConstructor("main", {
					_id: c.user._id,
					first_name: c.user.first_name || '-',
					last_name: c.user.last_name || '-',
					avatar: c.user.avatar || "./assets/images/default-avatar.png",
					description: c.user.description || '-',
					created: c.user.created || new Date().toISOString,
					status: "active",
					likes: c.user.likes || [],
					bio: c.user.bio || '-',
					trustedWriter: c.user.trustedWriter || false,
					following: c.user.followingUsers || []
				});
				const home = new Home();
				const about = new About();
				const following = new Following();
				const recommended = new Recommended();
				const creator = new Creator();
				const article = new Article();
				const user = new User(
					c.user._id,
					c.user.first_name || null,
					c.user.last_name || null,
					c.user.avatar || null,
					c.user.description || null,
					c.user.created || new Date().toISOString,
					"active",
					c.user.likes || null,
					c.user.bio || null,
					c.user.trustedWriter || null,
					c.user.followingUsers || null
				);
				app.add("/", "/", home);
				app.add("/", "/about", about);
				app.add("/", "/following", following);
				app.add("/", "/recommended", recommended);
				app.add("/", "/create", creator);
				app.add("/", "/user", user);
				app.add("/", "/article", article);
				window.addEventListener("popstate", (e) => app.on(document.location.pathname));
				app.on("/following");
			} else {
				const app = new PageConstructor("main", {});
				const home = new Home();
				const about = new About();
				const following = new Following();
				const recommended = new Recommended();
				const creator = new Creator();
				const user = new User();
				const article = new Article();
				app.add("/", "/", home);
				app.add("/", "/about", about);
				app.add("/", "/following", following);
				app.add("/", "/recommended", recommended);
				app.add("/", "/create", creator);
				app.add("/", "/user");
				app.add("/", "/article", article);
				window.addEventListener("popstate", (e) => app.on(document.location.pathname));
				app.on("/");
			}
		});
} else {
	const app = new PageConstructor("main", {});
	const home = new Home();
	const about = new About();
	const following = new Following();
	const recommended = new Recommended();
	const creator = new Creator();
	const user = new User();
	const article = new Article();
	app.add("/", "/", home);
	app.add("/", "/about", about);
	app.add("/", "/following", following);
	app.add("/", "/recommended", recommended);
	app.add("/", "/create", creator);
	app.add("/", "/user", user);
	app.add("/", "/article", article);
	window.addEventListener("popstate", (e) => app.on(document.location.pathname));
	app.on("/");
}
// console.log("document.location.pathname", document.location.pathname);
