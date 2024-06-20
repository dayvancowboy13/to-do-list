/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
class Project {
    
    constructor(name="default") {
        this.name = name;
        this.todoArray = new Array();
        console.log(`New project object created with name ${name}`);
    }

    get projectName(){
        return this.name;
    }

    get allTodos(){
        return this.todoArray;
    }

    get length(){
        return this.todoArray.length;
    }

    addTodo (todo) {
        console.log(`Adding a todo to ${this.name} project`);
        this.todoArray.push(todo);
        console.log(this.todoArray);
    }

    removeTodo (todo){
        console.log(`Removing a Todo with name ${todo.name} from project ${this.name}`);
        this.todoArray.indexOf()
    }

}

/***/ }),

/***/ "./src/Todo.js":
/*!*********************!*\
  !*** ./src/Todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
class Todo {
    bIsComplete = false;

    constructor (title,description){
        this.title =  title;
        this.description = description;
        // this.dueDate = dueDate;
        // this.priority;
        // this.details;
    }

    get theTitle(){
        return `The tile for this Todo is ${this.title}`;
    }

}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todo.js */ "./src/Todo.js");
/* harmony import */ var _Project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project.js */ "./src/Project.js");



class PuppetMaster {
    static projectArray = new Array();
    static inbox = new _Project_js__WEBPACK_IMPORTED_MODULE_1__["default"]("Inbox");
    

    static createTodo(name, description){
        console.log("creating todo obj");
        let todo = new _Todo_js__WEBPACK_IMPORTED_MODULE_0__["default"](name, description);
        return todo;
    }

    static addToInbox(title, description){
        console.log("adding todo to inbox");
        this.inbox.addTodo(this.createTodo(title, description));
    }

    static addToProject(projectName, title, description) {
        console.log(`Adding to project with name ${projectName}`);
        for (let project of this.projectArray){
            if(project.projectName === projectName){
                project.addTodo(this.createTodo(title, description));
                console.log('successfully added todo')
                break;
            }
        }
    }

    static inboxTodos(){
        console.log("retrieving number of items in inbox")
        console.log(this.inbox.length)

    }

    static numberOfProjects(){
        return this.projectArray.length;
    }

    static createProject(name){
        console.log("creating project object");
        let project = new _Project_js__WEBPACK_IMPORTED_MODULE_1__["default"](name);
        this.projectArray.push(project);
    }

