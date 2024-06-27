import Project from "./Project";
import ProjectMaster from "./ProjectMaster"
import { format } from "date-fns";
import './style.css'
import DelIcon from './images/del.svg'
import EditIcon from './images/edit.svg'
import DetailsIcon from './images/details.svg'

export default class DOMController {

    //initialization block -- set up the button listeners
    static {
        console.log("DOMController started; initialization running.");

        const svg1 = new Image();
        svg1 = DelIcon;
    
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
            DOMController.#resetProjectSelect("#project-select-create");
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
        listElem.id = projectName;
        
        const activeTasks = ProjectMaster.getProjectFromArray(projectName).activeTaskCount;
        const spanProjectName = document.createElement('span');
        spanProjectName.classList = "project-name";
        spanProjectName.textContent = `${projectName}`;
        spanProjectName.onclick = () => {
            DOMController.#displayProjectTasks(spanProjectName.textContent, null);
        };

        const spanProjectCount = document.createElement('span');
        spanProjectCount.classList = "project-count";
        if(activeTasks !== 0){
            spanProjectCount.textContent = `(${activeTasks})`;
        }

        const btnProjectDelete = document.createElement('button');
        btnProjectDelete.classList = "project-delete";
        btnProjectDelete.textContent = "del";
        btnProjectDelete.onclick = () => {
            console.log("Removing project from listing");
            if (ProjectMaster.isProjectEmpty(projectName)){
                ProjectMaster.removeProject(projectName);
                for (let projectListing of projectList.children){
                    if(projectListing.id === projectName){
                        console.log("found and removing project element")
                        projectList.removeChild(projectListing);
                    }
                }

            } else {
                alert("Project is not empty!");
            }
        }

        listElem.append(spanProjectName,spanProjectCount, btnProjectDelete);
        projectList.append(listElem);
    }

