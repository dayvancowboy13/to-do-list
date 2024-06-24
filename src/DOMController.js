import Project from "./Project";
import ProjectMaster from "./ProjectMaster"
import * as dateFns from "date-fns";
import './style.css'

export default class DOMController {

    static initialize(){
        console.log("Starting point -- Setting things up!")
        // console.log(`Inside DOMController initialize function, 'this' is: ${this}`)

        this.#initListeners();
        // ProjectMaster.createProject('p1');
        // ProjectMaster.createProject('Web Dev');


        // still lots to do!

        // functionality for populating a list of projects when user selects "inbox"
        // or "today" or "this week" buttons
        
        // addProject function
        // includes populating the list of current projects


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
        
        const addProjectBtn = document.querySelector("#add-project-btn");
        addProjectBtn.addEventListener("click", () => {
            const originalButton = document.querySelector('#add-project-btn');
            originalButton.style.display = 'none';
            document.querySelector("#add-project-form").style.display = "block";
        });
        
        const formAddBtn = document.querySelector("#project-form-add");
        formAddBtn.addEventListener("click", () => {
            console.log("Clicked add button")
            const projectName = document.querySelector('#project_name').value;
            if (projectName.length === 0){
                alert("Cannot add blank project name!")
            } else {
                ProjectMaster.createProject(projectName);
                document.querySelector("#add-project-form").style.display = "none";
                document.querySelector('#add-project-btn').style.display = 'block';
                document.querySelector('#project_name').value = '';
                // refresh project list on page
                // THIS MIGHT HAVE BUGS LATER!
                DOMController.#addToProjectList(projectName);
            }
        });
        const formCancelBtn = document.querySelector("#project-form-cancel");
        formCancelBtn.addEventListener("click", () => {
            console.log("Clicked cancel button")
            document.querySelector('#project_name').value = '';
            document.querySelector("#add-project-form").style.display = "none";
            document.querySelector('#add-project-btn').style.display = 'block';
        });
    }

    static #addToProjectList(projectName){
        console.log("updating project list")

        const projectList = document.querySelector("#existing-projects");

        const listElem = document.createElement('li');
        listElem.classList = "list-item";
        
        const activeTasks = ProjectMaster.getProjectFromArray(projectName).activeTaskCount;
        const span1 = document.createElement('span');
        span1.classList = "project-name";
        span1.textContent = `${projectName}`;

        const span2 = document.createElement('span');
        span2.classList = "project-count";
        if(activeTasks !== 0){
            span2.textContent = `(${activeTasks})`;
        }

        listElem.addEventListener("click", function (){
            console.log("You clicked the list elem!")
            DOMController.#displayProjectTasks(this.children[0].textContent);
        });

        listElem.append(span1,span2);
        projectList.append(listElem);
    }

    static #displayProjectTasks (projectName){
        // get the project todoArray and display on the webpage
        // also should communicate which project is being displayed
        console.log("outputting project todos to web page")

        const displayContainer = document.querySelector("#todo-display")
        displayContainer.classList = `${projectName}`
        // clear the container
        while (displayContainer.hasChildNodes()) {
            displayContainer.removeChild(displayContainer.lastChild);
        }

        const todoList = ProjectMaster.getProjectTodos(projectName);
        console.log(todoList);
        for (let todo of todoList){
            let newCard = DOMController.#createTaskCard(todo);
            displayContainer.append(newCard);
        }
    }

    static #createTaskCard(todo){
        // generate the HTML to display the information of the Todo on the page
        console.log("creating new task card");
        const cardBase = document.createElement('div');
        cardBase.id = todo.title;
        cardBase.classList = "todo-card";
        
        
        const spanCheck = document.createElement("span");
        spanCheck.id = "card-check";
        spanCheck.classList = "task-card card-button";
        spanCheck.textContent = "checkbox";
        spanCheck.addEventListener("click", () => {
            console.log("Clicking the check button")
            todo.changeCompleteStatus();
            DOMController.#updateProjectsListing(document.querySelector("#todo-display").className);
        });

        const spanTitle = document.createElement("span");
        spanTitle.id = "card-title";
        spanTitle.classList = "task-card";
        spanTitle.textContent = todo.title;
        const spanDueDate = document.createElement("span");
        spanDueDate.id = "card-date";
        spanDueDate.classList = "task-card";
        spanDueDate.textContent = dateFns.format(todo.dueDate, "MMM-dd-yyyy");

        const spanEdit = document.createElement("span");
        spanEdit.id = "card-edit";
        spanEdit.classList = "task-card card-button";
        spanEdit.textContent = "edit";
        spanEdit.addEventListener("click", () =>{
            console.log("Clicking the edit button")
            // open the edit menu
        });
        const spanDelete = document.createElement("span");
        spanDelete.id = "card-delete";
        spanDelete.classList = "task-card card-button";
        spanDelete.textContent = "del";
        spanDelete.addEventListener("click", () =>{
            console.log("Clicking the del button")
            // remove the task from the project
            console.log(todo);
            let projectName = document.querySelector("#todo-display").className;
            ProjectMaster.removeFromProject(todo.title, projectName);
            DOMController.#updateProjectsListing(projectName);
            DOMController.#displayProjectTasks(projectName);
        });

        cardBase.append(spanCheck, spanTitle, spanDueDate, spanEdit, spanDelete);

        return cardBase;
    }

    static #updateProjectsListing(projectName){
        console.log('Updating project listing')
        // will be called when user adds a task or marks a task as complete/incomplete
        if (projectName === "Inbox"){
            const inboxButton = document.querySelector("#inbox");
            const activeTasks = ProjectMaster.inbox.activeTaskCount;
            if(activeTasks !== 0){
                inboxButton.children[1].textContent = `(${activeTasks})`;
            } else {
                inboxButton.children[1].textContent = '';
            }
        } else{
            const projectList = document.querySelector("#existing-projects");
            for (let child of projectList.children){
                console.log(child)
                if(projectName === child.children[0].textContent){
                    const activeTasks = ProjectMaster.getProjectFromArray(projectName).activeTaskCount;
                    console.log(ProjectMaster.getProjectFromArray(projectName));
                    if(activeTasks !== 0){
                        child.children[1].textContent = `(${activeTasks})`;
                    } else {
                        child.children[1].textContent = '';
                    }
                }
            }
        }
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
            DOMController.#updateProjectsListing(inputProjectName);
        }
        DOMController.#resetProjectSelect();
    }

    static #Inbox(){
        console.log("Inbox button pressed")
        DOMController.#displayProjectTasks("Inbox");
    }

    static #Today(){
        console.log("Today button pressed")
    }

    static #Week(){
        console.log("Week button pressed")
    }
}