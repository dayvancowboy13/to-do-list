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

    static addToProject(projectName, title, description) {
        console.log(`Adding to project with name ${projectName}`);
        for (let project of this.projectArray){
            if(project.projectName === projectName){
                project.addTodo(this.createTodo(title, description));
                console.log('successfully added todo')
                break;
            }
        }
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

    static changeTodoProject(todo, oldProjectName, newProjectName){
        // does the order matter? remove todo from oldProject
        // add todo to newProject
        // get reference to oldProject from projectArray
        console.log("Running changeTodoProject");

        let oldProject = this.getProjectFromArray(oldProjectName);
        let newProject = this.getProjectFromArray(newProjectName);

        
        for (let projectTodo of oldProject){
            // go through old project and find the todo, remove it
            if (todo.name === projectTodo.name){
                oldProject.removeTodo(projectTodo);
            }
        }
    }

    static getProjectFromArray(projectName){
        console.log("running getProjectFromArray");
        for (let project of this.projectArray){
            if (project.projectName === projectName){
                return project;
            }
        }

        return undefined;
    }

    static deleteTodo(){
        // just remove the todo from its project's todoArray?
    }

    static getTodoDetails(){
        // DOM class will use this to display more details of a todo
    }

    // the DOM class will have a function to style the list returned
    static getProjectTodos(projectName){
        console.log("calling getProjectTodos")
        if(projectName === "Inbox"){
            return this.inbox.allTodos;
        } else {
            // find projectName in projectArray
            let targetProject;
            for (let project of this.projectArray){
                if (project.projectName === projectName){
                    targetProject = project;
                    return targetProject.allTodos;
                }
            }
            if (targetProject === undefined){
                console.log("something went wrong in getProjectTodos");
                return undefined;
            }
        }
    }
}

// PuppetMaster.addToInbox("Finish work", "you gotta!");
// PuppetMaster.inboxTodos()
// PuppetMaster.addToInbox("more stuff", "do more!");

PuppetMaster.createProject("new project");
console.log(PuppetMaster.getProjectFromArray("new project"));
PuppetMaster.createProject("best project");
console.log(PuppetMaster.getProjectFromArray("best project"));
// PuppetMaster.addToProject("new project", "new todo", "for new project")
// PuppetMaster.addToProject("fake project","new todo", "for new project")
// console.log(PuppetMaster.numberOfProjects());

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
