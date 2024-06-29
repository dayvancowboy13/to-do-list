import Todo from "./Todo.js"
import Project from "./Project.js"
import { format, isThisWeek} from "date-fns";

export default class ProjectMaster {
    static projectArray = new Array();
    static inbox = new Project("Inbox");

    static {
        console.log("ProjectMaster class up and running");

        console.log("Creating initial localStorage object");
        if (localStorage.length === 0) {
            localStorage.setItem("Inbox", "");
        } else {
            // parse Inbox
            if(localStorage["Inbox"] !== ""){
                let inboxStorage = JSON.parse(localStorage["Inbox"]);
                if (inboxStorage.length !== 0){
                    for (let todo of inboxStorage){
                        // console.log(todo);
                        this.addToProject("Inbox", todo.title, todo.description, todo.dueDate, todo.priority);
                    }

                }   
            }
            
            if (localStorage.length > 1){
                console.log("adding projects from storage")
                let projectKeys = Object.keys(localStorage);
                
                // remove the first key (inbox)
                const inboxIndex = projectKeys.indexOf("Inbox");
                projectKeys.splice(inboxIndex, 1);
                for (let key of projectKeys) {
                    this.createProject(key);
                    try {
                        let projStorage = JSON.parse(localStorage[key]);                       
                        if (projStorage.length !== 0){
                            for (let todo of projStorage){
                                this.addToProject(key, todo.title, todo.description, todo.dueDate, todo.priority);
                            }
            
                        }
                    } catch (error) {
                        console.log("The project was empty");
                    }
                }
            }
        }
    }
    

    get projectArray(){
        return this.projectArray;
    }

    get inbox() {
        return this.inbox;
    }
    
    get numberOfProjects(){
        return this.projectArray.length;
    }

    static isProjectEmpty(projectName){
        if(this.getProjectFromArray(projectName).length === 0){
            return true;
        } else return false;
    }
    
    static checkProjectNameIsValid(projectName){
        console.log(
            "Checking if project name already in use"
        );
        for (let project of this.projectArray){
            if (project.projectName === projectName){
                return false;
            }
        }
        return true;
    }
    
    static createTodo(name, description, dueDate, priority){
        let todo = new Todo(name, description, dueDate, priority);
        return todo;
    }

    static removeFromProject(todoTitle, projectName){
        console.log(`Attempting to remove todo "${todoTitle}"`)
        if(projectName === "Inbox"){
            if(this.inbox.removeTodo(todoTitle)) {
                localStorage.setItem(projectName, JSON.stringify(this.inbox.allTodos));
                return true;
            }
            else return false;
        } else {
            for (let project of this.projectArray){
                if(project.projectName === projectName){
                    if(project.removeTodo(todoTitle)) {
                        localStorage.setItem(projectName, JSON.stringify(this.getProjectTodos(projectName)));
                        return true;
                    }
                    else return false;
                }
            }
        }
    }

    static addToProject(projectName, title, description, dueDate, priority) {
        console.log(`Attempting to add todo to project with name ${projectName}`);
        if(projectName === "Inbox") {
            if(!this.inbox.addTodo(this.createTodo(title, description, dueDate, priority))){
                this.todoNotAdded();
                return false;
            } else {
                localStorage.setItem(projectName, JSON.stringify(this.inbox.allTodos));
                return true;
            }
        } else {
            for (let project of this.projectArray){
                if(project.projectName === projectName){
                    if(!project.addTodo(this.createTodo(title, description, dueDate, priority))){
                        this.todoNotAdded();
                        return false;
                    }
                    else {
                        localStorage.setItem(projectName, JSON.stringify(this.getProjectTodos(projectName)));
                    }
                    console.log('successfully added todo')
                    return true;
                }
            }
        }
    }

    static todoNotAdded(){
        alert("The project already has a todo with that title. Another could not be added")
    }

    static createProject(name){
        let project = new Project(name);
        this.projectArray.push(project);
        if (!Object.keys(localStorage).includes(name)) {
            localStorage.setItem(name, "");
        }
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

            if(this.addToProject(newProjectName, tempTodo.title, tempTodo.description,
                tempTodo.dueDate, tempTodo.priority)){
                this.removeFromProject(tempTodo.title, oldProject.name);
            }
        } else{
            console.log("couldnt find a todo with that name")
        }    
    }

    static getProjectFromArray(projectName){
        for (let project of this.projectArray){
            if (project.projectName === projectName){
                return project;
            }
        }

        return undefined;
    }

    static getTodoDetails(projectName, todoTitle){
        console.log(`Getting details for ${todoTitle} from ${projectName}`)
        if(projectName === "Inbox"){
            return this.inbox.findTodo(todoTitle);
        } else {
            let targetProject;
            for (let project of this.projectArray){
                if (project.projectName === projectName){
                    targetProject = project;
                    return targetProject.findTodo(todoTitle);
                }
            }
            if (targetProject === undefined){
                console.log("something went wrong in getTodoDetails");
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
        const today = format(new Date(), "MM-dd-yyyy");
        let todayArray = new Array();
        let i = 0;

        for (let todo of this.inbox.todoArray){
            if (format(todo.dueDate, "MM-dd-yyyy") === today){
                todayArray.push({todo, srcProject: "Inbox"});
            }
        }
        for (let project of this.projectArray){
            for (let todo of project.todoArray){
                if (format(todo.dueDate, "MM-dd-yyyy") === today){
                    todayArray.push({todo, srcProject: project.name});
                }
            }
        }

        return todayArray;
    }

    static getWeeksTodos(){
        let thisWeekArray = new Array();

        for (let todo of this.inbox.todoArray){
            if (isThisWeek(todo.dueDate)){
                thisWeekArray.push({todo, srcProject: "Inbox"});
            }
        }
        for (let project of this.projectArray){
            for (let todo of project.todoArray){
                if (isThisWeek(todo.dueDate)){
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

    static editTodo(todoTitle, projectName, newTitle, desc, 
        dueDate, priority){
        if(projectName === "Inbox"){
            this.inbox.editTodo(todoTitle, newTitle, desc, 
                dueDate, priority);
        }
        else {
            this.getProjectFromArray(projectName).editTodo(todoTitle, 
                newTitle, desc, dueDate, priority);
        }
    }

    static removeProject(projectName){
        let i = 0;
        for (let project of this.projectArray){
            if(project.name === projectName){
                this.projectArray.splice(i, 1);
                localStorage.removeItem(projectName);
                return true;
            } else i++;
        }
        return false;
    }
}