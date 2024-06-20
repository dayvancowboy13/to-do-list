export default class Todo {
    // I did this for some reason, but don't remember now...
    bIsComplete = false;

    constructor (title, description, dueDate = new Date(), priority="low"){
        this.title =  title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    get theTitle(){
        return `The tile for this Todo is ${this.title}`;
    }

    get isComplete(){
        return this.bIsComplete;
    }

    changeCompleteStatus (){
        switch(this.bIsComplete){
            case false: 
            this.bIsComplete = true;
            break;
            case true: 
            this.bIsComplete = false;
            break;
        }
    }

}