    static #displayProjectTasks (projectName, todoArray, mode="regular"){
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
    }

    static #createTaskCard(todo, mode="regular"){
        // generate the HTML to display the information of the Todo on the page
        console.log(`creating new task card in ${mode} mode`);
        const cardBase = document.createElement('div');
        cardBase.classList = "todo-card";
        cardBase.id = todo.title;
        if (todo.isComplete) {
            cardBase.classList += " todo-inactive";
        } else {
            cardBase.classList = "todo-card";
        }
        const spanTitle = document.createElement("span");
        spanTitle.id = "card-title";
        spanTitle.classList = "task-card";

        const spanDueDate = document.createElement("span");
        spanDueDate.id = "card-date";
        spanDueDate.classList = "task-card";

        const spanPriority = document.createElement('span');
        spanPriority.id = "card-priority";
        spanTitle.classList = "task-card";
        
        if (mode === "regular"){

            const checkButton = document.createElement("input");
            checkButton.type = 'checkbox';
            checkButton.id = "card-check";
            checkButton.classList = "task-card card-button";
            if (todo.isComplete){
                checkButton.checked = "checked";
            }
            checkButton.onclick = () => {
                console.log("Clicking the check button")
                todo.changeCompleteStatus();
                if (todo.isComplete) {
                    cardBase.classList += " todo-inactive";
                } else {
                    cardBase.classList = "todo-card";
                }
                DOMController.#updateProjectsListing(document.querySelector("#todo-display").className);
            }
            //checkButton.addEventListener("click", () => { });

            spanTitle.textContent = todo.title;
            spanDueDate.textContent = format(todo.dueDate, "MMM-dd-yyyy");
            spanPriority.textContent = `Priority: ${todo.priority.toUpperCase()}`;

            const spanExpand = document.createElement('span');
            spanExpand.id = "card-details";
            spanExpand.classList = "task-card card-button"
            spanExpand.textContent = "Details";
            spanExpand.onclick = () => this.#renderDetails(todo.title, todo.description, todo.dueDate, todo.priority);

            const spanEdit = document.createElement("span");
            spanEdit.id = "card-edit";
            spanEdit.classList = "task-card card-button";
            spanEdit.textContent = "edit";
            spanEdit.addEventListener("click", () =>{
                console.log("Clicking the edit button")
                DOMController.#Edit(todo);
            });
            const spanDelete = document.createElement("span");
            spanDelete.id = "card-delete";
            spanDelete.classList = "task-card card-button";
            spanDelete.textContent = "del";
            spanDelete.addEventListener("click", () =>{
                console.log("Clicking the del button")
                let projectName = document.querySelector("#todo-display").className;
                ProjectMaster.removeFromProject(todo.title, projectName);
                DOMController.#updateProjectsListing(projectName);
                DOMController.#displayProjectTasks(projectName, null);
            });

            cardBase.append(checkButton, spanTitle, spanDueDate, spanPriority, spanExpand, spanEdit, spanDelete);
        } else if (mode === "today"){

            spanTitle.textContent = todo.todo.title;
            const spanSource = document.createElement("span");
            spanSource.id = "card-source";
            spanSource.classList = "task-card";
            spanSource.textContent = `From: ${todo.srcProject}`;
            spanPriority.textContent = `Priority: ${todo.todo.priority.toUpperCase()}`;

            cardBase.append(spanTitle, spanPriority, spanSource);
        } else if (mode === "week"){

            spanTitle.textContent = todo.todo.title;
            spanDueDate.textContent = format(todo.todo.dueDate, "MMM-dd-yyyy");
            const spanSource = document.createElement("span");
            spanSource.id = "card-source";
            spanSource.classList = "task-card";
            spanSource.textContent = `From: ${todo.srcProject}`;

            spanPriority.textContent = `Priority: ${todo.todo.priority.toUpperCase}`;

            cardBase.append(spanTitle, spanDueDate, spanPriority, spanSource);
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
                inboxButton.children[1].textContent = `${activeTasks}`;
            } else {
                inboxButton.children[1].textContent = '';
            }
        } else{
            const projectList = document.querySelector("#existing-projects");
            for (let child of projectList.children){
                if(projectName === child.children[0].textContent){
                    const activeTasks = ProjectMaster.getProjectFromArray(projectName).activeTaskCount;
                    if(activeTasks !== 0){
                        child.children[1].textContent = `${activeTasks}`;
                    } else {
                        child.children[1].textContent = '';
                    }
                }
            }
        }
    }

    static #displayNewTaskDialog (){
        DOMController.#populateProjectSelect("#project-select-create");
        const dialog = document.querySelector("#add-task-dialog")
        dialog.showModal();
        
    }

    static #populateProjectSelect(elementID){
        let projects = ProjectMaster.projectArray;
        let select = document.querySelector(elementID);
        for (let p of projects){
            let option = document.createElement('option');
            option.value = `${p.name}`;
            option.textContent = p.name;
            select.append(option);
        }
    }

    static #resetProjectSelect(elementID){
        let select = document.querySelector(elementID);
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
        const inputProjectName = document.querySelector("#project-select-create").value;

        if(inputTaskTitle === '' || inputDescription === '' || inputDueDate === ''){
            alert("Please fill all input fields!")
        } else {
            ProjectMaster.addToProject(inputProjectName, inputTaskTitle, inputDescription, inputDueDate, inputPriority)
            DOMController.#updateProjectsListing(inputProjectName);
        }
        DOMController.#resetProjectSelect("#project-select-create");
        const currentProject = document.querySelector("#todo-display").className;
        //DOMController.#displayProjectTasks(currentProject, null);
    }

    static #renderDetails (title, desc, dueDate, priority){
        console.log("rendering the details")
        const detailsDialog = document.querySelector("#details-dialog");
        // const detailsBody = document.querySelector("#details-body");
        const detailsCloseBtn = document.querySelector("#details-dialog-close");
        detailsCloseBtn.onclick = () => {detailsDialog.close()};
        
        detailsDialog.showModal();
        document.querySelector("#details-title").textContent = title;
        document.querySelector('#details-desc').textContent = desc;
        document.querySelector('#details-duedate').textContent = format(dueDate, "MMM-dd-yyyy");
        document.querySelector('#details-priority').textContent = priority.toUpperCase();



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
        document.querySelector("#project_name").focus();
    }

    static #Edit(todo){
        console.log(`Editing the todo`);
        const dialog = document.querySelector("#edit-task-dialog");
        DOMController.#populateProjectSelect("#project-select-edit");
        dialog.showModal();
        
        let currentProject = document.querySelector("#todo-display").className;
        const submitButton = document.querySelector("#dialog-submit-edit-task");

        document.querySelector("#task_title_edit").value = todo.title;
        document.querySelector("#description_edit").value = todo.description;
        document.querySelector("#due_date_edit").value = format(todo.dueDate, "yyyy-MM-dd");
        document.querySelector("#priority_edit").value = todo.priority;
        document.querySelector("#project-select-edit").value = currentProject;

        submitButton.onclick = ()=> {
            console.log("Submitting the edit");
            const inputTaskTitle = document.querySelector("#task_title_edit").value;
            const inputDescription = document.querySelector("#description_edit").value;
            const inputDueDate = new Date(document.querySelector("#due_date_edit").value.replace(/-/g, '\/'));
            const inputPriority = document.querySelector("#priority_edit").value;
            const inputProjectName = document.querySelector("#project-select-edit").value;
    
            if(inputTaskTitle === '' || inputDescription === '' || inputDueDate === ''){
                alert("Please fill all input fields!")
            } else {
                // checking if the todo is moving projects
                currentProject = document.querySelector("#todo-display").className;
                if (inputProjectName !== currentProject){
                    console.log("The todo is changing projects")
                    ProjectMaster.changeTodoProject(todo.title, currentProject, inputProjectName);
                } else {
                    console.log("Editing within same project")
                    ProjectMaster.editTodo(todo.title, inputProjectName, inputTaskTitle, inputDescription, inputDueDate, inputPriority);
                    }
                DOMController.#updateProjectsListing(currentProject);
                dialog.close();
                DOMController.#resetProjectSelect("#project-select-edit");
                DOMController.#updateProjectsListing(inputProjectName);
                DOMController.#displayProjectTasks(currentProject, null);
                // submitButton.removeEventListener("click", hitEditSubmit);
            }
        };

        const closeButton = document.querySelector("#edit-dialog-close");
        closeButton.addEventListener("click", function closeEdit () {
            dialog.close();
            DOMController.#resetProjectSelect("#project-select-edit");
            closeButton.removeEventListener("click", closeEdit);
        });
    }
}