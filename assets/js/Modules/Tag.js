import {clearFooter, gebi, html, qs} from "../utils.js";
export default class Tag{
    constructor(title, _id, link){
        this._id = _id || 1;
        this.title = title || '-';
        this.link = link || '#';
    }
    render(){
        const {title, link} = this;
        return (html`
            <a href="${link}" class="topic-tag">${title}</a>
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