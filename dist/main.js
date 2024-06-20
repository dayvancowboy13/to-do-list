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

// verify functionality with non-Inbox projects
PuppetMaster.createProject("first proj", "A great description!");
console.log(PuppetMaster.projectArray.length);
PuppetMaster.createProject("proj 2", "A great description!");
console.log(PuppetMaster.projectArray.length);

PuppetMaster.addToProject("first proj", "t1", "desc");
console.log(PuppetMaster.projectArray[0])
PuppetMaster.addToProject("proj 2", "t1", "desc");
console.log(PuppetMaster.projectArray[1])
console.log("---------------")
console.log(PuppetMaster.removeFromProject("t1", "proj 2"))


// PuppetMaster.inboxTodos()

// PuppetMaster.addToInbox("t1", "desc!");
// PuppetMaster.inbox.printTodos()
// PuppetMaster.inboxTodos()
// console.log("---------------")
// PuppetMaster.addToInbox("t2", "desc!");
// PuppetMaster.inbox.printTodos()
// console.log("---------------")
// console.log(PuppetMaster.removeFromProject('t4', "Inbox"))
// PuppetMaster.inbox.printTodos()



/*
DOM-interface-Func() {
    take input from webpage
    plug that into creating new todo
    that new todo is then added to the designated project

}
*/

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsS0FBSztBQUNqRTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLCtCQUErQixXQUFXLE9BQU8sV0FBVztBQUM1RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpREFBaUQsV0FBVyxlQUFlLFVBQVU7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDaERlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMsV0FBVztBQUN2RDs7QUFFQTs7Ozs7O1VDZkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7O0FDTjRCO0FBQ007O0FBRWxDO0FBQ0E7QUFDQSx1QkFBdUIsbURBQU87QUFDOUI7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QixnREFBSTtBQUMzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtELFVBQVU7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtREFBbUQsWUFBWTtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQixtREFBTztBQUNqQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9Ub2RvLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKG5hbWU9XCJkZWZhdWx0XCIpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy50b2RvQXJyYXkgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgY29uc29sZS5sb2coYE5ldyBwcm9qZWN0IG9iamVjdCBjcmVhdGVkIHdpdGggbmFtZSAke25hbWV9YCk7XG4gICAgfVxuXG4gICAgZ2V0IHByb2plY3ROYW1lKCl7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuXG4gICAgZ2V0IGFsbFRvZG9zKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnRvZG9BcnJheTtcbiAgICB9XG5cbiAgICBnZXQgbGVuZ3RoKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnRvZG9BcnJheS5sZW5ndGg7XG4gICAgfVxuXG4gICAgcHJpbnRUb2RvcyAoKXtcbiAgICAgICAgbGV0IHRvZG9TdHJpbmcgPSBcIlwiO1xuICAgICAgICBmb3IobGV0IHRvZG8gb2YgdGhpcy50b2RvQXJyYXkpe1xuICAgICAgICAgICAgdG9kb1N0cmluZyArPSB0b2RvLnRpdGxlICsgXCIgXCI7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0eXBlb2YgdG9kbylcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKHRvZG9TdHJpbmcpO1xuICAgIH1cblxuICAgIGFkZFRvZG8gKHRvZG8pIHtcbiAgICAgICAgY29uc29sZS5sb2coYEFkZGluZyBcIiR7dG9kby50aXRsZX1cIiB0byAke3RoaXMubmFtZX0gcHJvamVjdGApO1xuICAgICAgICB0aGlzLnRvZG9BcnJheS5wdXNoKHRvZG8pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnRvZG9BcnJheSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlVG9kbyAodG9kb1RpdGxlKXtcbiAgICAgICAgY29uc29sZS5sb2coYFJlbW92aW5nIGEgVG9kbyB3aXRoIG5hbWUgJHt0b2RvVGl0bGV9IGZyb20gcHJvamVjdCAke3RoaXMubmFtZX1gKTtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBmb3IgKGxldCB0b2RvcyBvZiB0aGlzLnRvZG9BcnJheSl7XG4gICAgICAgICAgICBpZih0b2Rvcy50aXRsZSA9PT0gdG9kb1RpdGxlKXtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZG9BcnJheS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaSsrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvIHtcbiAgICBiSXNDb21wbGV0ZSA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IgKHRpdGxlLGRlc2NyaXB0aW9uKXtcbiAgICAgICAgdGhpcy50aXRsZSA9ICB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICAvLyB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICAvLyB0aGlzLnByaW9yaXR5O1xuICAgICAgICAvLyB0aGlzLmRldGFpbHM7XG4gICAgfVxuXG4gICAgZ2V0IHRoZVRpdGxlKCl7XG4gICAgICAgIHJldHVybiBgVGhlIHRpbGUgZm9yIHRoaXMgVG9kbyBpcyAke3RoaXMudGl0bGV9YDtcbiAgICB9XG5cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBUb2RvIGZyb20gXCIuL1RvZG8uanNcIlxuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vUHJvamVjdC5qc1wiXG5cbmNsYXNzIFB1cHBldE1hc3RlciB7XG4gICAgc3RhdGljIHByb2plY3RBcnJheSA9IG5ldyBBcnJheSgpO1xuICAgIHN0YXRpYyBpbmJveCA9IG5ldyBQcm9qZWN0KFwiSW5ib3hcIik7XG4gICAgXG5cbiAgICBzdGF0aWMgY3JlYXRlVG9kbyhuYW1lLCBkZXNjcmlwdGlvbil7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY3JlYXRpbmcgdG9kbyBvYmpcIik7XG4gICAgICAgIGxldCB0b2RvID0gbmV3IFRvZG8obmFtZSwgZGVzY3JpcHRpb24pO1xuICAgICAgICByZXR1cm4gdG9kbztcbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkVG9JbmJveCh0aXRsZSwgZGVzY3JpcHRpb24pe1xuICAgICAgICBjb25zb2xlLmxvZyhgYWRkVG9JbmJveCBmdW5jdGlvbiBjYWxsZWRgKTtcbiAgICAgICAgdGhpcy5pbmJveC5hZGRUb2RvKHRoaXMuY3JlYXRlVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24pKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVtb3ZlRnJvbVByb2plY3QodG9kb1RpdGxlLCBwcm9qZWN0TmFtZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKGBBdHRlbXB0aW5nIHRvIHJlbW92ZSB0b2RvIFwiJHt0b2RvVGl0bGV9XCJgKVxuICAgICAgICBpZihwcm9qZWN0TmFtZSA9PT0gXCJJbmJveFwiKXtcbiAgICAgICAgICAgIGlmKHRoaXMuaW5ib3gucmVtb3ZlVG9kbyh0b2RvVGl0bGUpKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgcHJvamVjdCBvZiB0aGlzLnByb2plY3RBcnJheSl7XG4gICAgICAgICAgICAgICAgaWYocHJvamVjdC5wcm9qZWN0TmFtZSA9PT0gcHJvamVjdE5hbWUpe1xuICAgICAgICAgICAgICAgICAgICBpZihwcm9qZWN0LnJlbW92ZVRvZG8odG9kb1RpdGxlKSkgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBhZGRUb1Byb2plY3QocHJvamVjdE5hbWUsIHRpdGxlLCBkZXNjcmlwdGlvbikge1xuICAgICAgICBjb25zb2xlLmxvZyhgQWRkaW5nIHRvIHByb2plY3Qgd2l0aCBuYW1lICR7cHJvamVjdE5hbWV9YCk7XG4gICAgICAgIGZvciAobGV0IHByb2plY3Qgb2YgdGhpcy5wcm9qZWN0QXJyYXkpe1xuICAgICAgICAgICAgaWYocHJvamVjdC5wcm9qZWN0TmFtZSA9PT0gcHJvamVjdE5hbWUpe1xuICAgICAgICAgICAgICAgIHByb2plY3QuYWRkVG9kbyh0aGlzLmNyZWF0ZVRvZG8odGl0bGUsIGRlc2NyaXB0aW9uKSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3NmdWxseSBhZGRlZCB0b2RvJylcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBpbmJveFRvZG9zKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTnVtYmVyIG9mIGl0ZW1zIGluIGluYm94IFwiICsgdGhpcy5pbmJveC5sZW5ndGgpXG4gICAgfVxuXG4gICAgc3RhdGljIG51bWJlck9mUHJvamVjdHMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdEFycmF5Lmxlbmd0aDtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlUHJvamVjdChuYW1lKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJjcmVhdGluZyBwcm9qZWN0IG9iamVjdFwiKTtcbiAgICAgICAgbGV0IHByb2plY3QgPSBuZXcgUHJvamVjdChuYW1lKTtcbiAgICAgICAgdGhpcy5wcm9qZWN0QXJyYXkucHVzaChwcm9qZWN0KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY2hhbmdlVG9kb1Byb2plY3QodG9kbywgb2xkUHJvamVjdE5hbWUsIG5ld1Byb2plY3ROYW1lKXtcbiAgICAgICAgLy8gZG9lcyB0aGUgb3JkZXIgbWF0dGVyPyByZW1vdmUgdG9kbyBmcm9tIG9sZFByb2plY3RcbiAgICAgICAgLy8gYWRkIHRvZG8gdG8gbmV3UHJvamVjdFxuICAgICAgICAvLyBnZXQgcmVmZXJlbmNlIHRvIG9sZFByb2plY3QgZnJvbSBwcm9qZWN0QXJyYXlcbiAgICAgICAgY29uc29sZS5sb2coXCJSdW5uaW5nIGNoYW5nZVRvZG9Qcm9qZWN0XCIpO1xuXG4gICAgICAgIGxldCBvbGRQcm9qZWN0ID0gdGhpcy5nZXRQcm9qZWN0RnJvbUFycmF5KG9sZFByb2plY3ROYW1lKTtcbiAgICAgICAgbGV0IG5ld1Byb2plY3QgPSB0aGlzLmdldFByb2plY3RGcm9tQXJyYXkobmV3UHJvamVjdE5hbWUpO1xuXG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBwcm9qZWN0VG9kbyBvZiBvbGRQcm9qZWN0KXtcbiAgICAgICAgICAgIC8vIGdvIHRocm91Z2ggb2xkIHByb2plY3QgYW5kIGZpbmQgdGhlIHRvZG8sIHJlbW92ZSBpdFxuICAgICAgICAgICAgaWYgKHRvZG8ubmFtZSA9PT0gcHJvamVjdFRvZG8ubmFtZSl7XG4gICAgICAgICAgICAgICAgb2xkUHJvamVjdC5yZW1vdmVUb2RvKHByb2plY3RUb2RvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXRQcm9qZWN0RnJvbUFycmF5KHByb2plY3ROYW1lKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJydW5uaW5nIGdldFByb2plY3RGcm9tQXJyYXlcIik7XG4gICAgICAgIGZvciAobGV0IHByb2plY3Qgb2YgdGhpcy5wcm9qZWN0QXJyYXkpe1xuICAgICAgICAgICAgaWYgKHByb2plY3QucHJvamVjdE5hbWUgPT09IHByb2plY3ROYW1lKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvamVjdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFRvZG9EZXRhaWxzKCl7XG4gICAgICAgIC8vIERPTSBjbGFzcyB3aWxsIHVzZSB0aGlzIHRvIGRpc3BsYXkgbW9yZSBkZXRhaWxzIG9mIGEgdG9kb1xuICAgIH1cblxuICAgIC8vIHRoZSBET00gY2xhc3Mgd2lsbCBoYXZlIGEgZnVuY3Rpb24gdG8gc3R5bGUgdGhlIGxpc3QgcmV0dXJuZWRcbiAgICBzdGF0aWMgZ2V0UHJvamVjdFRvZG9zKHByb2plY3ROYW1lKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJjYWxsaW5nIGdldFByb2plY3RUb2Rvc1wiKVxuICAgICAgICBpZihwcm9qZWN0TmFtZSA9PT0gXCJJbmJveFwiKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluYm94LmFsbFRvZG9zO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gZmluZCBwcm9qZWN0TmFtZSBpbiBwcm9qZWN0QXJyYXlcbiAgICAgICAgICAgIGxldCB0YXJnZXRQcm9qZWN0O1xuICAgICAgICAgICAgZm9yIChsZXQgcHJvamVjdCBvZiB0aGlzLnByb2plY3RBcnJheSl7XG4gICAgICAgICAgICAgICAgaWYgKHByb2plY3QucHJvamVjdE5hbWUgPT09IHByb2plY3ROYW1lKXtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0UHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXRQcm9qZWN0LmFsbFRvZG9zO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0YXJnZXRQcm9qZWN0ID09PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic29tZXRoaW5nIHdlbnQgd3JvbmcgaW4gZ2V0UHJvamVjdFRvZG9zXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIHZlcmlmeSBmdW5jdGlvbmFsaXR5IHdpdGggbm9uLUluYm94IHByb2plY3RzXG5QdXBwZXRNYXN0ZXIuY3JlYXRlUHJvamVjdChcImZpcnN0IHByb2pcIiwgXCJBIGdyZWF0IGRlc2NyaXB0aW9uIVwiKTtcbmNvbnNvbGUubG9nKFB1cHBldE1hc3Rlci5wcm9qZWN0QXJyYXkubGVuZ3RoKTtcblB1cHBldE1hc3Rlci5jcmVhdGVQcm9qZWN0KFwicHJvaiAyXCIsIFwiQSBncmVhdCBkZXNjcmlwdGlvbiFcIik7XG5jb25zb2xlLmxvZyhQdXBwZXRNYXN0ZXIucHJvamVjdEFycmF5Lmxlbmd0aCk7XG5cblB1cHBldE1hc3Rlci5hZGRUb1Byb2plY3QoXCJmaXJzdCBwcm9qXCIsIFwidDFcIiwgXCJkZXNjXCIpO1xuY29uc29sZS5sb2coUHVwcGV0TWFzdGVyLnByb2plY3RBcnJheVswXSlcblB1cHBldE1hc3Rlci5hZGRUb1Byb2plY3QoXCJwcm9qIDJcIiwgXCJ0MVwiLCBcImRlc2NcIik7XG5jb25zb2xlLmxvZyhQdXBwZXRNYXN0ZXIucHJvamVjdEFycmF5WzFdKVxuY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS1cIilcbmNvbnNvbGUubG9nKFB1cHBldE1hc3Rlci5yZW1vdmVGcm9tUHJvamVjdChcInQxXCIsIFwicHJvaiAyXCIpKVxuXG5cbi8vIFB1cHBldE1hc3Rlci5pbmJveFRvZG9zKClcblxuLy8gUHVwcGV0TWFzdGVyLmFkZFRvSW5ib3goXCJ0MVwiLCBcImRlc2MhXCIpO1xuLy8gUHVwcGV0TWFzdGVyLmluYm94LnByaW50VG9kb3MoKVxuLy8gUHVwcGV0TWFzdGVyLmluYm94VG9kb3MoKVxuLy8gY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS1cIilcbi8vIFB1cHBldE1hc3Rlci5hZGRUb0luYm94KFwidDJcIiwgXCJkZXNjIVwiKTtcbi8vIFB1cHBldE1hc3Rlci5pbmJveC5wcmludFRvZG9zKClcbi8vIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tXCIpXG4vLyBjb25zb2xlLmxvZyhQdXBwZXRNYXN0ZXIucmVtb3ZlRnJvbVByb2plY3QoJ3Q0JywgXCJJbmJveFwiKSlcbi8vIFB1cHBldE1hc3Rlci5pbmJveC5wcmludFRvZG9zKClcblxuXG5cbi8qXG5ET00taW50ZXJmYWNlLUZ1bmMoKSB7XG4gICAgdGFrZSBpbnB1dCBmcm9tIHdlYnBhZ2VcbiAgICBwbHVnIHRoYXQgaW50byBjcmVhdGluZyBuZXcgdG9kb1xuICAgIHRoYXQgbmV3IHRvZG8gaXMgdGhlbiBhZGRlZCB0byB0aGUgZGVzaWduYXRlZCBwcm9qZWN0XG5cbn1cbiovXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=