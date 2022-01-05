import {clearFooter, gebi, html, qs} from "../utils.js";
export default class Following{
    constructor(width, smallerWidth, rounded, smaller){
        this.width = width+"px" || "initial";
        this.smallerWidth = smallerWidth+"px" || "initial";
        this.rounded = rounded;
        this.smaller = smaller;
    }
    renderArticle(){
        return (html`
            <div class="loader-main article">
                <div class="loader-main-left">
                    <div class="loader-main-small-line blink" style="width: ${this.smallerWidth}"></div>
                    <div class="loader-main-line blink" style="width: ${this.width}"></div>
                    <div class="loader-main-description">
                        <div class="loader-main-line blink" style="width: ${this.width}"></div>
                        <div class="loader-main-line blink" style="width: ${this.width}"></div>
                        <div class="loader-main-small-line blink" style="width: ${this.smallerWidth}"></div>
                        <div class="loader-main-small-line blink" style="width: ${this.smallerWidth}"></div>
                        <div class="loader-main-small-line blink" style="width: ${this.smallerWidth}"></div>
                    </div>
                </div>
                <div class="loader-main-right">
                    <div class="loader-main-img blink" style="border-radius: ${this.rounded ? "50%" : "0px"}"></div>
                </div>
            </div>
        `);
    }
    renderTag(){
        return (html`
            <div class="loader-main tag" style="display: inline-block">
                <div class="loader-main-description" style="display: inline-block">
                    <div class="loader-main-small-line blink" style="width: ${this.smallerWidth}"></div>
                </div>
            </div>
        `);
    }
    renderUserSider(){
        return (html`
            <div class="loader-main userSider" style="display: flex">
                <div class="loader-main-left">
                    <div class="loader-main-img blink" style="border-radius: ${this.rounded ? "50%" : "0px"}"></div>
                </div>
                <div class="loader-main-right">
                    <div class="loader-main-description">
                        <div class="loader-main-line blink"></div>
                        <div class="loader-main-line blink"></div>
                    </div>
                </div>
            </div>
        `);
    }
    renderCarousel(){
        return (html`
            <div class="loader-main carousel" style="display: flex">
                <div class="loader-main-img blink" style="border-radius: ${this.rounded ? "50%" : "0px"}"></div>
            </div>
        `);
    }
}