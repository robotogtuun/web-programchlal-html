import { clearFooter, gebi, html, qs } from "../utils.js";
import PageConstructor from "./PageConstructor.js";
export default class User{
	constructor(
		_id,
		first_name,
		last_name,
		avatar,
		description,
		created,
		status,
		likes,
		bio,
		trustedWriter,
		followingUsers
	) {
		this._id = _id || 1;
		this.first_name = first_name || "-";
		this.last_name = last_name || "-";
		this.avatar = avatar || "./assets/images/default-avatar.png";
		this.description = description || "-";
		this.created = Date.parse(created) || Date.now();
		this.status = status || "active";
		this.bio = bio || "-";
		this.likes = likes || [];
		this.trustedWriter = trustedWriter || false;
		this.followingUsers = followingUsers || [];
	}
	render() {
		return html`
			<section class="user">
				<div class="container">
					<section class="user-intro">
						<img src="${this.avatar}" />
						<section class="user-description">
							<h3>${this.last_name} ${this.first_name}</h3>
							${this.description}
						</section>
					</section>
				</div>
			</section>
			<section class="user-banner">
				<div class="container">
					<section class="user-more">
						${this.bio}
					</section>
				</div>
			</section>
            <div class="container">
                <section class="main-news-section">

                </section>
                <aside class="main-news-aside">
                    <h4>Сэдвүүд</h4>
                    <section class="topics">

                    </section>
                    <h4>Зохиолчид</h4>
                    <section class="authors">
                        
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
		`;
	}
    getArticles(){
        for(let i = 0; i<this.pageSize; i++){
            let loader = new Loader("", "", false, false);
            qs(".main-news-section").innerHTML += loader.renderArticle();
        }
        fetch(
            `/api/article/all?pageSize=0&pageNum=10`,
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
            `/api/topic/all?pageSize=0&pageNum=10`,
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
            `/api/user/all?pageSize=0&pageNum=10`,
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
                    if(qsa(".loader-main.userSider")) {
                        let elems = qsa(".loader-main.userSider") || [];
                        for(let i = 0; i<elems.length; i++) elems[i].remove();
                    }
                }
            })
    }
    afterRender(){
        clearFooter();
        this.getArticles();
        this.getTags();
        this.getUserSider();
    }
	renderSider() {
		return html`
			<div class="author-single">
				<img src="${this.avatar}" alt="author-1" />
				<div class="author-info">
					<h5>${this.last_name} ${this.first_name}</h5>
					<span> ${this.description} </span>
				</div>
				<button>Дагах</button>
			</div>
		`;
	}
}
