export default class Project {
    
    constructor(name="default") {
        this.name = name;
        this.todoArray = new Array();
        console.log(`New project object created with name ${name}`);
    }

    get projectName(){
        return this.name;
    }

    func1 () {
        console.log("Func1");
        // console.log(bigCall);
        console.log(this.p1); // undefined
    }

    addTodo (todo) {
        console.log("this function will add the todo object to the project's array");
        console.log(this.todoArray);
        this.todoArray.push(todo);
        console.log(this.todoArray);
    }

}