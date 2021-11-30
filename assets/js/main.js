import {gebi} from "./utils.js";
import PageConstructor from "./PageConstructor.js";
import Home from "./Home.js";
import About from "./About.js";
import Following from "./Following.js";
import Recommended from "./Recommended.js";

const app = new PageConstructor("main", {});
const home = new Home();
const about = new About();
const following = new Following();
const recommended = new Recommended();
app.add("/", "/", home);
app.add("/", "/about", about);
app.add("/", "/following", following);
app.add("/", "/recommended", recommended);
window.addEventListener("popstate", e => app.on(document.location.pathname));
app.on("/");
// console.log("document.location.pathname", document.location.pathname);