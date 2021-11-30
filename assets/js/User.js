export default class User {
    constructor(id, first_name, last_name, avatar, created, status, likes, bio, trusted, following){
        this.id = id || 'id';
        this.first_name = first_name || 'first_name';
        this.last_name = last_name || 'last_name';
        this.avatar = avatar || 'avatar';
        this.created = Date.parse(created) || Date.now();
        this.status = status || 'active';
        this.bio = bio || 'bio';
        this.id = id || 'id';
    }
    render(){
        
    }
}