    static changeTodoProject(todo, oldProjectName, newProjectName){
        // does the order matter? remove todo from oldProject
        // add todo to newProject
        // get reference to oldProject from projectArray
        console.log("Running changeTodoProject");

        let oldProject = this.getProjectFromArray(oldProjectName);
        let newProject = this.getProjectFromArray(newProjectName);

        
        for (let projectTodo of oldProject){
            // go through old project and find the todo, remove it
            if (todo.name === projectTodo.name){
                oldProject.removeTodo(projectTodo);
            }
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

    static deleteTodo(){
        // just remove the todo from its project's todoArray?
    }

    static getTodoDetails(){
        // DOM class will use this to display more details of a todo
    }

    // the DOM class will have a function to style the list returned
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
}

// PuppetMaster.addToInbox("Finish work", "you gotta!");
// PuppetMaster.inboxTodos()
// PuppetMaster.addToInbox("more stuff", "do more!");

PuppetMaster.createProject("new project");
console.log(PuppetMaster.getProjectFromArray("new project"));
PuppetMaster.createProject("best project");
console.log(PuppetMaster.getProjectFromArray("best project"));
// PuppetMaster.addToProject("new project", "new todo", "for new project")
// PuppetMaster.addToProject("fake project","new todo", "for new project")
// console.log(PuppetMaster.numberOfProjects());

PuppetMaster.addToInbox("last chance!", "uhhh");
PuppetMaster.addToInbox("wow!", "asdfasd");
console.log(PuppetMaster.getProjectTodos("Inbox"));
console.log(PuppetMaster.getProjectTodos("new project"));


/*
DOM-interface-Func() {
    take input from webpage
    plug that into creating new todo
    that new todo is then added to the designated project

}
*/

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsS0FBSztBQUNqRTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlEQUFpRCxXQUFXLGVBQWUsVUFBVTtBQUNyRjtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQy9CZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLFdBQVc7QUFDdkQ7O0FBRUE7Ozs7OztVQ2ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7OztBQ040QjtBQUNNOztBQUVsQztBQUNBO0FBQ0EsdUJBQXVCLG1EQUFPO0FBQzlCOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIsZ0RBQUk7QUFDM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1EQUFtRCxZQUFZO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLG1EQUFPO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvVG9kby5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihuYW1lPVwiZGVmYXVsdFwiKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudG9kb0FycmF5ID0gbmV3IEFycmF5KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBOZXcgcHJvamVjdCBvYmplY3QgY3JlYXRlZCB3aXRoIG5hbWUgJHtuYW1lfWApO1xuICAgIH1cblxuICAgIGdldCBwcm9qZWN0TmFtZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cblxuICAgIGdldCBhbGxUb2Rvcygpe1xuICAgICAgICByZXR1cm4gdGhpcy50b2RvQXJyYXk7XG4gICAgfVxuXG4gICAgZ2V0IGxlbmd0aCgpe1xuICAgICAgICByZXR1cm4gdGhpcy50b2RvQXJyYXkubGVuZ3RoO1xuICAgIH1cblxuICAgIGFkZFRvZG8gKHRvZG8pIHtcbiAgICAgICAgY29uc29sZS5sb2coYEFkZGluZyBhIHRvZG8gdG8gJHt0aGlzLm5hbWV9IHByb2plY3RgKTtcbiAgICAgICAgdGhpcy50b2RvQXJyYXkucHVzaCh0b2RvKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy50b2RvQXJyYXkpO1xuICAgIH1cblxuICAgIHJlbW92ZVRvZG8gKHRvZG8pe1xuICAgICAgICBjb25zb2xlLmxvZyhgUmVtb3ZpbmcgYSBUb2RvIHdpdGggbmFtZSAke3RvZG8ubmFtZX0gZnJvbSBwcm9qZWN0ICR7dGhpcy5uYW1lfWApO1xuICAgICAgICB0aGlzLnRvZG9BcnJheS5pbmRleE9mKClcbiAgICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvIHtcbiAgICBiSXNDb21wbGV0ZSA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IgKHRpdGxlLGRlc2NyaXB0aW9uKXtcbiAgICAgICAgdGhpcy50aXRsZSA9ICB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICAvLyB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICAvLyB0aGlzLnByaW9yaXR5O1xuICAgICAgICAvLyB0aGlzLmRldGFpbHM7XG4gICAgfVxuXG4gICAgZ2V0IHRoZVRpdGxlKCl7XG4gICAgICAgIHJldHVybiBgVGhlIHRpbGUgZm9yIHRoaXMgVG9kbyBpcyAke3RoaXMudGl0bGV9YDtcbiAgICB9XG5cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBUb2RvIGZyb20gXCIuL1RvZG8uanNcIlxuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vUHJvamVjdC5qc1wiXG5cbmNsYXNzIFB1cHBldE1hc3RlciB7XG4gICAgc3RhdGljIHByb2plY3RBcnJheSA9IG5ldyBBcnJheSgpO1xuICAgIHN0YXRpYyBpbmJveCA9IG5ldyBQcm9qZWN0KFwiSW5ib3hcIik7XG4gICAgXG5cbiAgICBzdGF0aWMgY3JlYXRlVG9kbyhuYW1lLCBkZXNjcmlwdGlvbil7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY3JlYXRpbmcgdG9kbyBvYmpcIik7XG4gICAgICAgIGxldCB0b2RvID0gbmV3IFRvZG8obmFtZSwgZGVzY3JpcHRpb24pO1xuICAgICAgICByZXR1cm4gdG9kbztcbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkVG9JbmJveCh0aXRsZSwgZGVzY3JpcHRpb24pe1xuICAgICAgICBjb25zb2xlLmxvZyhcImFkZGluZyB0b2RvIHRvIGluYm94XCIpO1xuICAgICAgICB0aGlzLmluYm94LmFkZFRvZG8odGhpcy5jcmVhdGVUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBhZGRUb1Byb2plY3QocHJvamVjdE5hbWUsIHRpdGxlLCBkZXNjcmlwdGlvbikge1xuICAgICAgICBjb25zb2xlLmxvZyhgQWRkaW5nIHRvIHByb2plY3Qgd2l0aCBuYW1lICR7cHJvamVjdE5hbWV9YCk7XG4gICAgICAgIGZvciAobGV0IHByb2plY3Qgb2YgdGhpcy5wcm9qZWN0QXJyYXkpe1xuICAgICAgICAgICAgaWYocHJvamVjdC5wcm9qZWN0TmFtZSA9PT0gcHJvamVjdE5hbWUpe1xuICAgICAgICAgICAgICAgIHByb2plY3QuYWRkVG9kbyh0aGlzLmNyZWF0ZVRvZG8odGl0bGUsIGRlc2NyaXB0aW9uKSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3NmdWxseSBhZGRlZCB0b2RvJylcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBpbmJveFRvZG9zKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicmV0cmlldmluZyBudW1iZXIgb2YgaXRlbXMgaW4gaW5ib3hcIilcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5pbmJveC5sZW5ndGgpXG5cbiAgICB9XG5cbiAgICBzdGF0aWMgbnVtYmVyT2ZQcm9qZWN0cygpe1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0QXJyYXkubGVuZ3RoO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVQcm9qZWN0KG5hbWUpe1xuICAgICAgICBjb25zb2xlLmxvZyhcImNyZWF0aW5nIHByb2plY3Qgb2JqZWN0XCIpO1xuICAgICAgICBsZXQgcHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUpO1xuICAgICAgICB0aGlzLnByb2plY3RBcnJheS5wdXNoKHByb2plY3QpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjaGFuZ2VUb2RvUHJvamVjdCh0b2RvLCBvbGRQcm9qZWN0TmFtZSwgbmV3UHJvamVjdE5hbWUpe1xuICAgICAgICAvLyBkb2VzIHRoZSBvcmRlciBtYXR0ZXI/IHJlbW92ZSB0b2RvIGZyb20gb2xkUHJvamVjdFxuICAgICAgICAvLyBhZGQgdG9kbyB0byBuZXdQcm9qZWN0XG4gICAgICAgIC8vIGdldCByZWZlcmVuY2UgdG8gb2xkUHJvamVjdCBmcm9tIHByb2plY3RBcnJheVxuICAgICAgICBjb25zb2xlLmxvZyhcIlJ1bm5pbmcgY2hhbmdlVG9kb1Byb2plY3RcIik7XG5cbiAgICAgICAgbGV0IG9sZFByb2plY3QgPSB0aGlzLmdldFByb2plY3RGcm9tQXJyYXkob2xkUHJvamVjdE5hbWUpO1xuICAgICAgICBsZXQgbmV3UHJvamVjdCA9IHRoaXMuZ2V0UHJvamVjdEZyb21BcnJheShuZXdQcm9qZWN0TmFtZSk7XG5cbiAgICAgICAgXG4gICAgICAgIGZvciAobGV0IHByb2plY3RUb2RvIG9mIG9sZFByb2plY3Qpe1xuICAgICAgICAgICAgLy8gZ28gdGhyb3VnaCBvbGQgcHJvamVjdCBhbmQgZmluZCB0aGUgdG9kbywgcmVtb3ZlIGl0XG4gICAgICAgICAgICBpZiAodG9kby5uYW1lID09PSBwcm9qZWN0VG9kby5uYW1lKXtcbiAgICAgICAgICAgICAgICBvbGRQcm9qZWN0LnJlbW92ZVRvZG8ocHJvamVjdFRvZG8pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFByb2plY3RGcm9tQXJyYXkocHJvamVjdE5hbWUpe1xuICAgICAgICBjb25zb2xlLmxvZyhcInJ1bm5pbmcgZ2V0UHJvamVjdEZyb21BcnJheVwiKTtcbiAgICAgICAgZm9yIChsZXQgcHJvamVjdCBvZiB0aGlzLnByb2plY3RBcnJheSl7XG4gICAgICAgICAgICBpZiAocHJvamVjdC5wcm9qZWN0TmFtZSA9PT0gcHJvamVjdE5hbWUpe1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9qZWN0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBzdGF0aWMgZGVsZXRlVG9kbygpe1xuICAgICAgICAvLyBqdXN0IHJlbW92ZSB0aGUgdG9kbyBmcm9tIGl0cyBwcm9qZWN0J3MgdG9kb0FycmF5P1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRUb2RvRGV0YWlscygpe1xuICAgICAgICAvLyBET00gY2xhc3Mgd2lsbCB1c2UgdGhpcyB0byBkaXNwbGF5IG1vcmUgZGV0YWlscyBvZiBhIHRvZG9cbiAgICB9XG5cbiAgICAvLyB0aGUgRE9NIGNsYXNzIHdpbGwgaGF2ZSBhIGZ1bmN0aW9uIHRvIHN0eWxlIHRoZSBsaXN0IHJldHVybmVkXG4gICAgc3RhdGljIGdldFByb2plY3RUb2Rvcyhwcm9qZWN0TmFtZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2FsbGluZyBnZXRQcm9qZWN0VG9kb3NcIilcbiAgICAgICAgaWYocHJvamVjdE5hbWUgPT09IFwiSW5ib3hcIil7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbmJveC5hbGxUb2RvcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGZpbmQgcHJvamVjdE5hbWUgaW4gcHJvamVjdEFycmF5XG4gICAgICAgICAgICBsZXQgdGFyZ2V0UHJvamVjdDtcbiAgICAgICAgICAgIGZvciAobGV0IHByb2plY3Qgb2YgdGhpcy5wcm9qZWN0QXJyYXkpe1xuICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0LnByb2plY3ROYW1lID09PSBwcm9qZWN0TmFtZSl7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0UHJvamVjdC5hbGxUb2RvcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGFyZ2V0UHJvamVjdCA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNvbWV0aGluZyB3ZW50IHdyb25nIGluIGdldFByb2plY3RUb2Rvc1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBQdXBwZXRNYXN0ZXIuYWRkVG9JbmJveChcIkZpbmlzaCB3b3JrXCIsIFwieW91IGdvdHRhIVwiKTtcbi8vIFB1cHBldE1hc3Rlci5pbmJveFRvZG9zKClcbi8vIFB1cHBldE1hc3Rlci5hZGRUb0luYm94KFwibW9yZSBzdHVmZlwiLCBcImRvIG1vcmUhXCIpO1xuXG5QdXBwZXRNYXN0ZXIuY3JlYXRlUHJvamVjdChcIm5ldyBwcm9qZWN0XCIpO1xuY29uc29sZS5sb2coUHVwcGV0TWFzdGVyLmdldFByb2plY3RGcm9tQXJyYXkoXCJuZXcgcHJvamVjdFwiKSk7XG5QdXBwZXRNYXN0ZXIuY3JlYXRlUHJvamVjdChcImJlc3QgcHJvamVjdFwiKTtcbmNvbnNvbGUubG9nKFB1cHBldE1hc3Rlci5nZXRQcm9qZWN0RnJvbUFycmF5KFwiYmVzdCBwcm9qZWN0XCIpKTtcbi8vIFB1cHBldE1hc3Rlci5hZGRUb1Byb2plY3QoXCJuZXcgcHJvamVjdFwiLCBcIm5ldyB0b2RvXCIsIFwiZm9yIG5ldyBwcm9qZWN0XCIpXG4vLyBQdXBwZXRNYXN0ZXIuYWRkVG9Qcm9qZWN0KFwiZmFrZSBwcm9qZWN0XCIsXCJuZXcgdG9kb1wiLCBcImZvciBuZXcgcHJvamVjdFwiKVxuLy8gY29uc29sZS5sb2coUHVwcGV0TWFzdGVyLm51bWJlck9mUHJvamVjdHMoKSk7XG5cblB1cHBldE1hc3Rlci5hZGRUb0luYm94KFwibGFzdCBjaGFuY2UhXCIsIFwidWhoaFwiKTtcblB1cHBldE1hc3Rlci5hZGRUb0luYm94KFwid293IVwiLCBcImFzZGZhc2RcIik7XG5jb25zb2xlLmxvZyhQdXBwZXRNYXN0ZXIuZ2V0UHJvamVjdFRvZG9zKFwiSW5ib3hcIikpO1xuY29uc29sZS5sb2coUHVwcGV0TWFzdGVyLmdldFByb2plY3RUb2RvcyhcIm5ldyBwcm9qZWN0XCIpKTtcblxuXG4vKlxuRE9NLWludGVyZmFjZS1GdW5jKCkge1xuICAgIHRha2UgaW5wdXQgZnJvbSB3ZWJwYWdlXG4gICAgcGx1ZyB0aGF0IGludG8gY3JlYXRpbmcgbmV3IHRvZG9cbiAgICB0aGF0IG5ldyB0b2RvIGlzIHRoZW4gYWRkZWQgdG8gdGhlIGRlc2lnbmF0ZWQgcHJvamVjdFxuXG59XG4qL1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9