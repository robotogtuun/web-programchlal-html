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
                                <a class="login"> Нэвтрэх </a>
                            `
                    }
                    </div>
            `;
        gebi(this.id).innerHTML = this.app.get("/").get(route)?.render() || this.notFound();
        qs("#about-a").addEventListener("click", () => this.on("/about"));
        qs(".logo-replacement").addEventListener("click", () => this.on("/"));
        if(this.app.get("/").get(route).afterRender){
            this.app.get("/").get(route)?.afterRender();
        }
    }
    notFound(){
        return `<section><div>Not Found</div></section>`;
    }
}