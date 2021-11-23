import {gebi, qs} from "./utils.js";
export default class PageConstructor {
    constructor(id, user){
        this.id = id;
        this.app = new Map();
        this.app.set("/", new Map());
        this.user = user || {};
    }
    add(parent, child, data){
        this.app.get(parent).set(child, data);
    }
    on(route){
        console.log(route);
        history.pushState(null, "", route);
        gebi("header").innerHTML = 
            `
                <div class="container">
                    <a class="logo-replacement"></a>
                    <div class="header-buttons" id="header-buttons">
                    ${
                        Object.keys(this.user || {}).length > 0 ? 
                            `
                                <button class="search" aria-label="Хайх">
                                    <i class="fas fa-search"></i>
                                </button>
                                <button class="search" aria-label="Хадгалсан">
                                    <i class="far fa-bookmark"></i>
                                </button>
                                <a class="login loggedIn">
                                    <img
                                        src="./assets/images/authors-small/author-1.webp"
                                    />
                                </a>
                            `
                            :
                            `
                                <a id="about-a">Бидний тухай</a>
                                <button class="search" aria-label="Хайх">
                                    <i class="fas fa-search"></i>
                                </button>
                                <a class="login" id="loginButton"><div id="loginDiv"> Нэвтрэх </div></a>
                            `
                    }
                    </div>
                </div>
                <section class="authentication">
                    <div class="container">
                        <section class="inner">
                            <div class="auth-container">
                                <h2>Тавтай морил</h2>
                                <form>
                                    <label for="username"> Нэвтрэх нэр </label>
                                    <input id="username" type="text" />
                                    <label for="password"> Нууц үг </label>
                                    <input id="password" type="password" />
                                    <input style="margin-bottom: 15px;" type="submit" value="Нэвтрэх" />
                                    <input id="auth" type="hidden" value="login" />
                                </form>
                                <div style="text-align: right; margin-bottom: 20px;">
                                    <a class="otherAuth" id="otherAuth-reg">Бүртгүүлэх</a>
                                </div>
                                <!-- Бидэнтэй нэгдээрэй -->
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
                            <div class="auth-container">
                                <h2>Бидэнтэй нэгдээрэй</h2>
                                <form>
                                    <label for="username"> Нэвтрэх нэр </label>
                                    <input id="username" type="text" />
                                    <label for="password"> Нууц үг </label>
                                    <input id="password" type="password" />
                                    <input style="margin-bottom: 15px;" type="submit" value="Бүртгүүлэх" />
                                    <input id="auth" type="hidden" value="register" />
                                </form>
                                <div style="text-align: right; margin-bottom: 20px;">
                                    <a class="otherAuth">Нэвтрэх</a>
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
            `;
        gebi(this.id).innerHTML = this.app.get("/").get(route)?.render() || this.notFound();
        qs("#about-a").addEventListener("click", () => this.on("/about"));
        qs("#loginButton").addEventListener("click", (e) => {
            qs(".authentication").classList.toggle("active");
            if(qs(".authentication").classList.contains("active")){
                qs("#loginDiv").classList.toggle("closeIn");
                setTimeout(() => {
                    qs("#loginDiv").classList.toggle("closeIn");
                    qs("#loginDiv").classList.toggle("swirl");
                    qs("#loginDiv").innerHTML = "&#10005";
                    setTimeout(() => {
                        qs("#loginDiv").classList.toggle("swirl");
                    }, 200);
                }, 300);
            }else{
                qs("#loginDiv").classList.toggle("closeIn");
                setTimeout(() => {
                    qs("#loginDiv").classList.toggle("closeIn");
                    qs("#loginDiv").innerHTML = "Нэвтрэх";
                }, 300);
            }
        });
        qs(".logo-replacement").addEventListener("click", () => this.on("/"));
        qs("#otherAuth-reg").addEventListener("click", () => {
            if(qs("#auth").value === 'login'){
                qs(".auth-container").innerHTML = `
                    
                `;
            }else {
                qs(".auth-container").innerHTML = `
                    <h2>Тавтай морил</h2>
                    <form>
                        <label for="username"> Нэвтрэх нэр </label>
                        <input id="username" type="text" />
                        <label for="password"> Нууц үг </label>
                        <input id="password" type="password" />
                        <input style="margin-bottom: 15px;" type="submit" value="Нэвтрэх" />
                        <input id="auth" type="hidden" value="login" />
                    </form>
                    <div style="text-align: right; margin-bottom: 20px;">
                        <a class="otherAuth">Бүртгүүлэх</a>
                    </div>
                    <!-- Бидэнтэй нэгдээрэй -->
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
                `
            }
        });
        if(this.app.get("/").get(route).afterRender){
            this.app.get("/").get(route)?.afterRender();
        }
    }
    notFound(){
        return `<section><div>Not Found</div></section>`;
    }
}