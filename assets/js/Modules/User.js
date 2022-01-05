import {clearFooter, gebi, html, qs} from "../utils.js";
export default class User {
    constructor(id, first_name, last_name, avatar, description, created, status, likes, bio, trusted, following){
        this.id = id || 'id';
        this.first_name = first_name || 'first_name';
        this.last_name = last_name || 'last_name';
        this.avatar = avatar || './assets/images/authors-small/author-10.webp';
        this.description = description || "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo atque aspernatur, tempora in voluptatibus quaerat deserunt perferendis! Accusantium, dolores ipsum."
        this.created = Date.parse(created) || Date.now();
        this.status = status || 'active';
        this.bio = bio || 'bio';
        this.id = id || 'id';
    }
    render(){
        
    }
    renderSider(){
        return (html`
            <div class="author-single">
                <img
                    src="${this.avatar}"
                    alt="author-1"
                />
                <div class="author-info">
                    <h5>${this.last_name} ${this.first_name}</h5>
                    <span>
                        ${this.description}
                    </span>
                </div>
                <button>Дагах</button>
            </div>
        `);
    }
}