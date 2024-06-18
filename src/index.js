// this is where all the modules will be pulled into and used from
import Todo from "./Todo.js"
import Project from "./Project.js"

// have a "default" project when user starts the app
const proj0 = new Project();

// projects are functionally separate lists of todos
// TODO's can only be part of one project
//      which module allows you to change projects?

//const myT = new Todo("Title", "Desc");

//console.log(myT.theTitle);

proj0.func1();
proj0.func2();
proj0.func3();