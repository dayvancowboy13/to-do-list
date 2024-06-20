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

    static addToInbox(title, description){
        console.log("adding todo to inbox");
        this.inbox.addTodo(this.createTodo(title, description));
    }

    static addToProject(title, description) {
        console.log("adding todo to project");
        this.projectArray[0].addTodo(this.createTodo(title, description));
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
        this.projectArray.push(project);
    }

    static changeTodoProject(todo){
        // code to switch a Todo from one project to another
    }

    // the DOM class will have a function to style the list returned
    static getProjectTodos(projectName){
        console.log("calling getProjectTodos")
        if(projectName === "Inbox"){
            return this.inbox.allTodos;
        } else {
            // find projectName in projectArray
            let targetProject;
            console.log("Starting search through projectArray")
            for (let project in this.projectArray){
                console.log(typeof project);
                if (project.projectName === projectName){
                    targetProject = project;
                    return targetProject.allTodos;
                }
            }
            if (targetProject === undefined){
                console.log("something went wrong");
                return 20;
            }
        }
    }
}

PuppetMaster.addToInbox("Finish work", "you gotta!");
PuppetMaster.inboxTodos()
PuppetMaster.addToInbox("more stuff", "do more!");

PuppetMaster.createProject("new project");
console.log(PuppetMaster.numberOfProjects());

PuppetMaster.addToInbox("last chance!", "uhhh");
PuppetMaster.addToInbox("wow!", "asdfasd");
console.log(PuppetMaster.getProjectTodos("Inbox"));
console.log(PuppetMaster.getProjectTodos("new project"));


/*
DOM-interface-Func() {
    take input from webpage
    plug that into creating new todo
    that new todo is then added to the designated project

}
*/
