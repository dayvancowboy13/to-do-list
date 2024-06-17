// this is where all the modules will be pulled into and used from
import Todo from "./Todo.js"
import Project from "./Project.js"

const myT = new Todo("Title", "Desc");

console.log(myT.theTitle);

const proj = new Project('Title.');
proj.myFunc();