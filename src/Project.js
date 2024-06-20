export default class Project {
    
    constructor(name="default") {
        this.name = name;
        this.todoArray = new Array();
        console.log(`New project object created with name ${name}`);
    }

    get projectName(){
        return this.name;
    }

    get allTodos(){
        return this.todoArray;
    }

    get length(){
        return this.todoArray.length;
    }

    addTodo (todo) {
        console.log(`Adding a todo to ${this.name} project`);
        this.todoArray.push(todo);
        console.log(this.todoArray);
    }

    removeTodo (todo){
        console.log(`Removing a Todo with name ${todo.name} from project ${this.name}`);
        this.todoArray.indexOf()
    }

}