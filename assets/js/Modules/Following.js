import {clearFooter, gebi, html, qs, qsa} from "../utils.js";
import Home from "./Home.js";
export default class Following extends Home{
    constructor(props){
        super(props);
    }
    render(){
        return (html`
            <div class="container">
                <section class="main-news-section">
                    <div class="viewing-user">
                        <a
                            id="following"
                            href="/following"
                            class="active link-to-href"
                        >
                            Дагаж буй
                        </>
                        <a id="recommended" href="/recommended" class="link-to-href">
                            Санал болгож буй
                        </a>
                    </div>
                    
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
        `);
    }
    afterRender(){
        this.getArticles();
        this.getTags();
        this.getUserSider();
        [...(qsa(".link-to-href") || [])].forEach(element => {
            console.log(element);
            element.addEventListener("click", (e) => {
                e.preventDefault();
                history.pushState(null, "", e.target.href);
            });
        });
        qs(".logo-replacement").addEventListener("click", (e) => {
            e.preventDefault();
            console.log("wiw");
        })
        console.log(qs("#recommended"))
    }
}