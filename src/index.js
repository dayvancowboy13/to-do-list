import Todo from "./Todo.js"
import Project from "./Project.js"
import * as dateFns from "date-fns";

class PuppetMaster {
    static projectArray = new Array();
    static inbox = new Project("Inbox");
    

    static createTodo(name, description, dueDate, priority){
        console.log("creating todo obj");
        let todo = new Todo(name, description, dueDate, priority);
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

    static addToProject(projectName, title, description, dueDate, priority) {
        console.log(`Adding to project with name ${projectName}`);
        if(projectName === "Inbox") {
            if(!this.inbox.addTodo(this.createTodo(title, description, dueDate, priority))){
                this.todoNotAdded();
            }
        } else {
            for (let project of this.projectArray){
                if(project.projectName === projectName){
                    if(!project.addTodo(this.createTodo(title, description, dueDate, priority))){
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
            this.addToProject(newProjectName, tempTodo.title, tempTodo.description,
                tempTodo.dueDate, tempTodo.priority)
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

    static getTodoDetails(projectName, todoTitle){
        // DOM class will use this to display more details of a todo
        console.log(`Getting details for ${todoTitle} from ${projectName}`)
        if(projectName === "Inbox"){
            return this.inbox.findTodo(todoTitle);
        } else {
            // find projectName in projectArray
            let targetProject;
            for (let project of this.projectArray){
                if (project.projectName === projectName){
                    targetProject = project;
                    return targetProject.findTodo(todoTitle);
                }
            }
            if (targetProject === undefined){
                console.log("something went wrong in getProjectTodos");
                return undefined;
            }
        }
    }

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

    static getTodaysTodos(){
        // maybe refactor to indicate which project a todo is from?
        const today = dateFns.format(new Date(), "MM-dd-yyyy");
        let todayArray = new Array();
        let i = 0;

        for (let todo of this.inbox.todoArray){
            if (dateFns.format(todo.dueDate, "MM-dd-yyyy") === today){
                todayArray.push({todo, srcProject: "Inbox"});
            }
        }
        for (let project of this.projectArray){
            for (let todo of project.todoArray){
                console.log(dateFns.format(todo.dueDate, "MM-dd-yyyy"))
                if (dateFns.format(todo.dueDate, "MM-dd-yyyy") === today){
                    todayArray.push({todo, srcProject: project.name});
                }
            }
        }

        return todayArray;
    }

    static getWeeksTodos(){
        let thisWeekArray = new Array();

        for (let todo of this.inbox.todoArray){
            if (dateFns.isThisWeek(todo.dueDate)){
                thisWeekArray.push({todo, srcProject: "Inbox"});
            }
        }
        for (let project of this.projectArray){
            for (let todo of project.todoArray){
                if (dateFns.isThisWeek(todo.dueDate)){
                    thisWeekArray.push({todo, srcProject: project.name});
                }
            }
        }
        return thisWeekArray;
    }

    static getAllTodos(){
        let allTodos = new Array();

        for (let todo of this.inbox.todoArray){
            allTodos.push({todo, srcProject: "Inbox"});
        }
        for (let project of this.projectArray){
            for (let todo of project.todoArray){
                allTodos.push({todo, srcProject: project.name});
            }
        }

        return allTodos;
    }

    static editTodo(todoTitle, projectName, edits){
        if(projectName === "Inbox"){
            this.inbox.editTodo(todoTitle, edits.newTitle, edits.desc, 
                edits.dueDate, edits.priority);
        }
        else {
            this.getProjectFromArray(projectName).editTodo(todoTitle, 
                edits.newTitle, edits.desc, edits.dueDate, edits.priority);
        }
    }
}

// PuppetMaster.getTodaysTodos();
PuppetMaster.addToProject("Inbox", "t1", "desc", new Date(), "low")
PuppetMaster.addToProject("Inbox", "t2", "desc", new Date(2024,5,22), "high")
PuppetMaster.addToProject("Inbox", "t3", "desc", new Date(2024,5,30), "low")
PuppetMaster.addToProject("Inbox", "t4", "desc", new Date(), "low")
PuppetMaster.addToProject("Inbox", "t5", "desc", new Date(2024,5,27), "low")
PuppetMaster.addToProject("Inbox", "t6", "desc", new Date(2024,5,23), "low")
console.log(PuppetMaster.getProjectTodos("Inbox"))
// let edit = {
//     newTitle: "Christmas!",
//     desc: "Tremendous",
//     dueDate: new Date(2024, 11, 25),
//     priority: "high"
// }



PuppetMaster.createProject("p1");
PuppetMaster.addToProject("p1", "t1", "desc", new Date(), "low")
PuppetMaster.addToProject("p1", "t2", "desc", new Date(), "high")
PuppetMaster.addToProject("p1", "t3", "desc", new Date(2024,5,30), "low")
PuppetMaster.addToProject("p1", "t4", "desc", new Date(2024,8,2), "low")
PuppetMaster.addToProject("p1", "t5", "desc", new Date(), "low")
PuppetMaster.addToProject("p1", "t6", "desc", new Date(2024,8,2), "low")

PuppetMaster.createProject("p2");
PuppetMaster.addToProject("p2", "t1", "desc", new Date(), "low")
PuppetMaster.addToProject("p2", "t2", "desc", new Date(), "high")
PuppetMaster.addToProject("p2", "t3", "desc", new Date(2024,5,30), "low")
PuppetMaster.addToProject("p2", "t4", "desc", new Date(2024,8,2), "low")


// console.log(PuppetMaster.getProjectTodos("p1"))

console.log(PuppetMaster.getAllTodos());


// Probably start working on DOM class next time





/*
DOM-interface-Func() {
    take input from webpage
    plug that into creating new todo
    that new todo is then added to the designated project

}
*/
