import Project from "./Project";
import ProjectMaster from "./ProjectMaster"
import * as dateFns from "date-fns";

export default class DOMController {

    static initialize(){
        console.log("Starting point -- Setting things up!")
        // console.log(`Inside DOMController initialize function, 'this' is: ${this}`)

        this.#initListeners();
        ProjectMaster.createProject('p1');
        ProjectMaster.createProject('Web Dev');


        // still lots to do!
        // add functionality so when user hits create task, it actually passes
        // to the ProjectMaster function and adds the task to the project

        // functionality for populating a list of projects when user selects "inbox"
        // or "today" or "this week" buttons
        // addProject function


    }

    static #initListeners(){
        // console.log(`Inside DOMController initListiners function, 'this' is: ${this}`)
        let buttonIDs = [
            {id:"add-task", func: this.#displayNewTaskDialog},
            {id:"inbox", func: this.#Inbox},
            {id:"todo-today", func: this.#Today},
            {id:"todo-week", func: this.#Week}
        ]

        // What happens for each one:
        // add task:
        // bring up the dialog for user to enter task info
        // within that dialog, when you hit "submit", it will add that task to
        // whatever project
        for (let button of buttonIDs){
            let temp = document.querySelector(`#${button.id}`);
            temp.addEventListener('click', button.func)
        }
        const dialog = document.querySelector("#add-task-dialog");
        const closeButton = document.querySelector("#dialog-close");
        closeButton.addEventListener("click", () => {
            DOMController.#resetProjectSelect();
            dialog.close();
        });
        const submitButton = document.querySelector("#dialog-submit-new-task");
        submitButton.addEventListener("click", ()=>{
            DOMController.#submitNewTask();
            dialog.close();
        });
    }

    static #displayProject(){

    }

    static #displayNewTaskDialog (){
        DOMController.#populateProjectSelect();
        const dialog = document.querySelector("#add-task-dialog")
        dialog.showModal();
        
    }

    static #populateProjectSelect(){
        let projects = ProjectMaster.projectArray;
        let select = document.querySelector("#dialog_project");
        for (let p of projects){
            let option = document.createElement('option');
            option.value = `${p.name}`;
            option.textContent = p.name;
            select.append(option);
        }
    }

    static #resetProjectSelect(){
        let select = document.querySelector("#dialog_project");
        while (select.childElementCount !== 1){
            select.removeChild(select.lastChild);
        }
    }

    static #submitNewTask(){
        const inputTaskTitle = document.querySelector("#task_title").value;
        document.querySelector("#task_title").value = "";
        const inputDescription = document.querySelector("#description").value;
        document.querySelector("#description").value = "";
        const inputDueDate = new Date(document.querySelector("#due_date").value.replace(/-/g, '\/'));
        document.querySelector("#due_date").value = "";
        const inputPriority = document.querySelector("#priority").value;
        const inputProjectName = document.querySelector("#dialog_project").value;

        if(inputTaskTitle === '' || inputDescription === '' || inputDueDate === ''){
            alert("Please fill all input fields!")
        } else {
            ProjectMaster.addToProject(inputProjectName, inputTaskTitle, inputDescription, inputDueDate, inputPriority)
        }
        DOMController.#resetProjectSelect();
    }

    static #Inbox(){
        console.log("Inbox button pressed")
        let projectName = prompt("Which project?", "Inbox")
        console.log(ProjectMaster.getProjectTodos(projectName))
    }

    static #Today(){
        console.log("Today button pressed")
    }

    static #Week(){
        console.log("Week button pressed")
    }
}