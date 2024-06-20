export default class Todo {
    bIsComplete = false;

    constructor (title,description){
        this.title =  title;
        this.description = description;
        // this.dueDate = dueDate;
        // this.priority;
        // this.details;
    }

    get theTitle(){
        return `The tile for this Todo is ${this.title}`;
    }

}