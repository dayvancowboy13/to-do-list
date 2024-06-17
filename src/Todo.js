export default class Todo {
    constructor (title,description){
        this.title =  title;
        this.description = description;
    }

    get theTitle(){
        return `The tile for this Todo is ${this.title}`;
    }
    
    greet(){
        console.log("Hello!");
    }
}