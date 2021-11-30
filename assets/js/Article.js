import { formatWithThousands, formatDate } from "./utils.js";

export default class Article {
    constructor(id, title, description, body, author, created, status, thumbnail, image, like, comment, view){
        this.id = id;
        this.title = title || 'Error';
        this.description = description || "Error";
        this.body = body || '<p>Error</p>';
        this.author = author || {};
        this.created = Date.parse(created) || Date.now();
        this.status = status || 'active';
        this.thumbnail = thumbnail || "./assets/images/news-small/news-1.webp";
        this.image = image || "./assets/images/news-big/alfons-morales-YLSwjSy7stw-unsplash (1).jpg";
        this.like = like || 0;
        this.comment = comment || [];
        this.view = view || 0;
    }
    render(){
        const {title, description, thumbnail, created, like, view, author} = this;
        return (
            `
            <article class="news-single">
                <div class="news-body">
                    <div class="news-author">
                        <a href="./userSingle.html">
                            <img
                                src=${author.avatar || 'https://mybroadband.co.za/news/wp-content/uploads/2017/04/Twitter-profile-picture.jpg'}
                                alt="${author.last_name} ${author.first_name}"
                            /><span class="author-name"
                                >${author.last_name} ${author.first_name}.</span
                            >
                        </a>
                    </div>
                    <div class="news-text">
                        <h4 class="news-title">
                            ${title || 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, rerum?'}
                        </h4>
                        <h6 class="news-description">
                            ${description || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, adipisci! Culpa, doloribus, magni eligendi namodio, voluptatem illo aut labore est corporis praesentium. Voluptatibus veritatis ea illo iusto eligendi assumenda!'}
                        </h6>
                    </div>
                    <div class="news-info">
                        <div class="news-info-icons">
                            <div class="news-info-items">
                                <i class="far fa-eye"></i>
                                ${formatWithThousands(view)}
                            </div>
                            <div class="news-info-items">
                                <i class="far fa-heart"></i>
                                ${formatWithThousands(like)}
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
            `
        );
    }
    renderWithoutAuthour(){
        const {title, description, thumbnail, created, like, view, author} = this;
        return (
            `
            <article class="news-single">
                <div class="news-body">
                    <div class="news-text">
                        <h4 class="news-title">
                            ${title || 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, rerum?'}
                        </h4>
                        <h6 class="news-description">
                            ${description || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, adipisci! Culpa, doloribus, magni eligendi namodio, voluptatem illo aut labore est corporis praesentium. Voluptatibus veritatis ea illo iusto eligendi assumenda!'}
                        </h6>
                    </div>
                    <div class="news-info">
                        <div class="news-info-icons">
                            <div class="news-info-items">
                                <i class="far fa-eye"></i>
                                ${formatWithThousands(view)}
                            </div>
                            <div class="news-info-items">
                                <i class="far fa-heart"></i>
                                ${formatWithThousands(like)}
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
            `
        );
    }
}