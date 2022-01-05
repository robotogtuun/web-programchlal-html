import {clearFooter, gebi, html, qs, qsa} from "../utils.js";
import Article from "./Article.js";
import Loader from "./Loader.js";
import Tag from "./Tag.js";
import User from "./User.js";

export default class Home{
    constructor(){
        this.pageSize = 20;
        this.pageNum = 0;

        this.tagSize = 20;
        this.tagNum = 0;

        this.userSize = 3;
        this.userNum = 3;
    }
    getArticles(){
        for(let i = 0; i<this.pageSize; i++){
            let loader = new Loader("", "", false, false);
            qs(".main-news-section").innerHTML += loader.renderArticle();
        }
        fetch(
            "https://api.jsonbin.io/v3/c/61a5751c62ed886f915705e7/bins", 
            {"method": "GET", "headers": {"X-Master-key": "$2b$10$pANZJlGYF/szRfrSX6kHk.8.04JCfeSwEm2w0JuqBtyT3NeNpPSna"}}
        )
            .then((c) => c.text())
            .then((c) => JSON.parse(c))
            .then(c => {
                (c || []).map(json => {
                    fetch(`https://api.jsonbin.io/v3/b/${json.record}`, {"method": "GET", "headers": {"X-Master-key": "$2b$10$pANZJlGYF/szRfrSX6kHk.8.04JCfeSwEm2w0JuqBtyT3NeNpPSna"}})
                        .then(res => res.text())
                        .then((c) => JSON.parse(c))
                        .then(c => {
                            let {id, title, description, body, author, created, status, thumbnail, like, view} = c.record;
                            let article = new Article(id, title, description, body, author, created, status, thumbnail, "", like, [], view);
                            // if(qs(".loader")) qs(".loader").style.display = "none";
                            if(qsa(".loader-main.article")) {
                                let elems = qsa(".loader-main.article") || [];
                                for(let i = 0; i<elems.length; i++) elems[i].remove();
                            }
                            qs(".main-news-section").innerHTML += article.render();
                        })
                });
            })
    }
    getTags(){
        for(let i = 0; i<this.tagSize; i++){
            let loader = new Loader(0, 80, false, true);
            qs(".topics").innerHTML += loader.renderTag();
        }
        fetch(
            "https://api.jsonbin.io/v3/c/61a571040ddbee6f8b143bf6/bins", 
            {"method": "GET", "headers": {"X-Master-key": "$2b$10$pANZJlGYF/szRfrSX6kHk.8.04JCfeSwEm2w0JuqBtyT3NeNpPSna"}}
        )
            .then((c) => c.text())
            .then((c) => JSON.parse(c))
            .then(c => {
                (c || []).map(json => {
                    fetch(`https://api.jsonbin.io/v3/b/${json.record}`, {"method": "GET", "headers": {"X-Master-key": "$2b$10$pANZJlGYF/szRfrSX6kHk.8.04JCfeSwEm2w0JuqBtyT3NeNpPSna"}})
                        .then(res => res.text())
                        .then((c) => JSON.parse(c))
                        .then(c => {
                            let { title } = c.record;
                            let tag = new Tag(title);
                            if(qsa(".loader-main.tag")) {
                                let elems = qsa(".loader-main.tag") || [];
                                for(let i = 0; i<elems.length; i++) elems[i].remove();
                            }
                            qs(".topics").innerHTML += tag.render();
                        })
                });
            })
    }
    getUserSider(){
        for(let i = 0; i<this.userSize; i++){
            let loader = new Loader(0, 0, true, false);
            qs(".authors").innerHTML += loader.renderUserSider();
        }
        let i = 0;
        fetch(
            "https://api.jsonbin.io/v3/c/61a5720f62ed886f915704f4/bins", 
            {"method": "GET", "headers": {"X-Master-key": "$2b$10$pANZJlGYF/szRfrSX6kHk.8.04JCfeSwEm2w0JuqBtyT3NeNpPSna"}}
        )
            .then((c) => c.text())
            .then((c) => JSON.parse(c))
            .then(c => {
                (c || []).map(json => {
                    fetch(`https://api.jsonbin.io/v3/b/${json.record}`, {"method": "GET", "headers": {"X-Master-key": "$2b$10$pANZJlGYF/szRfrSX6kHk.8.04JCfeSwEm2w0JuqBtyT3NeNpPSna"}})
                        .then(res => res.text())
                        .then((c) => JSON.parse(c))
                        .then(c => {
                            let { id, first_name, last_name, avatar, created, status, bio, description } = c.record;
                            let user = new User(id, first_name, last_name, avatar, description, created, status, 0, bio, false, []);
                            if(qsa(".loader-main.userSider")) {
                                let elems = qsa(".loader-main.userSider") || [];
                                for(let i = 0; i<elems.length; i++) elems[i].remove();
                            }
                            if(i < 3){
                                qs(".authors").innerHTML += user.renderSider();
                                i++;
                            }
                        })
                });
            })
    }
    getCarousel(){
        for(let i = 0; i<this.pageSize; i++){
            let loader = new Loader("", "", false, false);
            qs(".carousel-news-body").innerHTML += loader.renderCarousel();
        }
        fetch(
            "https://api.jsonbin.io/v3/c/61a5751c62ed886f915705e7/bins", 
            {"method": "GET", "headers": {"X-Master-key": "$2b$10$pANZJlGYF/szRfrSX6kHk.8.04JCfeSwEm2w0JuqBtyT3NeNpPSna"}}
        )
            .then((c) => c.text())
            .then((c) => JSON.parse(c))
            .then(c => {
                (c || []).map(json => {
                    fetch(`https://api.jsonbin.io/v3/b/${json.record}`, {"method": "GET", "headers": {"X-Master-key": "$2b$10$pANZJlGYF/szRfrSX6kHk.8.04JCfeSwEm2w0JuqBtyT3NeNpPSna"}})
                        .then(res => res.text())
                        .then((c) => JSON.parse(c))
                        .then(c => {
                            let {id, title, description, body, author, created, status, thumbnail, like, view} = c.record;
                            let article = new Article(id, title, description, body, author, created, status, thumbnail, "", like, [], view);
                            // if(qs(".loader")) qs(".loader").style.display = "none";
                            if(qsa(".loader-main.carousel")) {
                                let elems = qsa(".loader-main.carousel") || [];
                                for(let i = 0; i<elems.length; i++) elems[i].remove();
                            }
                            qs(".carousel-news-body").innerHTML += article.renderSpecial();
                        })
                });
            })
    }
    render(){
        return (html`
            <section class="intro">
                <div class="container">
                    <div class="intro-text">
                        <h1>Lorem ipsum</h1>
                        <h1>Lorem ipsum</h1>
                        <h1>Lorem ipsum</h1>
                        <button>Бичиж эхлэх</button>
                    </div>
                    <div class="intro-img">
                        <img
                            src="./assets/images/main-image-edited.jpg"
                            alt="main-image"
                        />
                    </div>
                </div>
            </section>
            <div class="carousel-news">
                <div class="container">
                    <section class="carousel-news">
                        <button
                            class="carousel-button carousel-button-left disabled"
                            aria-label="Зүүн явуулах"
                        >
                            <i class="fas fa-chevron-left"></i>
                        </button>
                        <section class="carousel-news-body">
                            
                        </section>
                        <button
                            class="carousel-button carousel-button-right"
                            aria-label="Баруун явуулах"
                        >
                            <i class="fas fa-chevron-right"></i>
                        </button>
                    </section>
                </div>
            </div>
            <div class="container">
                <section class="main-news-section">
                    <!-- <div style="text-align: center; font-size: 40px; margin-top: 20px;" class="loader">
                        <i class="fas fa-spinner"></i>
                    </div> --> 
                </section>
                <aside class="main-news-aside">
                    <h4>Сэдвүүд</h4>
                    <section class="topics">

                    </section>
                    <h4>Зохиолчид</h4>
                    <section class="authors">
                        <!-- <div class="author-single">
                            <img
                                src="./assets/images/authors-small/author-1.webp"
                                alt="author-1"
                            />
                            <div class="author-info">
                                <h5>Lorem, ipsum dolor.</h5>
                                <span
                                    >Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Nemo atque aspernatur,
                                    tempora in voluptatibus quaerat deserunt
                                    perferendis! Accusantium, dolores
                                    ipsum.</span
                                >
                            </div>
                            <button>Дагах</button>
                        </div>
                        <div class="author-single">
                            <img
                                src="./assets/images/authors-small/author-2.webp"
                                alt="author-2"
                            />
                            <div class="author-info">
                                <h5>Numquam, unde atque?</h5>
                                <span
                                    >Ad tempora eveniet doloremque similique
                                    ipsam, neque voluptate facere maiores,
                                    expedita officia quam voluptatem quos
                                    illum, in quia! Aliquam, voluptas.</span
                                >
                            </div>
                            <button>Дагах</button>
                        </div>
                        <div class="author-single">
                            <img
                                src="./assets/images/authors-small/author-3.webp"
                                alt="author-3"
                            />
                            <div class="author-info">
                                <h5>Mollitia, nisi quisquam?</h5>
                                <span
                                    >At pariatur necessitatibus
                                    reprehenderit, debitis natus nihil
                                    explicabo? Adipisci eum laborum ipsam
                                    esse deleniti fugiat molestias odio id
                                    vero sed.</span
                                >
                            </div>
                            <button>Дагах</button>
                        </div> -->
                    </section>
                    <h4>Бидэнтэй холбогдоорой</h4>
                    <footer>
                        <a href="#">Lorem.</a>
                        <a href="#">Magnam.</a>
                        <a href="#">Dignissimos.</a>
                        <a href="#">Tempore!</a>
                        <a href="#">Corporis!</a>
                        <a href="#">Eos.</a>
                        <a href="#">Alias.</a>
                        <a href="#">Iste?</a>
                        <a href="#">Eaque.</a>
                        <a href="#">Hic.</a>
                    </footer>
                </aside>
                <div style="clear: both;"></div>
            </div>
        `);
    }
    afterRender(){
        clearFooter();
        this.getCarousel();
        this.getArticles();
        this.getTags();
        this.getUserSider();
        let slider = qs(".carousel-news-body");
        if(slider){
            qs(".carousel-button-right").addEventListener("click", (e) => {
                if(slider.scrollLeft >= (slider.scrollWidth - slider.offsetWidth-56)){
                    slider.scrollLeft = (slider.scrollWidth - slider.offsetWidth);
                    qs(".carousel-button-right").classList = "carousel-button carousel-button-right disabled";
                }else{
                    qs(".carousel-button-right").classList = "carousel-button carousel-button-right";
                }
                if(!qs(".carousel-button-right").classList.contains("disabled")){
                    slider.scrollLeft += 300;
                    qs(".carousel-button-left").classList = "carousel-button carousel-button-left";
                }
            });
            qs(".carousel-button-left").addEventListener("click", (e) => {
                if(slider.scrollLeft <= 56){
                    slider.scrollLeft = 0;
                    qs(".carousel-button-left").classList = "carousel-button carousel-button-left disabled";
                }else{
                    qs(".carousel-button-left").classList = "carousel-button carousel-button-left";
                }
                if(!qs(".carousel-button-left").classList.contains("disabled")){
                    slider.scrollLeft -= 300;
                    qs(".carousel-button-right").classList = "carousel-button carousel-button-right";
                }
            });
            slider.addEventListener("scroll", (e) => {
                if(slider.scrollLeft === 0){
                    qs(".carousel-button-left").classList = "carousel-button carousel-button-left disabled";
                }else{
                    qs(".carousel-button-left").classList = "carousel-button carousel-button-left";
                }
                if(slider.scrollLeft === (slider.scrollWidth - slider.offsetWidth)){
                    qs(".carousel-button-right").classList = "carousel-button carousel-button-right disabled";
                }else{
                    qs(".carousel-button-right").classList = "carousel-button carousel-button-right";
                }
            });
        }
    }
}