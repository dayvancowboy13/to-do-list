import Project from "./Project";
import ProjectMaster from "./ProjectMaster"

export default class DOMController {

    static initialize(){
        console.log("Starting point -- Setting things up!")

        this.#initListeners();
        ProjectMaster.createProject('p1');
        ProjectMaster.createProject('p2');
        ProjectMaster.createProject('p3');
        ProjectMaster.createProject('Doody');

        // still lots to do!
        // add functionality so when user hits create task, it actually passes
        // to the ProjectMaster function and adds the task to the project

        // functionality for populating a list of projects when user selects "inbox"
        // or "today" or "this week" buttons
        // addProject function


    }

    static #initListeners(){
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
    }

    static #displayProject(){

    }

    static #displayNewTaskDialog (){
        console.log("displaying task dialog")
        DOMController.#populateProjectSelect();
        const dialog = document.querySelector("#add-task-dialog")
        dialog.showModal();
        const closeButton = document.querySelector("#dialog-close")
        closeButton.addEventListener("click", () => dialog.close());
        const submitButton = document.querySelector("#dialog-submit-new-task");
        submitButton.addEventListener("click", ()=>{
            DOMController.#submitNewTask;
            dialog.close();
        });
    }

    static #populateProjectSelect(){
        let projects = ProjectMaster.projectArray;
        let select = document.querySelector("#dialog-project")
        for (let p of projects){
            let option = document.createElement('option');
            option.value = `${p.name}`;
            option.textContent = p.name;
            select.append(option);
        }
    }

    static #submitNewTask(){
        console.log("Submitting new task...")
    }

    static #Inbox(){
        console.log("Inbox button pressed")
    }

    static #Today(){
        console.log("Today button pressed")
    }

    static #Week(){
        console.log("Week button pressed")
    }

    static firstFunc (){
        console.log("Just testing this new class!")

        ProjectMaster.getTodaysTodos();
        ProjectMaster.addToProject("Inbox", "t1", "desc", new Date(), "low")
        ProjectMaster.addToProject("Inbox", "t2", "desc", new Date(2024,5,22), "high")
        ProjectMaster.addToProject("Inbox", "t3", "desc", new Date(2024,5,30), "low")
        ProjectMaster.addToProject("Inbox", "t4", "desc", new Date(), "low")
        ProjectMaster.addToProject("Inbox", "t5", "desc", new Date(2024,5,27), "low")
        ProjectMaster.addToProject("Inbox", "t6", "desc", new Date(2024,5,23), "low")
        console.log(ProjectMaster.getProjectTodos("Inbox"))
    }
}