import {gebi} from "./utils.js";
import PageConstructor from "./PageConstructor.js";
import Home from "./Home.js";
import About from "./About.js";

const app = new PageConstructor("main", {});
const home = new Home();
const about = new About();
app.add("/", "/", home);
app.add("/", "/about", about);
window.addEventListener("popstate", e => app.on(document.location.pathname));
app.on("/");
// console.log("document.location.pathname", document.location.pathname);