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

    findTodo (todoTitle){
        for (let todo of this.todoArray) {
            if(todoTitle === todo.title){
                return todo;
            }
        }

        return undefined;
    }

    printTodos (){
        let todoString = "";
        for(let todo of this.todoArray){
            todoString += todo.title + " ";
            // console.log(typeof todo)
        }

        console.log(todoString);
    }

    addTodo (todo) {
        console.log(`Adding "${todo.title}" to ${this.name} project`);
        this.todoArray.push(todo);
        // console.log(this.todoArray);
    }

    removeTodo (todoTitle){
        console.log(`Removing a Todo with name ${todoTitle} from project ${this.name}`);
        let i = 0;
        for (let todos of this.todoArray){
            if(todos.title === todoTitle){
                this.todoArray.splice(i, 1);
                return true;
            } else i++;
        }
        return false;
    }

}