// this is where all the modules will be pulled into and used from
import Todo from "./Todo.js"
import Project from "./Project.js"

class Manager {
    static createTodo(){
        console.log("creating todo obj");
    }
    static createProject(){
        console.log("creating project obj");
    }
}

const BigCahuna = new Manager();

Manager.createProject();

// have a "default" project when user starts the app
const proj0 = new Project();

// projects are functionally separate lists of todos
// TODO's can only be part of one project
//      which module allows you to change projects?

// Manager class? responsible for creating projects and todos
// when switching the project that a todo is part of, it 
// accesses the designated project and removes the todo
// from that list, then appends it to the new one?

const myT = new Todo("Title", "Desc");
const t2 = new Todo("t1", "d2");

//console.log(myT.theTitle);

proj0.addTodo(myT);
proj0.addTodo(t2);
