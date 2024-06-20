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

    printTodos (){
        let todoString = "";
        for(let todo of this.todoArray){
            todoString += todo.title + " ";
            // console.log(typeof todo)
        }

        console.log(todoString);
    }

    addTodo (todo) {
        console.log(`Adding "${todo.title}" to ${this.name} project`);
        this.todoArray.push(todo);
        // console.log(this.todoArray);
    }

    removeTodo (todoTitle){
        console.log(`Removing a Todo with name ${todoTitle} from project ${this.name}`);
        let i = 0;
        for (let todos of this.todoArray){
            if(todos.title === todoTitle){
                this.todoArray.splice(i, 1);
                return true;
            } else i++;
        }
        return false;
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
        console.log(`addToInbox function called`);
        this.inbox.addTodo(this.createTodo(title, description));
    }

    static removeFromProject(todoTitle, projectName){
        console.log(`Attempting to remove todo "${todoTitle}"`)
        if(projectName === "Inbox"){
            if(this.inbox.removeTodo(todoTitle)) return true;
            else return false;
        } else {
            for (let project of this.projectArray){
                if(project.projectName === projectName){
                    if(project.removeTodo(todoTitle)) return true;
                    else return false;
                }
            }
        }
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
        console.log("Number of items in inbox " + this.inbox.length)
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

// PuppetMaster.createProject("first proj", "A great description!");
PuppetMaster.inboxTodos()


PuppetMaster.addToInbox("t1", "desc!");
PuppetMaster.inbox.printTodos()
PuppetMaster.inboxTodos()
console.log("---------------")
PuppetMaster.addToInbox("t2", "desc!");
PuppetMaster.inbox.printTodos()
console.log("---------------")
console.log(PuppetMaster.removeFromProject('t4', "Inbox"))
PuppetMaster.inbox.printTodos()

// verify functionality with non-Inbox projects


/*
DOM-interface-Func() {
    take input from webpage
    plug that into creating new todo
    that new todo is then added to the designated project

}
*/

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsS0FBSztBQUNqRTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLCtCQUErQixXQUFXLE9BQU8sV0FBVztBQUM1RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpREFBaUQsV0FBVyxlQUFlLFVBQVU7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDaERlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMsV0FBVztBQUN2RDs7QUFFQTs7Ozs7O1VDZkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7O0FDTjRCO0FBQ007O0FBRWxDO0FBQ0E7QUFDQSx1QkFBdUIsbURBQU87QUFDOUI7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QixnREFBSTtBQUMzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtELFVBQVU7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtREFBbUQsWUFBWTtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQixtREFBTztBQUNqQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvVG9kby5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihuYW1lPVwiZGVmYXVsdFwiKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudG9kb0FycmF5ID0gbmV3IEFycmF5KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBOZXcgcHJvamVjdCBvYmplY3QgY3JlYXRlZCB3aXRoIG5hbWUgJHtuYW1lfWApO1xuICAgIH1cblxuICAgIGdldCBwcm9qZWN0TmFtZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cblxuICAgIGdldCBhbGxUb2Rvcygpe1xuICAgICAgICByZXR1cm4gdGhpcy50b2RvQXJyYXk7XG4gICAgfVxuXG4gICAgZ2V0IGxlbmd0aCgpe1xuICAgICAgICByZXR1cm4gdGhpcy50b2RvQXJyYXkubGVuZ3RoO1xuICAgIH1cblxuICAgIHByaW50VG9kb3MgKCl7XG4gICAgICAgIGxldCB0b2RvU3RyaW5nID0gXCJcIjtcbiAgICAgICAgZm9yKGxldCB0b2RvIG9mIHRoaXMudG9kb0FycmF5KXtcbiAgICAgICAgICAgIHRvZG9TdHJpbmcgKz0gdG9kby50aXRsZSArIFwiIFwiO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codHlwZW9mIHRvZG8pXG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyh0b2RvU3RyaW5nKTtcbiAgICB9XG5cbiAgICBhZGRUb2RvICh0b2RvKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBBZGRpbmcgXCIke3RvZG8udGl0bGV9XCIgdG8gJHt0aGlzLm5hbWV9IHByb2plY3RgKTtcbiAgICAgICAgdGhpcy50b2RvQXJyYXkucHVzaCh0b2RvKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy50b2RvQXJyYXkpO1xuICAgIH1cblxuICAgIHJlbW92ZVRvZG8gKHRvZG9UaXRsZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKGBSZW1vdmluZyBhIFRvZG8gd2l0aCBuYW1lICR7dG9kb1RpdGxlfSBmcm9tIHByb2plY3QgJHt0aGlzLm5hbWV9YCk7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgZm9yIChsZXQgdG9kb3Mgb2YgdGhpcy50b2RvQXJyYXkpe1xuICAgICAgICAgICAgaWYodG9kb3MudGl0bGUgPT09IHRvZG9UaXRsZSl7XG4gICAgICAgICAgICAgICAgdGhpcy50b2RvQXJyYXkuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIGkrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kbyB7XG4gICAgYklzQ29tcGxldGUgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yICh0aXRsZSxkZXNjcmlwdGlvbil7XG4gICAgICAgIHRoaXMudGl0bGUgPSAgdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgLy8gdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgLy8gdGhpcy5wcmlvcml0eTtcbiAgICAgICAgLy8gdGhpcy5kZXRhaWxzO1xuICAgIH1cblxuICAgIGdldCB0aGVUaXRsZSgpe1xuICAgICAgICByZXR1cm4gYFRoZSB0aWxlIGZvciB0aGlzIFRvZG8gaXMgJHt0aGlzLnRpdGxlfWA7XG4gICAgfVxuXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgVG9kbyBmcm9tIFwiLi9Ub2RvLmpzXCJcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL1Byb2plY3QuanNcIlxuXG5jbGFzcyBQdXBwZXRNYXN0ZXIge1xuICAgIHN0YXRpYyBwcm9qZWN0QXJyYXkgPSBuZXcgQXJyYXkoKTtcbiAgICBzdGF0aWMgaW5ib3ggPSBuZXcgUHJvamVjdChcIkluYm94XCIpO1xuICAgIFxuXG4gICAgc3RhdGljIGNyZWF0ZVRvZG8obmFtZSwgZGVzY3JpcHRpb24pe1xuICAgICAgICBjb25zb2xlLmxvZyhcImNyZWF0aW5nIHRvZG8gb2JqXCIpO1xuICAgICAgICBsZXQgdG9kbyA9IG5ldyBUb2RvKG5hbWUsIGRlc2NyaXB0aW9uKTtcbiAgICAgICAgcmV0dXJuIHRvZG87XG4gICAgfVxuXG4gICAgc3RhdGljIGFkZFRvSW5ib3godGl0bGUsIGRlc2NyaXB0aW9uKXtcbiAgICAgICAgY29uc29sZS5sb2coYGFkZFRvSW5ib3ggZnVuY3Rpb24gY2FsbGVkYCk7XG4gICAgICAgIHRoaXMuaW5ib3guYWRkVG9kbyh0aGlzLmNyZWF0ZVRvZG8odGl0bGUsIGRlc2NyaXB0aW9uKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHJlbW92ZUZyb21Qcm9qZWN0KHRvZG9UaXRsZSwgcHJvamVjdE5hbWUpe1xuICAgICAgICBjb25zb2xlLmxvZyhgQXR0ZW1wdGluZyB0byByZW1vdmUgdG9kbyBcIiR7dG9kb1RpdGxlfVwiYClcbiAgICAgICAgaWYocHJvamVjdE5hbWUgPT09IFwiSW5ib3hcIil7XG4gICAgICAgICAgICBpZih0aGlzLmluYm94LnJlbW92ZVRvZG8odG9kb1RpdGxlKSkgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICBlbHNlIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IHByb2plY3Qgb2YgdGhpcy5wcm9qZWN0QXJyYXkpe1xuICAgICAgICAgICAgICAgIGlmKHByb2plY3QucHJvamVjdE5hbWUgPT09IHByb2plY3ROYW1lKXtcbiAgICAgICAgICAgICAgICAgICAgaWYocHJvamVjdC5yZW1vdmVUb2RvKHRvZG9UaXRsZSkpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkVG9Qcm9qZWN0KHByb2plY3ROYW1lLCB0aXRsZSwgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgY29uc29sZS5sb2coYEFkZGluZyB0byBwcm9qZWN0IHdpdGggbmFtZSAke3Byb2plY3ROYW1lfWApO1xuICAgICAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHRoaXMucHJvamVjdEFycmF5KXtcbiAgICAgICAgICAgIGlmKHByb2plY3QucHJvamVjdE5hbWUgPT09IHByb2plY3ROYW1lKXtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmFkZFRvZG8odGhpcy5jcmVhdGVUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbikpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzZnVsbHkgYWRkZWQgdG9kbycpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgaW5ib3hUb2Rvcygpe1xuICAgICAgICBjb25zb2xlLmxvZyhcIk51bWJlciBvZiBpdGVtcyBpbiBpbmJveCBcIiArIHRoaXMuaW5ib3gubGVuZ3RoKVxuICAgIH1cblxuICAgIHN0YXRpYyBudW1iZXJPZlByb2plY3RzKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RBcnJheS5sZW5ndGg7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZVByb2plY3QobmFtZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY3JlYXRpbmcgcHJvamVjdCBvYmplY3RcIik7XG4gICAgICAgIGxldCBwcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSk7XG4gICAgICAgIHRoaXMucHJvamVjdEFycmF5LnB1c2gocHJvamVjdCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNoYW5nZVRvZG9Qcm9qZWN0KHRvZG8sIG9sZFByb2plY3ROYW1lLCBuZXdQcm9qZWN0TmFtZSl7XG4gICAgICAgIC8vIGRvZXMgdGhlIG9yZGVyIG1hdHRlcj8gcmVtb3ZlIHRvZG8gZnJvbSBvbGRQcm9qZWN0XG4gICAgICAgIC8vIGFkZCB0b2RvIHRvIG5ld1Byb2plY3RcbiAgICAgICAgLy8gZ2V0IHJlZmVyZW5jZSB0byBvbGRQcm9qZWN0IGZyb20gcHJvamVjdEFycmF5XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUnVubmluZyBjaGFuZ2VUb2RvUHJvamVjdFwiKTtcblxuICAgICAgICBsZXQgb2xkUHJvamVjdCA9IHRoaXMuZ2V0UHJvamVjdEZyb21BcnJheShvbGRQcm9qZWN0TmFtZSk7XG4gICAgICAgIGxldCBuZXdQcm9qZWN0ID0gdGhpcy5nZXRQcm9qZWN0RnJvbUFycmF5KG5ld1Byb2plY3ROYW1lKTtcblxuICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgcHJvamVjdFRvZG8gb2Ygb2xkUHJvamVjdCl7XG4gICAgICAgICAgICAvLyBnbyB0aHJvdWdoIG9sZCBwcm9qZWN0IGFuZCBmaW5kIHRoZSB0b2RvLCByZW1vdmUgaXRcbiAgICAgICAgICAgIGlmICh0b2RvLm5hbWUgPT09IHByb2plY3RUb2RvLm5hbWUpe1xuICAgICAgICAgICAgICAgIG9sZFByb2plY3QucmVtb3ZlVG9kbyhwcm9qZWN0VG9kbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0UHJvamVjdEZyb21BcnJheShwcm9qZWN0TmFtZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicnVubmluZyBnZXRQcm9qZWN0RnJvbUFycmF5XCIpO1xuICAgICAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHRoaXMucHJvamVjdEFycmF5KXtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0LnByb2plY3ROYW1lID09PSBwcm9qZWN0TmFtZSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb2plY3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRUb2RvRGV0YWlscygpe1xuICAgICAgICAvLyBET00gY2xhc3Mgd2lsbCB1c2UgdGhpcyB0byBkaXNwbGF5IG1vcmUgZGV0YWlscyBvZiBhIHRvZG9cbiAgICB9XG5cbiAgICAvLyB0aGUgRE9NIGNsYXNzIHdpbGwgaGF2ZSBhIGZ1bmN0aW9uIHRvIHN0eWxlIHRoZSBsaXN0IHJldHVybmVkXG4gICAgc3RhdGljIGdldFByb2plY3RUb2Rvcyhwcm9qZWN0TmFtZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2FsbGluZyBnZXRQcm9qZWN0VG9kb3NcIilcbiAgICAgICAgaWYocHJvamVjdE5hbWUgPT09IFwiSW5ib3hcIil7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbmJveC5hbGxUb2RvcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGZpbmQgcHJvamVjdE5hbWUgaW4gcHJvamVjdEFycmF5XG4gICAgICAgICAgICBsZXQgdGFyZ2V0UHJvamVjdDtcbiAgICAgICAgICAgIGZvciAobGV0IHByb2plY3Qgb2YgdGhpcy5wcm9qZWN0QXJyYXkpe1xuICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0LnByb2plY3ROYW1lID09PSBwcm9qZWN0TmFtZSl7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0UHJvamVjdC5hbGxUb2RvcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGFyZ2V0UHJvamVjdCA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNvbWV0aGluZyB3ZW50IHdyb25nIGluIGdldFByb2plY3RUb2Rvc1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBQdXBwZXRNYXN0ZXIuY3JlYXRlUHJvamVjdChcImZpcnN0IHByb2pcIiwgXCJBIGdyZWF0IGRlc2NyaXB0aW9uIVwiKTtcblB1cHBldE1hc3Rlci5pbmJveFRvZG9zKClcblxuXG5QdXBwZXRNYXN0ZXIuYWRkVG9JbmJveChcInQxXCIsIFwiZGVzYyFcIik7XG5QdXBwZXRNYXN0ZXIuaW5ib3gucHJpbnRUb2RvcygpXG5QdXBwZXRNYXN0ZXIuaW5ib3hUb2RvcygpXG5jb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLVwiKVxuUHVwcGV0TWFzdGVyLmFkZFRvSW5ib3goXCJ0MlwiLCBcImRlc2MhXCIpO1xuUHVwcGV0TWFzdGVyLmluYm94LnByaW50VG9kb3MoKVxuY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS1cIilcbmNvbnNvbGUubG9nKFB1cHBldE1hc3Rlci5yZW1vdmVGcm9tUHJvamVjdCgndDQnLCBcIkluYm94XCIpKVxuUHVwcGV0TWFzdGVyLmluYm94LnByaW50VG9kb3MoKVxuXG4vLyB2ZXJpZnkgZnVuY3Rpb25hbGl0eSB3aXRoIG5vbi1JbmJveCBwcm9qZWN0c1xuXG5cbi8qXG5ET00taW50ZXJmYWNlLUZ1bmMoKSB7XG4gICAgdGFrZSBpbnB1dCBmcm9tIHdlYnBhZ2VcbiAgICBwbHVnIHRoYXQgaW50byBjcmVhdGluZyBuZXcgdG9kb1xuICAgIHRoYXQgbmV3IHRvZG8gaXMgdGhlbiBhZGRlZCB0byB0aGUgZGVzaWduYXRlZCBwcm9qZWN0XG5cbn1cbiovXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=