import {clearFooter, gebi, html, qs, qsa} from "../utils.js";
import PageConstructor from "./PageConstructor.js";
import Article from "./Article.js";
import Loader from "./Loader.js";
import Tag from "./Tag.js";
import User from "./User.js";

export default class Home extends PageConstructor{
    constructor(){
        super();
        this.pageSize = 20;
        this.pageNum = 0;

        this.tagSize = 20;
        this.tagNum = 0;

        this.userSize = 3;
        this.userNum = 0;
    }
    getArticles(){
        for(let i = 0; i<this.pageSize; i++){
            let loader = new Loader("", "", false, false);
            qs(".main-news-section").innerHTML += loader.renderArticle();
        }
        fetch(
            `/api/article/all?pageSize=${this.pageSize}&pageNum=${this.pageNum}`,
            {
                "method": "GET", 
                "headers": {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                }
            }
        )
            .then((c) => c.text())
            .then((c) => JSON.parse(c))
            .then(c => {
                if(c.success){
                    (JSON.parse(c.data) || []).map(({json = null}) => {
                        if(json){
                            let {author, body, comment, created, description, image, liked, likes, status, thumbnail, title, topics, viewed, _id} = json;
                            let article = new Article(_id, title, description, body, author, created, status, thumbnail, image, likes, comment, viewed, topics, liked);
                            // if(qs(".loader")) qs(".loader").style.display = "none";
                            if(qsa(".loader-main.article")) {
                                let elems = qsa(".loader-main.article") || [];
                                for(let i = 0; i<elems.length; i++) elems[i].remove();
                            }
                            qs(".main-news-section").innerHTML += article.renderMain();
                        }else{
                            if(qsa(".loader-main.article")) {
                                let elems = qsa(".loader-main.article") || [];
                                for(let i = 0; i<elems.length; i++) elems[i].remove();
                            }
                        }
                    });
                }else{
                    this.emit('error', c.msg);
                    if(qsa(".loader-main.article")) {
                        let elems = qsa(".loader-main.article") || [];
                        for(let i = 0; i<elems.length; i++) elems[i].remove();
                    }
                }
            });
    }
    getTags(){
        for(let i = 0; i<this.tagSize; i++){
            let loader = new Loader(0, 80, false, true);
            qs(".topics").innerHTML += loader.renderTag();
        }
        fetch(
            `/api/topic/all?pageSize=${this.tagSize}&pageNum=${this.tagNum}`,
            {
                "method": "GET", 
                "headers": {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                }
            }
        )
            .then((c) => c.text())
            .then((c) => JSON.parse(c))
            .then(c => {
                if(c.success){
                    (JSON.parse(c.data) || []).map(({json = null}) => {
                        if(json){
                            let { title, _id, link } = json;
                            let tag = new Tag(title, _id, link);
                            if(qsa(".loader-main.tag")) {
                                let elems = qsa(".loader-main.tag") || [];
                                for(let i = 0; i<elems.length; i++) elems[i].remove();
                            }
                            qs(".topics").innerHTML += tag.render();
                        }else{
                            if(qsa(".loader-main.tag")) {
                                let elems = qsa(".loader-main.tag") || [];
                                for(let i = 0; i<elems.length; i++) elems[i].remove();
                            }
                        }
                    });
                }else{
                    this.emit('error', c.msg);
                    if(qsa(".loader-main.tag")) {
                        let elems = qsa(".loader-main.tag") || [];
                        for(let i = 0; i<elems.length; i++) elems[i].remove();
                    }
                }
            })
    }
    getUserSider(){
        for(let i = 0; i<this.userSize; i++){
            let loader = new Loader(0, 0, true, false);
            qs(".authors").innerHTML += loader.renderUserSider();
        }
        let i = 0;
        fetch(
            `/api/user/all?pageSize=${this.userSize}&pageNum=${this.userNum}`,
            {
                "method": "GET", 
                "headers": {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                }
            }
        )
            .then((c) => c.text())
            .then((c) => JSON.parse(c))
            .then(c => {
                if(c.success){
                    (JSON.parse(c.data) || []).map(({json = null}) => {
                        if(json){
                            let { id, first_name, last_name, avatar, created, status, bio, description } = json;
                            let user = new User(id, first_name, last_name, avatar, description, created, status, 0, bio, false, []);
                            if(qsa(".loader-main.userSider")) {
                                let elems = qsa(".loader-main.userSider") || [];
                                for(let i = 0; i<elems.length; i++) elems[i].remove();
                            }
                            qs(".authors").innerHTML += user.renderSider();
                        } else {
                            if(qsa(".loader-main.userSider")) {
                                let elems = qsa(".loader-main.userSider") || [];
                                for(let i = 0; i<elems.length; i++) elems[i].remove();
                            }
                        }
                    });
                }else{
                    this.emit('error', c.msg);
                    if(qsa(".loader-main.userSider")) {
                        let elems = qsa(".loader-main.userSider") || [];
                        for(let i = 0; i<elems.length; i++) elems[i].remove();
                    }
                }
            })
    }
    getCarousel(){
        for(let i = 0; i<this.pageSize; i++){
            let loader = new Loader("", "", false, false);
            qs(".carousel-news-body").innerHTML += loader.renderCarousel();
        }
        fetch(
            `/api/article/special?pageSize=10`,
            {
                "method": "GET", 
                "headers": {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                }
            }
        )
            .then((c) => c.text())
            .then((c) => JSON.parse(c))
            .then(c => {
                if(c.success){
                    (JSON.parse(c.data) || []).map(({json = null}) => {
                        if(json){
                            let {author, body, comment, created, description, image, liked, likes, status, thumbnail, title, topics, viewed, _id} = json;
                            let article = new Article(_id, title, description, body, author, created, status, thumbnail, image, likes, comment, viewed, topics, liked);
                            // if(qs(".loader")) qs(".loader").style.display = "none";
                            if(qsa(".loader-main.carousel")) {
                                let elems = qsa(".loader-main.carousel") || [];
                                for(let i = 0; i<elems.length; i++) elems[i].remove();
                            }
                            qs(".carousel-news-body").innerHTML += article.renderSpecial();
                        }else{
                            if(qsa(".loader-main.carousel")) {
                                let elems = qsa(".loader-main.carousel") || [];
                                for(let i = 0; i<elems.length; i++) elems[i].remove();
                            }
                        }
                    });
                }else{
                    this.emit('error', c.msg);
                    if(qsa(".loader-main.carousel")) {
                        let elems = qsa(".loader-main.carousel") || [];
                        for(let i = 0; i<elems.length; i++) elems[i].remove();
                    }
                }
            });
    }
    render(){
        return (html`
            <section class="intro">
                <div class="container">
                    <div class="intro-text">
                        <h1>Lorem ipsum</h1>
                        <h1>Lorem ipsum</h1>
                        <h1>Lorem ipsum</h1>
                        <button id="writeNow">Бичиж эхлэх</button>
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
        if(qs("#writeNow")){
            qs("#writeNow").addEventListener("click", () => {
                qs(".authentication").classList.add("active");
                qs("#loginDiv").classList.toggle("closeIn");
                setTimeout(() => {
                    qs("#loginDiv").classList.toggle("closeIn");
                    qs("#loginDiv").classList.toggle("swirl");
                    qs("#loginDiv").innerHTML = "&#10005";
                    setTimeout(() => {
                        qs("#loginDiv").classList.toggle("swirl");
                    }, 200);
                }, 300);
            });
        }
    }
}