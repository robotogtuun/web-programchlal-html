import { gebi, html } from "../utils.js";
export default class About{
    constructor(){
        
    }
    render(){
        return(html`
            <section class="intro about">
                <div class="container">
                    <div class="intro-text">
                        <h1>Lorem ipsum</h1>
                        <h1>Lorem ipsum</h1>
                        <h1>Lorem ipsum</h1>
                    </div>
                    <div class="intro-img">
                        <img
                            class="about-main-img"
                            src="./assets/images/news-small/news-5.webp"
                            alt="main-image"
                        />
                    </div>
                </div>
            </section>
            <div class="container">
                <section class="main-about">
                    <h4>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Atque, placeat.
                    </h4>
                    <section class="about-goals">
                        <img
                            src="./assets/images/carousel-small/carousel-1.webp"
                            alt="goal1"
                        />
                        <img
                            src="./assets/images/carousel-small/carousel-2.webp"
                            alt="goal2"
                        />
                        <img
                            src="./assets/images/carousel-small/carousel-3.webp"
                            alt="goal3"
                        />
                    </section>
                    <h4>Lorem ipsum dolor sit amet.</h4>
                    <section class="about-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Temporibus laudantium praesentium fugit dolorum
                        assumenda repellat voluptatibus, cumque maxime totam
                        asperiores a laborum magnam quod reiciendis suscipit
                        doloribus ad vitae voluptates placeat incidunt officia
                        laboriosam ab doloremque voluptas. Quidem provident
                        assumenda, iusto porro suscipit at exercitationem
                        sapiente repellat velit vel officiis!
                    </section>
                </section>
            </div>
            <section class="about-banner"></section>
            <div class="container">
                <section class="main-about">
                    <section class="about-users">
                        <div class="about-user-single">
                            <img
                                src="./assets/images/authors-small/author-6.webp"
                            />
                            <span>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Illo suscipit qui enim esse
                                earum, ab accusantium blanditiis placeat quaerat
                                debitis.
                            </span>
                        </div>
                        <div class="about-user-single">
                            <img
                                src="./assets/images/authors-small/author-7.webp"
                            />
                            <span>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Ab optio facilis incidunt amet
                                inventore ullam nobis eligendi laudantium
                                debitis alias.
                            </span>
                        </div>
                        <div class="about-user-single">
                            <img
                                src="./assets/images/authors-small/author-8.webp"
                            />
                            <span>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Facere pariatur reiciendis
                                ipsam illum excepturi iusto, nam cupiditate sint
                                vero molestiae.
                            </span>
                        </div>
                    </section>
                </section>
            </div>
        `);
    }
    afterRender(){
        let footer = gebi("footer");
        footer.classList.add("about");
        footer.innerHTML = (`
            <div class="container">
                <div class="replacement"></div>
                <div class="links">
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
                </div>
            </div>
        `);
    };
}