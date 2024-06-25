import Project from "./Project";
import ProjectMaster from "./ProjectMaster"
import * as dateFns from "date-fns";
import './style.css'

export default class DOMController {

    static initialize(){
        console.log("Starting point -- Setting things up!")

        this.#initListeners();

        // still lots to do!

        // functionality for populating a list of projects when user selects "inbox"
        // or "today" or "this week" buttons
    }

    static #initListeners(){
        let buttonIDs = [
            {id:"add-task", func: this.#displayNewTaskDialog},
            {id:"inbox", func: this.#Inbox},
            {id:"todo-today", func: this.#Today},
            {id:"todo-week", func: this.#Week},
            {id:"add-project-btn", func: this.#AddProject}
        ]

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
        
        const formAddBtn = document.querySelector("#project-form-add");
        formAddBtn.addEventListener("click", () => {
            console.log("Clicked add button")
            const projectName = document.querySelector('#project_name').value;
            if (projectName.length === 0){
                alert("Cannot add blank project name!")
            } else if (!ProjectMaster.checkProjectNameIsValid(projectName)) {
                alert("That project name is already taken!");
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
            DOMController.#displayProjectTasks(this.children[0].textContent, null);
        });

        listElem.append(span1,span2);
        projectList.append(listElem);
    }

    static #displayProjectTasks (projectName, todoArray, mode="regular"){
        // get the project todoArray and display on the webpage
        // also should communicate which project is being displayed
        console.log("outputting project todos to web page")

        const displayContainer = document.querySelector("#todo-display")
        displayContainer.classList = `${projectName}`
        // clear the container
        while (displayContainer.hasChildNodes()) {
            displayContainer.removeChild(displayContainer.lastChild);
        }

        let todoList;
        if (mode === "regular") {
            todoList = ProjectMaster.getProjectTodos(projectName);
            for (let todo of todoList){
                let newCard = DOMController.#createTaskCard(todo);
                displayContainer.append(newCard);
            }
        } else if (mode === "today") {
            todoList = todoArray;
            for (let todo of todoList){
                let newCard = DOMController.#createTaskCard(todo, mode);
                displayContainer.append(newCard);
            }
        } else if (mode === "week") {
            todoList = todoArray;
            for (let todo of todoList){
                let newCard = DOMController.#createTaskCard(todo, mode);
                displayContainer.append(newCard);
            }
        }
        
        console.log(todoList);
        
    }

    static #createTaskCard(todo, mode="regular"){
        // generate the HTML to display the information of the Todo on the page
        console.log(`creating new task card in ${mode} mode`);
        const cardBase = document.createElement('div');
        cardBase.classList = "todo-card";
        
        if (mode === "regular"){
            cardBase.id = todo.title;
            if (todo.isComplete) {
                cardBase.classList += " todo-inactive";
            } else {
                cardBase.classList = "todo-card";
            }

            const spanCheck = document.createElement("span");
            spanCheck.id = "card-check";
            spanCheck.classList = "task-card card-button";
            spanCheck.textContent = "checkbox";
            spanCheck.addEventListener("click", () => {
                console.log("Clicking the check button")
                todo.changeCompleteStatus();
                if (todo.isComplete) {
                    cardBase.classList += " todo-inactive";
                } else {
                    cardBase.classList = "todo-card";
                }
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
                DOMController.#displayProjectTasks(projectName, null);
            });

            cardBase.append(spanCheck, spanTitle, spanDueDate, spanEdit, spanDelete);
        } else if (mode === "today"){
            cardBase.id = todo.todo.title;
            if(todo.todo.isComplete) {
                cardBase.classList += " todo-inactive"
            }

            const spanTitle = document.createElement("span");
            spanTitle.id = "card-title";
            spanTitle.classList = "task-card";
            spanTitle.textContent = todo.todo.title;
            const spanSource = document.createElement("span");
            spanSource.id = "card-source";
            spanSource.classList = "task-card";
            spanSource.textContent = `From: ${todo.srcProject}`;

            cardBase.append(spanTitle, spanSource);
        } else if (mode === "week"){
            cardBase.id = todo.todo.title;
            if(todo.todo.isComplete) {
                cardBase.classList += " todo-inactive"
            }

            const spanTitle = document.createElement("span");
            spanTitle.id = "card-title";
            spanTitle.classList = "task-card";
            spanTitle.textContent = todo.todo.title;
            const spanDueDate = document.createElement("span");
            spanDueDate.id = "card-date";
            spanDueDate.classList = "task-card";
            spanDueDate.textContent = dateFns.format(todo.todo.dueDate, "MMM-dd-yyyy");
            const spanSource = document.createElement("span");
            spanSource.id = "card-source";
            spanSource.classList = "task-card";
            spanSource.textContent = `From: ${todo.srcProject}`;

            cardBase.append(spanTitle, spanDueDate, spanSource);
        }

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
        DOMController.#displayProjectTasks("Inbox", null);
    }

    static #Today(){
        console.log("Today button pressed");
        const todayTodos = ProjectMaster.getTodaysTodos();
        DOMController.#displayProjectTasks(null, todayTodos, "today");

    }

    static #Week(){
        console.log("Week button pressed")
        const weekTodos = ProjectMaster.getWeeksTodos();
        DOMController.#displayProjectTasks(null, weekTodos, "week");
    }

    static #AddProject(){
        console.log("Add project button pressed");
        const originalButton = document.querySelector('#add-project-btn');
        originalButton.style.display = 'none';
        document.querySelector("#add-project-form").style.display = "block";
    }
}