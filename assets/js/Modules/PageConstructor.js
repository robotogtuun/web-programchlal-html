import { gebi, qs, qsa } from "../utils.js";
import "./Message.js";
import User from "./User.js";

export default class PageConstructor {
	constructor(id, user) {
		this.id = id;
		this.app = new Map();
		this.app.set("/", new Map());
		this.user = user || {};
		this.login = true;
        this.showingUserdd = false;
	}
	add(parent, child, data) {
		this.app.get(parent).set(child, data);
	}
	emit(type, message) {
		qs(".message-div").innerHTML += `
            <div class="message-single">
                <message-single type="${type}" message="${message}"></message-single>
            </div>
        `;
	}
	on(route) {
		// console.log(this.app);
		history.pushState(null, "", route);
		gebi("header").innerHTML = `
                <div class="container">
                    <a class="logo-replacement"></a>
                    <div class="header-buttons" id="header-buttons">
                    ${
						Object.keys(this.user || {}).length > 0
							? `
                                <button class="search" aria-label="Хайх">
                                    <i class="fas fa-search"></i>
                                </button>
                                <button class="saved" aria-label="Хадгалсан">
                                    <i class="far fa-bookmark"></i>
                                </button>
                                <div class="login loggedIn">
                                    <img
                                        src="${this.user.avatar}"
                                    />
                                </div>
                                <div class="user-dropdown">
                                    <div class="user-dropdown-own">
                                        <img
                                            src="${this.user.avatar}"
                                        />
                                        <div class="user-dropdown-name">
                                            <b>${this.user.first_name || "-"}</b>
                                            <span>${this.user.last_name}</span>
                                        </div>
                                    </div>
                                    <ul>
                                        <li data-link="/create" class="ddLinks ddStartWriting"><a>Бичих</a></li>
                                        <li data-link="/saved" class="ddLinks ddSaved"><a>Хадгалсан</a></li>
                                        <li data-link="/following" class="ddLinks ddFollowing"><a>Дагаж буй зохиолчид</a></li>
                                        <li data-link="/likedArticle" class="ddLinks ddLikedArticle"><a>Таалагдсан нийтлэлүүд</a></li>
                                        <li data-link="/likedTopic" class="ddLinks ddLikedTopic"><a>Таалагдсан сэдвүүд</a></li>
                                    </ul>
                                </div>
                            `
							: `
                                <a id="about-a">Бидний тухай</a>
                                <button class="search" aria-label="Хайх">
                                    <i class="fas fa-search"></i>
                                </button>
                                <a class="login" id="loginButton"><div id="loginDiv"> Нэвтрэх </div></a>
                            `
					}
                    </div>
                </div>
                <div class="top-search">
                    <div class="container">
                        <section class="top-search-input">
                            <input/>
                        </section>
                        <section class="top-search-body">
                            <aside class="top-search-sider">
                                <ul>
                                    <li class="active"><i class="fas fa-tag"></i> <span>Сэдвүүд</span></li>
                                    <li><i class="far fa-user"></i> <span>Зохиолчид</span></li>
                                    <li><i class="far fa-newspaper"></i> <span>Илэрхийлэл</span></li>
                                </ul>
                            </aside>
                            <section class="top-search-found">
                                <h3>Хайлтын илэрцүүд</h3>
                                <article>
                                <ul>
                                    <li>
                                        <div class="tag">Lorem.</div>
                                        <div class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, non!</div>
                                    </li>
                                    <li>
                                        <div class="tag">Quia.</div>
                                        <div class="description">Perferendis, nesciunt dignissimos. Itaque optio blanditiis eveniet ex. Natus, tempore.</div>
                                    </li>
                                    <li>
                                        <div class="tag">Maiores.</div>
                                        <div class="description">Eius aspernatur accusamus numquam quod doloribus maiores, neque odio necessitatibus!</div>
                                    </li>
                                    <li>
                                        <div class="tag">Possimus!</div>
                                        <div class="description">Cum alias voluptates suscipit illo odit aliquid fugiat sapiente neque!</div>
                                    </li>
                                    <li>
                                        <div class="tag">Aperiam.</div>
                                        <div class="description">Similique laudantium labore consectetur optio, modi eos voluptatem hic aliquid!</div>
                                    </li>
                                    <li>
                                        <div class="tag">Laudantium!</div>
                                        <div class="description">Ratione consequatur sit voluptates tenetur tempora explicabo pariatur nisi inventore!</div>
                                    </li>
                                </ul>
                                </article>
                            </section>
                        </section>
                    </div>
                </div>
                ${
					Object.keys(this.user || {}).length > 0
						? ""
						: `
                            <section class="authentication">
                                <div class="container">
                                    <section class="inner">
                                        <div class="auth-container active" id="login-container">
                                            <h2>Тавтай морил</h2>
                                            <form id="loginForm">
                                                <label for="usernameLogin"> Нэвтрэх нэр </label>
                                                <input id="usernameLogin" type="text" />
                                                <label for="passwordLogin"> Нууц үг </label>
                                                <input id="passwordLogin" type="password" />
                                                <input style="margin-bottom: 15px;" type="submit" value="Нэвтрэх" />
                                                <input class="authLogin" type="hidden" value="login" />
                                            </form>
                                            <div style="text-align: right; margin-bottom: 20px;">
                                                <a class="otherAuth" id="otherAuth-reg">Бүртгүүлэх</a>
                                            </div>
                                            <div
                                                style="
                                                    text-align: center;
                                                    height: 0.5rem;
                                                    border-bottom: 1px solid black;
                                                    width: 100%;
                                                    margin-bottom: 2rem;
                                                "
                                            >
                                                <span
                                                    style="
                                                        background-color: white;
                                                        padding: 0 30px;
                                                    "
                                                >
                                                    Эсвэл
                                                </span>
                                            </div>
                                            <input
                                                type="submit"
                                                class="google"
                                                value="Гүүглээр нэвтрэх"
                                            />
                                            <input
                                                type="submit"
                                                class="mail"
                                                value="Имэйлээр нэвтрэх"
                                            />
                                            <input
                                                type="submit"
                                                class="facebook"
                                                value="Файсбүүкээр нэвтрэх"
                                            />
                                        </div>
                                        <div class="auth-container" id="register-container">
                                            <h2>Бидэнтэй нэгдээрэй</h2>
                                            <form id="registerForm">
                                                <label for="usernameRegister"> Нэвтрэх нэр </label>
                                                <input id="usernameRegister" type="text" />
                                                <label for="passwordRegister"> Нууц үг </label>
                                                <input id="passwordRegister" type="password" />
                                                <input style="margin-bottom: 15px;" type="submit" value="Бүртгүүлэх" />
                                                <input class="authLogin" type="hidden" value="register" />
                                            </form>
                                            <div style="text-align: right; margin-bottom: 20px;">
                                                <a class="otherAuth" id="otherAuth-log">Нэвтрэх</a>
                                            </div>
                                            <div
                                                style="
                                                    text-align: center;
                                                    height: 0.5rem;
                                                    border-bottom: 1px solid black;
                                                    width: 100%;
                                                    margin-bottom: 2rem;
                                                "
                                            >
                                                <span
                                                    style="
                                                        background-color: white;
                                                        padding: 0 30px;
                                                    "
                                                >
                                                    Эсвэл
                                                </span>
                                            </div>
                                            <input
                                                type="submit"
                                                class="google"
                                                value="Гүүглээр бүртгүүлэх"
                                            />
                                            <input
                                                type="submit"
                                                class="mail"
                                                value="Имэйлээр бүртгүүлэх"
                                            />
                                            <input
                                                type="submit"
                                                class="facebook"
                                                value="Файсбүүкээр бүртгүүлэх"
                                            />
                                        </div>
                                    </section>
                                </div>
                            </section>
                        `
				}
            `;
		//Redirect
		// gebi(this.id).innerHTML = (
		//     route !== "/" ?
		//         this.app.get("/").get(route)?.render()
		//         :
		//         Object.keys(this.user || {}).length > 0 ?
		//             this.app.get("/").get("/following")?.render()
		//             :
		//             this.app.get("/").get("/")?.render()
		//         ) || this.notFound();
		gebi(this.id).innerHTML = this.app.get("/").get(route)?.render() || this.notFound();
		if (qs("#about-a")) {
			qs("#about-a").addEventListener("click", () => this.on("/about"));
		}
		qs(".logo-replacement").addEventListener("click", () => this.on("/"));
        
		if (this.app.get("/").get(route).afterRender) {
			this.app.get("/").get(route)?.afterRender();
		}
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});

		//Authentication
		if (qs("#loginButton")) {
			qs("#loginButton").addEventListener("click", (e) => {
				qs(".authentication").classList.toggle("active");
				this.login = true;
				if (qs(".authentication").classList.contains("active")) {
					qs("#loginDiv").classList.toggle("closeIn");
					setTimeout(() => {
						qs("#loginDiv").classList.toggle("closeIn");
						qs("#loginDiv").classList.toggle("swirl");
						qs("#loginDiv").innerHTML = "&#10005";
						setTimeout(() => {
							qs("#loginDiv").classList.toggle("swirl");
						}, 200);
					}, 300);
				} else {
					qs("#loginDiv").classList.toggle("closeIn");
					setTimeout(() => {
						qs("#loginDiv").classList.toggle("closeIn");
						qs("#loginDiv").innerHTML = "Нэвтрэх";
					}, 300);
				}
				qs("#login-container").classList = "auth-container active";
				qs("#register-container").classList = "auth-container";
				if (qs(".top-search") && qs(".top-search").classList.contains("active"))
					qs(".top-search").classList.toggle("active");
			});
			qs("#otherAuth-reg").addEventListener("click", () => {
				qs("#login-container").classList.toggle("active");
				qs("#register-container").classList.toggle("active");
				this.login = false;
			});
			qs("#otherAuth-log").addEventListener("click", () => {
				qs("#login-container").classList.toggle("active");
				qs("#register-container").classList.toggle("active");
				this.login = true;
			});
			qs("#loginForm").addEventListener("submit", (e) => {
				e.preventDefault();
				fetch(
					`/api/login?user_name=${qs("#usernameLogin").value}&password=${
						qs("#passwordLogin").value
					}`,
					{
						method: "POST",
						headers: {
							Accept: "application/json",
							"Content-type": "application/json"
						}
					}
				)
					.then((c) => c.text())
					.then((c) => JSON.parse(c))
					.then((c) => {
						if (c.success) {
							let user = new User(
								c.user._id,
								null,
								null,
								null,
								null,
								c.user.created,
								"active",
								null,
								null,
								false,
								null
							);
							this.user = user;
							document.cookie = `token=${c.token}`;
							this.on("/following");
						} else {
							this.emit("error", c.msg);
						}
					});
			});
			qs("#registerForm").addEventListener("submit", (e) => {
				e.preventDefault();
				fetch(
					`/api/register?user_name=${qs("#usernameRegister").value}&password=${
						qs("#passwordRegister").value
					}`,
					{
						method: "POST",
						headers: {
							Accept: "application/json",
							"Content-type": "application/json"
						}
					}
				)
					.then((c) => c.text())
					.then((c) => JSON.parse(c))
					.then((c) => {
						if (c.success) {
							this.emit("success", c.msg);
							let user = new User(
								c.user._id,
								null,
								null,
								null,
								null,
								c.user.created,
								"active",
								null,
								null,
								false,
								null
							);
							this.user = user;
							document.cookie = `token=${c.token}`;
							this.on("/following");
						} else {
							this.emit("error", c.msg);
						}
					});
				// this.on("/following");
			});
		}
        if(qs(".loggedIn")){
            qs(".loggedIn").addEventListener("click", (e) => {
                if(qs(".user-dropdown").classList.contains("active")){
                    qs(".overlay").classList = 'overlay';
                    qs(".user-dropdown").classList = 'user-dropdown';
                    qs("body").style.overflow = "auto";
                    qs("body").style.height = "100%";
                }else{
                    qs(".overlay").classList = 'overlay active';
                    qs(".user-dropdown").classList = 'user-dropdown active';
                    qs("body").style.overflow = "hidden";
                    qs("body").style.height = "100vh";
                }
            });
            qs(".overlay").addEventListener("click", (e) => {
                if(qs(".user-dropdown").classList.contains("active")){
                    qs(".overlay").classList = "overlay";
                    if(qs(".user-dropdown")) qs(".user-dropdown").classList = 'user-dropdown';
                    if(qs(".creatorModal")) qs(".creatorModal").classList = 'creatorModal';
                    qs("body").style.overflow = "auto";
                    qs("body").style.height = "100%";
                }
            });
        }

		//Search
		qs(".search").addEventListener("click", (e) => {
			qs(".top-search").classList.toggle("active");
			if (qs(".authentication") && qs(".authentication").classList.contains("active")) {
				qs(".authentication").classList.toggle("active");
				qs("#loginDiv").classList.toggle("closeIn");
				this.login = true;
				setTimeout(() => {
					qs("#loginDiv").classList.toggle("closeIn");
					qs("#loginDiv").innerHTML = "Нэвтрэх";
				}, 300);
			}
		});

        //Links
        if(Object.keys(this.user || {}).length > 0){
            let self = this;
            [...(qsa('.ddLinks') || [])].map(element => {
                element.addEventListener('click', () => {
                    self.on(element.dataset['link']);
                });
            });
            qs(".user-dropdown-own").addEventListener('click', () => {
                self.on('/user');
            });
        }
        if(qs(".overlay")){
            qs(".overlay").classList = "overlay";
            qs("body").style.overflow = "auto";
            qs("body").style.height = "100%";
        }
	}
	notFound() {
		return `<section><div>Not Found</div></section>`;
	}
}
