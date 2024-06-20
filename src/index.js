// this is where all the modules will be pulled into and used from
import Todo from "./Todo.js"
import Project from "./Project.js"

class PuppetMaster {
    static projectArray = new Array();
    static inbox = new Project("Inbox");
    

    static createTodo(name, description){
        console.log("creating todo obj");
        let todo = new Todo(name, description);
        return todo;
    }

    static addToInbox(){
        console.log("adding todo to inbox");
        this.inbox.addTodo(this.createTodo("Finish work", "you gotta!"));
    }

    static inboxTodos(){
        console.log("retrieving number of items in inbox")
        console.log(this.inbox.length)

    }

    static numberOfProjects(){
        return this.projectArray.length;
    }

    static createProject(name){
        console.log("creating project object");
        let project = new Project(name);
        // add new project to the active projects
        this.projectArray.push(project);
    }

    // editTodo () {}
}

PuppetMaster.addToInbox();
PuppetMaster.inboxTodos()

// console.log(PuppetMaster.numberOfProjects());

// have a "default" project when user starts the app


// projects are functionally separate lists of todos
// TODO's can only be part of one project
//      which module allows you to change projects?

// Manager class? responsible for creating projects and todos
// when switching the project that a todo is part of, it 
// accesses the designated project and removes the todo
// from that list, then appends it to the new one?


/*
DOM-interface-Func() {
    take input from webpage
    plug that into creating new todo
    that new todo is then added to the designated project

}
*/
