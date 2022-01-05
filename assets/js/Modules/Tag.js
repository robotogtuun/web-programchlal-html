import {clearFooter, gebi, html, qs} from "../utils.js";
export default class Tag{
    constructor(title){
        this.title = title || '-';
    }
    render(){
        const {title} = this;
        return (html`
            <div class="topic-tag">${title}</div>
        `);
    }
    searchRender(){
        const {title} = this;
        return (html`
            <div class="tag">${title}</div>
        `);
    }
    afterRender(){
        
    }
}