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
        console.log(`addToInbox function called`);
        this.inbox.addTodo(this.createTodo(title, description));
    }

    static removeFromProject(todoTitle, projectName){
        console.log(`Attempting to remove todo "${todoTitle}"`)
        if(projectName === "Inbox"){
            if(this.inbox.removeTodo(todoTitle)) return true;
            else return false;
        } else {
            for (let project of this.projectArray){
                if(project.projectName === projectName){
                    if(project.removeTodo(todoTitle)) return true;
                    else return false;
                }
            }
        }
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
        console.log("Number of items in inbox " + this.inbox.length)
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

// PuppetMaster.createProject("first proj", "A great description!");
PuppetMaster.inboxTodos()


PuppetMaster.addToInbox("t1", "desc!");
PuppetMaster.inbox.printTodos()
PuppetMaster.inboxTodos()
console.log("---------------")
PuppetMaster.addToInbox("t2", "desc!");
PuppetMaster.inbox.printTodos()
console.log("---------------")
console.log(PuppetMaster.removeFromProject('t4', "Inbox"))
PuppetMaster.inbox.printTodos()

// verify functionality with non-Inbox projects


/*
DOM-interface-Func() {
    take input from webpage
    plug that into creating new todo
    that new todo is then added to the designated project

}
*/
