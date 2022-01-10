import { formatWithThousands, formatDate, html } from "../utils.js";
import PageConstructor from "./PageConstructor.js";

export default class Article extends PageConstructor {
	constructor(
		_id,
		title,
		description,
		body,
		author,
		created,
		status,
		thumbnail,
		image,
		likes,
		commented,
		viewed,
		topic,
		liked
	) {
        super();
		this._id = _id || 1;
		this.title = title || "Error";
		this.description = description || "Error";
		this.body = body || "<p>Error</p>";
		this.author = author || {};
		this.created = Date.parse(created) || Date.now();
		this.status = status || "active";
		this.thumbnail = thumbnail || "./assets/images/news-small/news-1.webp";
		this.image =
			image || "./assets/images/news-big/alfons-morales-YLSwjSy7stw-unsplash (1).jpg";
		this.likes = likes || 0;
		this.commented = commented || [];
		this.viewed = viewed || 0;
		this.topic = topic || [];
		this.liked = liked || [];
	}
	render() {
		return html`
			<div class="container">
				<section class="main-news-section">
					<img src="${this.image}" alt="${this.title}-image" />
					<h4>${this.title}</h4>
					<article id="article-single-body"></article>
				</section>
				<aside class="main-news-aside">
                    <h4>Зохиолч</h4>
					<div class="author-single">
						<img src="./assets/images/authors-small/author-3.webp" alt="author-3" />
						<div class="author-info">
							<h5>Mollitia, nisi quisquam?</h5>
							<span
								>At pariatur necessitatibus reprehenderit, debitis natus nihil
								explicabo? Adipisci eum laborum ipsam esse deleniti fugiat molestias
								odio id vero sed.</span
							>
						</div>
						<button>Дагах</button>
					</div>
                    <h4>Сэдэв</h4>
                    ${(this.topic).map(topic => {
                        return `<a href="${topic.link}" class="topic-tag">${topic.title}</a>`
                    })}
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
    afterRender(){
        qs("#article-single-body").innerHTML = this.body;
    }
	renderMain() {
		const { title, description, thumbnail, created, likes, viewed, author } = this;
		return `
            <article class="news-single">
                <div class="news-body">
                    <div class="news-author">
                        <a href="./userSingle.html">
                            <img
                                src=${
									author.avatar ||
									"https://mybroadband.co.za/news/wp-content/uploads/2017/04/Twitter-profile-picture.jpg"
								}
                                alt="${author.last_name} ${author.first_name}"
                            /><span class="author-name"
                                >${author.last_name} ${author.first_name}.</span
                            >
                        </a>
                    </div>
                    <div class="news-text">
                        <h4 class="news-title">
                            ${
								title ||
								"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, rerum?"
							}
                        </h4>
                        <h6 class="news-description">
                            ${
								description ||
								"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, adipisci! Culpa, doloribus, magni eligendi namodio, voluptatem illo aut labore est corporis praesentium. Voluptatibus veritatis ea illo iusto eligendi assumenda!"
							}
                        </h6>
                    </div>
                    <div class="news-info">
                        <div class="news-info-icons">
                            <div class="news-info-items">
                                <i class="far fa-eye"></i>
                                ${formatWithThousands(viewed)}
                            </div>
                            <div class="news-info-items">
                                <i class="far fa-heart"></i>
                                ${formatWithThousands(likes)}
                            </div>
                            <div class="news-info-items">
                                <i class="far fa-calendar"></i>
                                ${formatDate(created)}
                            </div>
                        </div>
                        <div class="news-actions">
                            <button
                                class="save"
                                aria-label="Хадгалах"
                            >
                                <i class="far fa-save"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="news-img">
                    <img
                        src="${thumbnail}"
                        alt="${title}"
                    />
                </div>
            </article>
            `;
	}
	renderWithoutAuthour() {
		const { title, description, thumbnail, created, likes, viewed, author } = this;
		return `
            <article class="news-single">
                <div class="news-body">
                    <div class="news-text">
                        <h4 class="news-title">
                            ${
								title ||
								"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, rerum?"
							}
                        </h4>
                        <h6 class="news-description">
                            ${
								description ||
								"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, adipisci! Culpa, doloribus, magni eligendi namodio, voluptatem illo aut labore est corporis praesentium. Voluptatibus veritatis ea illo iusto eligendi assumenda!"
							}
                        </h6>
                    </div>
                    <div class="news-info">
                        <div class="news-info-icons">
                            <div class="news-info-items">
                                <i class="far fa-eye"></i>
                                ${formatWithThousands(viewed)}
                            </div>
                            <div class="news-info-items">
                                <i class="far fa-heart"></i>
                                ${formatWithThousands(likes)}
                            </div>
                            <div class="news-info-items">
                                <i class="far fa-calendar"></i>
                                ${formatDate(created)}
                            </div>
                        </div>
                        <div class="news-actions">
                            <button
                                class="save"
                                aria-label="Хадгалах"
                            >
                                <i class="far fa-save"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="news-img">
                    <img
                        src="${thumbnail}"
                        alt="${title}"
                    />
                </div>
            </article>
            `;
	}
	renderSpecial() {
		return html`
			<a href="/article/${this.id}">
				<div class="carousel-news-single">
					<img src="${this.thumbnail}" alt="carousel-news-1" />
					<div class="carousel-news-single-over">${this.title}</div>
				</div>
			</a>
		`;
	}
}
