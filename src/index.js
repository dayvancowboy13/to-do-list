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
        if(projectName === "Inbox") {
            if(!this.inbox.addTodo(this.createTodo(title, description))){
                this.todoNotAdded();
            }
        } else {
            for (let project of this.projectArray){
                if(project.projectName === projectName){
                    if(!project.addTodo(this.createTodo(title, description))){
                        this.todoNotAdded();
                        break;
                    }
                    console.log('successfully added todo')
                    break;
                }
            }
        }
    }

    static todoNotAdded(){
        alert("The project already has a todo with that title. Another could not be added")
    }

    static inboxTodos(){
        console.log("Number of items in inbox " + this.inbox.length)
    }

    static quickCheck(title){
        return this.inbox.checkTitleIsValid(title)
    }

    static numberOfProjects(){
        return this.projectArray.length;
    }

    static createProject(name){
        console.log("creating project object");
        let project = new Project(name);
        this.projectArray.push(project);
    }

    static changeTodoProject(todoTitle, oldProjectName, newProjectName){
        console.log("Running changeTodoProject");

        let oldProject;
        if (oldProjectName === "Inbox"){
            oldProject = this.inbox;
        } else {
            oldProject = this.getProjectFromArray(oldProjectName);
        }
        let tempTodo = oldProject.findTodo(todoTitle);

        if(tempTodo !== undefined) {
            console.log(this.removeFromProject(tempTodo.title, oldProject.name))
            this.addToProject(newProjectName, tempTodo.title, tempTodo.description)
        }   else{
            console.log("couldnt find a todo with that name")
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

PuppetMaster.addToProject("Inbox", "t1", "desc");
// PuppetMaster.addToProject("Inbox", "t1", "desc");

PuppetMaster.createProject("p1");
PuppetMaster.addToProject("p1", "t2", "desc");
PuppetMaster.changeTodoProject("t1","Inbox", "p1")





/*
DOM-interface-Func() {
    take input from webpage
    plug that into creating new todo
    that new todo is then added to the designated project

}
*/
