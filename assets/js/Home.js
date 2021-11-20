import {clearFooter, gebi, html, qs} from "./utils.js";
export default class Home{
    constructor(){
        
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
                            <a href="#">
                                <div class="carousel-news-single">
                                    <img
                                        src="./assets/images/carousel-small/carousel-1.webp"
                                        alt="carousel-news-1"
                                    />
                                    <div class="carousel-news-single-over">
                                        Lorem ipsum dolor sit amet.
                                    </div>
                                </div>
                            </a>
                            <a href="#">
                                <div class="carousel-news-single">
                                    <img
                                        src="./assets/images/carousel-small/carousel-2.webp"
                                        alt="carousel-news-2"
                                    />
                                    <div class="carousel-news-single-over">
                                        Maiores atque obcaecati veniam at.
                                    </div>
                                </div>
                            </a>
                            <a href="#">
                                <div class="carousel-news-single">
                                    <img
                                        src="./assets/images/carousel-small/carousel-3.webp"
                                        alt="carousel-news-3"
                                    />
                                    <div class="carousel-news-single-over">
                                        Possimus ut doloremque atque nemo.
                                    </div>
                                </div>
                            </a>
                            <a href="#">
                                <div class="carousel-news-single">
                                    <img
                                        src="./assets/images/carousel-small/carousel-4.webp"
                                        alt="carousel-news-4"
                                    />
                                    <div class="carousel-news-single-over">
                                        Maiores ipsa corporis consequatur
                                        recusandae?
                                    </div>
                                </div>
                            </a>
                            <a href="#">
                                <div class="carousel-news-single">
                                    <img
                                        src="./assets/images/carousel-small/carousel-5.webp"
                                        alt="carousel-news-5"
                                    />
                                    <div class="carousel-news-single-over">
                                        Quae voluptatem enim doloremque error?
                                    </div>
                                </div>
                            </a>
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
                    <article class="news-single">
                        <div class="news-body">
                            <div class="news-author">
                                <a href="./userSingle.html">
                                    <img
                                        src="./assets/images/authors-small/author-1.webp"
                                        alt="news-author-1"
                                    /><span class="author-name"
                                        >Lorem, ipsum.</span
                                    >
                                </a>
                            </div>
                            <div class="news-text">
                                <h4 class="news-title">
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Iusto, rerum?
                                </h4>
                                <h6 class="news-description">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quibusdam, adipisci!
                                    Culpa, doloribus, magni eligendi nam
                                    odio, voluptatem illo aut labore est
                                    corporis praesentium. Voluptatibus
                                    veritatis ea illo iusto eligendi
                                    assumenda!
                                </h6>
                            </div>
                            <div class="news-info">
                                <div class="news-info-icons">
                                    <div class="news-info-items">
                                        <i class="far fa-eye"></i>
                                        56,500
                                    </div>
                                    <div class="news-info-items">
                                        <i class="far fa-heart"></i>
                                        45,920
                                    </div>
                                    <div class="news-info-items">
                                        <i class="far fa-calendar"></i>
                                        37,800
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
                                src="./assets/images/news-small/news-1.webp"
                                alt="news-single-1"
                            />
                        </div>
                    </article>
                    <article class="news-single">
                        <div class="news-body">
                            <div class="news-author">
                                <a href="./userSingle.html">
                                    <img
                                        src="./assets/images/authors-small/author-2.webp"
                                        alt="news-author-2"
                                    /><span class="author-name"
                                        >Dolorum, voluptas.</span
                                    >
                                </a>
                            </div>
                            <div class="news-text">
                                <h4 class="news-title">
                                    Unde sit vero eius saepe sequi nihil
                                    tempore quisquam dicta?
                                </h4>
                                <h6 class="news-description">
                                    Odio molestias, culpa adipisci pariatur
                                    consequatur quia minima maiores quos
                                    neque autem fugit quis, repellat
                                    laudantium magni molestiae eum magnam
                                    voluptatem temporibus ducimus omnis
                                    quasi id eaque beatae numquam? Beatae?
                                </h6>
                            </div>
                            <div class="news-info">
                                <div class="news-info-icons">
                                    <div class="news-info-items">
                                        <i class="far fa-eye"></i>
                                        84,500
                                    </div>
                                    <div class="news-info-items">
                                        <i class="far fa-heart"></i>
                                        48,600
                                    </div>
                                    <div class="news-info-items">
                                        <i class="far fa-calendar"></i>
                                        5,600
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
                                src="./assets/images/news-small/news-2.webp"
                                alt="news-single-2"
                            />
                        </div>
                    </article>
                    <article class="news-single">
                        <div class="news-body">
                            <div class="news-author">
                                <a href="./userSingle.html">
                                    <img
                                        src="./assets/images/authors-small/author-3.webp"
                                        alt="news-author-3"
                                    /><span class="author-name"
                                        >Voluptas, officiis!</span
                                    >
                                </a>
                            </div>
                            <div class="news-text">
                                <h4 class="news-title">
                                    Pariatur praesentium, assumenda delectus
                                    ea itaque ipsam velit quam cum?
                                </h4>
                                <h6 class="news-description">
                                    Ipsa alias ea necessitatibus mollitia
                                    enim illum, excepturi recusandae nisi
                                    obcaecati! Autem totam eos accusantium
                                    incidunt deleniti, culpa, amet enim
                                    eveniet soluta consequatur maiores quas
                                    reiciendis nulla cum aspernatur illo.
                                </h6>
                            </div>
                            <div class="news-info">
                                <div class="news-info-icons">
                                    <div class="news-info-items">
                                        <i class="far fa-eye"></i>
                                        59,750
                                    </div>
                                    <div class="news-info-items">
                                        <i class="far fa-heart"></i>
                                        33,680
                                    </div>
                                    <div class="news-info-items">
                                        <i class="far fa-calendar"></i>
                                        28,950
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
                                src="./assets/images/news-small/news-3.webp"
                                alt="news-single-3"
                            />
                        </div>
                    </article>
                    <article class="news-single">
                        <div class="news-body">
                            <div class="news-author">
                                <a href="./userSingle.html">
                                    <img
                                        src="./assets/images/authors-small/author-4.webp"
                                        alt="news-author-4"
                                    /><span class="author-name"
                                        >Excepturi, ab!</span
                                    >
                                </a>
                            </div>
                            <div class="news-text">
                                <h4 class="news-title">
                                    Qui aliquid laboriosam vero consequuntur
                                    voluptatum corrupti! Tempora, debitis
                                    quibusdam!
                                </h4>
                                <h6 class="news-description">
                                    Non quam magnam facere amet quisquam
                                    unde, consectetur aliquam quod! Saepe
                                    molestias id maxime fugit, asperiores
                                    mollitia nobis, neque ratione, eos
                                    deleniti magni quod alias temporibus
                                    cumque nihil esse repellendus.
                                </h6>
                            </div>
                            <div class="news-info">
                                <div class="news-info-icons">
                                    <div class="news-info-items">
                                        <i class="far fa-eye"></i>
                                        87,800
                                    </div>
                                    <div class="news-info-items">
                                        <i class="far fa-heart"></i>
                                        41,200
                                    </div>
                                    <div class="news-info-items">
                                        <i class="far fa-calendar"></i>
                                        16,900
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
                                src="./assets/images/news-small/news-4.webp"
                                alt="news-single-4"
                            />
                        </div>
                    </article>
                    <article class="news-single">
                        <div class="news-body">
                            <div class="news-author">
                                <a href="./userSingle.html">
                                    <img
                                        src="./assets/images/authors-small/author-5.webp"
                                        alt="news-author-5"
                                    /><span class="author-name"
                                        >Aspernatur, nostrum!</span
                                    >
                                </a>
                            </div>
                            <div class="news-text">
                                <h4 class="news-title">
                                    Saepe vel debitis nulla voluptatibus
                                    fugit sint, consectetur reiciendis vero.
                                </h4>
                                <h6 class="news-description">
                                    Repudiandae, quasi doloremque labore
                                    sunt quod delectus exercitationem ullam
                                    error corrupti. Aperiam suscipit, facere
                                    doloremque nesciunt sint molestias. Hic
                                    iste aperiam quis ab temporibus
                                    exercitationem dolor laudantium
                                    voluptate sed quam.
                                </h6>
                            </div>
                            <div class="news-info">
                                <div class="news-info-icons">
                                    <div class="news-info-items">
                                        <i class="far fa-eye"></i>
                                        91,200
                                    </div>
                                    <div class="news-info-items">
                                        <i class="far fa-heart"></i>
                                        74,000
                                    </div>
                                    <div class="news-info-items">
                                        <i class="far fa-calendar"></i>
                                        68,600
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
                                src="./assets/images/news-small/news-5.webp"
                                alt="news-single-5"
                            />
                        </div>
                    </article>
                    <article class="news-single">
                        <div class="news-body">
                            <div class="news-author">
                                <a href="./userSingle.html">
                                    <img
                                        src="./assets/images/authors-small/author-6.webp"
                                        alt="news-author-6"
                                    /><span class="author-name"
                                        >Quisquam, provident?</span
                                    >
                                </a>
                            </div>
                            <div class="news-text">
                                <h4 class="news-title">
                                    Tempore laboriosam neque vitae corporis?
                                    Saepe, rem dolorum. Numquam, ullam!
                                </h4>
                                <h6 class="news-description">
                                    Cupiditate animi aliquam laboriosam
                                    possimus impedit sapiente, asperiores
                                    unde. Minus repudiandae optio repellat,
                                    commodi enim ab est consequuntur veniam
                                    fuga sapiente facilis saepe voluptates
                                    rem, ipsa magni atque? Nulla, atque!
                                </h6>
                            </div>
                            <div class="news-info">
                                <div class="news-info-icons">
                                    <div class="news-info-items">
                                        <i class="far fa-eye"></i>
                                        79,700
                                    </div>
                                    <div class="news-info-items">
                                        <i class="far fa-heart"></i>
                                        49,750
                                    </div>
                                    <div class="news-info-items">
                                        <i class="far fa-calendar"></i>
                                        22,200
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
                                src="./assets/images/news-small/news-6.webp"
                                alt="news-single-6"
                            />
                        </div>
                    </article>
                    <article class="news-single">
                        <div class="news-body">
                            <div class="news-author">
                                <a href="./userSingle.html">
                                    <img
                                        src="./assets/images/authors-small/author-7.webp"
                                        alt="news-author-7"
                                    /><span class="author-name"
                                        >Laboriosam, ipsum?</span
                                    >
                                </a>
                            </div>
                            <div class="news-text">
                                <h4 class="news-title">
                                    Blanditiis minus impedit animi quasi
                                    fugit dicta quae fuga nulla.
                                </h4>
                                <h6 class="news-description">
                                    Earum temporibus maxime ducimus
                                    laudantium vero, voluptatem similique
                                    error doloremque provident! Molestias
                                    asperiores corrupti, atque consectetur
                                    reiciendis expedita ipsam? Dicta laborum
                                    qui excepturi consequuntur debitis? Quae
                                    ad sapiente ipsa magnam?
                                </h6>
                            </div>
                            <div class="news-info">
                                <div class="news-info-icons">
                                    <div class="news-info-items">
                                        <i class="far fa-eye"></i>
                                        59,850
                                    </div>
                                    <div class="news-info-items">
                                        <i class="far fa-heart"></i>
                                        31,900
                                    </div>
                                    <div class="news-info-items">
                                        <i class="far fa-calendar"></i>
                                        11,100
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
                                src="./assets/images/news-small/news-7.webp"
                                alt="news-single-7"
                            />
                        </div>
                    </article>
                    <article class="news-single">
                        <div class="news-body">
                            <div class="news-author">
                                <a href="./userSingle.html">
                                    <img
                                        src="./assets/images/authors-small/author-8.webp"
                                        alt="news-author-8"
                                    /><span class="author-name"
                                        >Reprehenderit, perferendis.</span
                                    >
                                </a>
                            </div>
                            <div class="news-text">
                                <h4 class="news-title">
                                    Eligendi ipsam iure accusamus, qui animi
                                    possimus minima officiis nostrum?
                                </h4>
                                <h6 class="news-description">
                                    Temporibus quam fugit illo accusamus
                                    autem pariatur vel corrupti molestiae
                                    dolores ex. Architecto, laboriosam sit
                                    molestiae non recusandae aspernatur quae
                                    porro cupiditate adipisci illo alias
                                    animi numquam, facilis eligendi
                                    repellat.
                                </h6>
                            </div>
                            <div class="news-info">
                                <div class="news-info-icons">
                                    <div class="news-info-items">
                                        <i class="far fa-eye"></i>
                                        120,500
                                    </div>
                                    <div class="news-info-items">
                                        <i class="far fa-heart"></i>
                                        50,900
                                    </div>
                                    <div class="news-info-items">
                                        <i class="far fa-calendar"></i>
                                        43,600
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
                                src="./assets/images/news-small/news-8.webp"
                                alt="news-single-8"
                            />
                        </div>
                    </article>
                    <article class="news-single">
                        <div class="news-body">
                            <div class="news-author">
                                <a href="./userSingle.html">
                                    <img
                                        src="./assets/images/authors-small/author-9.webp"
                                        alt="news-author-9"
                                    /><span class="author-name"
                                        >Nulla, saepe.</span
                                    >
                                </a>
                            </div>
                            <div class="news-text">
                                <h4 class="news-title">
                                    Perspiciatis expedita velit at
                                    laboriosam facere labore animi sed! Ab.
                                </h4>
                                <h6 class="news-description">
                                    Quos earum obcaecati unde esse deserunt
                                    beatae quia. Placeat ratione sunt quasi
                                    quis assumenda consectetur harum
                                    molestias eum ullam, modi, aperiam
                                    voluptatibus fuga tempore adipisci
                                    soluta ea fugiat quaerat deleniti.
                                </h6>
                            </div>
                            <div class="news-info">
                                <div class="news-info-icons">
                                    <div class="news-info-items">
                                        <i class="far fa-eye"></i>
                                        67,400
                                    </div>
                                    <div class="news-info-items">
                                        <i class="far fa-heart"></i>
                                        45,690
                                    </div>
                                    <div class="news-info-items">
                                        <i class="far fa-calendar"></i>
                                        26,800
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
                                src="./assets/images/news-small/news-9.webp"
                                alt="news-single-9"
                            />
                        </div>
                    </article>
                    <article class="news-single">
                        <div class="news-body">
                            <div class="news-author">
                                <a href="./userSingle.html">
                                    <img
                                        src="./assets/images/authors-small/author-10.webp"
                                        alt="news-author-10"
                                    /><span class="author-name"
                                        >Odio, eveniet.</span
                                    >
                                </a>
                            </div>
                            <div class="news-text">
                                <h4 class="news-title">
                                    Repudiandae eveniet voluptate
                                    necessitatibus accusantium nostrum alias
                                    iste distinctio odio.
                                </h4>
                                <h6 class="news-description">
                                    Voluptatibus molestias officiis eligendi
                                    commodi laborum esse earum, rem dolores
                                    pariatur expedita. Laudantium quae sunt
                                    libero quidem sit enim blanditiis,
                                    corporis deleniti, maxime architecto
                                    ducimus nam aliquam placeat numquam
                                    perferendis.
                                </h6>
                            </div>
                            <div class="news-info">
                                <div class="news-info-icons">
                                    <div class="news-info-items">
                                        <i class="far fa-eye"></i>
                                        79,700
                                    </div>
                                    <div class="news-info-items">
                                        <i class="far fa-heart"></i>
                                        45,600
                                    </div>
                                    <div class="news-info-items">
                                        <i class="far fa-calendar"></i>
                                        34,980
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
                                src="./assets/images/news-small/news-10.webp"
                                alt="news-single-10"
                            />
                        </div>
                    </article>
                </section>
                <aside class="main-news-aside">
                    <h4>Сэдвүүд</h4>
                    <section class="topics">
                        <div class="topic-tag">Lorem.</div>
                        <div class="topic-tag">Quia?</div>
                        <div class="topic-tag">Dolorum.</div>
                        <div class="topic-tag">Tenetur?</div>
                        <div class="topic-tag">Minus!</div>
                        <div class="topic-tag">Ipsum.</div>
                        <div class="topic-tag">Sit?</div>
                        <div class="topic-tag">Numquam.</div>
                        <div class="topic-tag">Quia.</div>
                        <div class="topic-tag">Nostrum?</div>
                        <div class="topic-tag">Veritatis.</div>
                        <div class="topic-tag">Ab.</div>
                        <div class="topic-tag">Saepe?</div>
                        <div class="topic-tag">Nihil?</div>
                        <div class="topic-tag">Nobis.</div>
                        <div class="topic-tag">Qui!</div>
                        <div class="topic-tag">Provident?</div>
                        <div class="topic-tag">Deserunt.</div>
                        <div class="topic-tag">Quidem.</div>
                        <div class="topic-tag">Temporibus.</div>
                    </section>
                    <h4>Зохиолчид</h4>
                    <section class="authors">
                        <div class="author-single">
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
                        </div>
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
        let slider = qs(".carousel-news-body");
        qs(".carousel-button-right").addEventListener("click", () => {
            console.log(slider.offsetWidth, slider.scrollWidth);
            
        });
    }
}