export default class PageConstructor {
    constructor(id){
        this.id = id;
        this.app = new Map();
        this.app.set("/", new Map());
    }
    add(parent, child, data){
        this.app.get(parent).set(child, data);
    }
    on(route){
        history.pushState(null, "", route);
        document.getElementById(this.id).innerHTML = this.app.get("/").get(route)?.render() || this.notFound();
    }
    notFound(){
        return html`<section><div>Not Found</div></section>`
    }
}