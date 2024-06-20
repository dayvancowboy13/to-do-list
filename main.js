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

    static addToProject(title, description) {
        console.log("adding todo to project");
        this.projectArray[0].addTodo(this.createTodo(title, description));
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

    static changeTodoProject(todo){
        // code to switch a Todo from one project to another
    }

    // the DOM class will have a function to style the list returned
    static getProjectTodos(projectName){
        console.log("calling getProjectTodos")
        if(projectName === "Inbox"){
            return this.inbox.allTodos;
        } else {
            // find projectName in projectArray
            let targetProject;
            console.log("Starting search through projectArray")
            for (let project in this.projectArray){
                console.log(typeof project);
                if (project.projectName === projectName){
                    targetProject = project;
                    return targetProject.allTodos;
                }
            }
            if (targetProject === undefined){
                console.log("something went wrong");
                return 20;
            }
        }
    }
}

PuppetMaster.addToInbox("Finish work", "you gotta!");
PuppetMaster.inboxTodos()
PuppetMaster.addToInbox("more stuff", "do more!");

PuppetMaster.createProject("new project");
console.log(PuppetMaster.numberOfProjects());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsS0FBSztBQUNqRTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUMxQmU7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QyxXQUFXO0FBQ3ZEOztBQUVBOzs7Ozs7VUNmQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7QUNONEI7QUFDTTs7QUFFbEM7QUFDQTtBQUNBLHVCQUF1QixtREFBTztBQUM5Qjs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLGdEQUFJO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLG1EQUFPO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvVG9kby5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihuYW1lPVwiZGVmYXVsdFwiKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudG9kb0FycmF5ID0gbmV3IEFycmF5KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBOZXcgcHJvamVjdCBvYmplY3QgY3JlYXRlZCB3aXRoIG5hbWUgJHtuYW1lfWApO1xuICAgIH1cblxuICAgIGdldCBwcm9qZWN0TmFtZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cblxuICAgIGdldCBhbGxUb2Rvcygpe1xuICAgICAgICByZXR1cm4gdGhpcy50b2RvQXJyYXk7XG4gICAgfVxuXG4gICAgZ2V0IGxlbmd0aCgpe1xuICAgICAgICByZXR1cm4gdGhpcy50b2RvQXJyYXkubGVuZ3RoO1xuICAgIH1cblxuICAgIGFkZFRvZG8gKHRvZG8pIHtcbiAgICAgICAgY29uc29sZS5sb2coYEFkZGluZyBhIHRvZG8gdG8gJHt0aGlzLm5hbWV9IHByb2plY3RgKTtcbiAgICAgICAgdGhpcy50b2RvQXJyYXkucHVzaCh0b2RvKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy50b2RvQXJyYXkpO1xuICAgIH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG8ge1xuICAgIGJJc0NvbXBsZXRlID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvciAodGl0bGUsZGVzY3JpcHRpb24pe1xuICAgICAgICB0aGlzLnRpdGxlID0gIHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIC8vIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIC8vIHRoaXMucHJpb3JpdHk7XG4gICAgICAgIC8vIHRoaXMuZGV0YWlscztcbiAgICB9XG5cbiAgICBnZXQgdGhlVGl0bGUoKXtcbiAgICAgICAgcmV0dXJuIGBUaGUgdGlsZSBmb3IgdGhpcyBUb2RvIGlzICR7dGhpcy50aXRsZX1gO1xuICAgIH1cblxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFRvZG8gZnJvbSBcIi4vVG9kby5qc1wiXG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9Qcm9qZWN0LmpzXCJcblxuY2xhc3MgUHVwcGV0TWFzdGVyIHtcbiAgICBzdGF0aWMgcHJvamVjdEFycmF5ID0gbmV3IEFycmF5KCk7XG4gICAgc3RhdGljIGluYm94ID0gbmV3IFByb2plY3QoXCJJbmJveFwiKTtcbiAgICBcblxuICAgIHN0YXRpYyBjcmVhdGVUb2RvKG5hbWUsIGRlc2NyaXB0aW9uKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJjcmVhdGluZyB0b2RvIG9ialwiKTtcbiAgICAgICAgbGV0IHRvZG8gPSBuZXcgVG9kbyhuYW1lLCBkZXNjcmlwdGlvbik7XG4gICAgICAgIHJldHVybiB0b2RvO1xuICAgIH1cblxuICAgIHN0YXRpYyBhZGRUb0luYm94KHRpdGxlLCBkZXNjcmlwdGlvbil7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWRkaW5nIHRvZG8gdG8gaW5ib3hcIik7XG4gICAgICAgIHRoaXMuaW5ib3guYWRkVG9kbyh0aGlzLmNyZWF0ZVRvZG8odGl0bGUsIGRlc2NyaXB0aW9uKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGFkZFRvUHJvamVjdCh0aXRsZSwgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJhZGRpbmcgdG9kbyB0byBwcm9qZWN0XCIpO1xuICAgICAgICB0aGlzLnByb2plY3RBcnJheVswXS5hZGRUb2RvKHRoaXMuY3JlYXRlVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24pKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaW5ib3hUb2Rvcygpe1xuICAgICAgICBjb25zb2xlLmxvZyhcInJldHJpZXZpbmcgbnVtYmVyIG9mIGl0ZW1zIGluIGluYm94XCIpXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaW5ib3gubGVuZ3RoKVxuXG4gICAgfVxuXG4gICAgc3RhdGljIG51bWJlck9mUHJvamVjdHMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdEFycmF5Lmxlbmd0aDtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlUHJvamVjdChuYW1lKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJjcmVhdGluZyBwcm9qZWN0IG9iamVjdFwiKTtcbiAgICAgICAgbGV0IHByb2plY3QgPSBuZXcgUHJvamVjdChuYW1lKTtcbiAgICAgICAgdGhpcy5wcm9qZWN0QXJyYXkucHVzaChwcm9qZWN0KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY2hhbmdlVG9kb1Byb2plY3QodG9kbyl7XG4gICAgICAgIC8vIGNvZGUgdG8gc3dpdGNoIGEgVG9kbyBmcm9tIG9uZSBwcm9qZWN0IHRvIGFub3RoZXJcbiAgICB9XG5cbiAgICAvLyB0aGUgRE9NIGNsYXNzIHdpbGwgaGF2ZSBhIGZ1bmN0aW9uIHRvIHN0eWxlIHRoZSBsaXN0IHJldHVybmVkXG4gICAgc3RhdGljIGdldFByb2plY3RUb2Rvcyhwcm9qZWN0TmFtZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2FsbGluZyBnZXRQcm9qZWN0VG9kb3NcIilcbiAgICAgICAgaWYocHJvamVjdE5hbWUgPT09IFwiSW5ib3hcIil7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbmJveC5hbGxUb2RvcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGZpbmQgcHJvamVjdE5hbWUgaW4gcHJvamVjdEFycmF5XG4gICAgICAgICAgICBsZXQgdGFyZ2V0UHJvamVjdDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU3RhcnRpbmcgc2VhcmNoIHRocm91Z2ggcHJvamVjdEFycmF5XCIpXG4gICAgICAgICAgICBmb3IgKGxldCBwcm9qZWN0IGluIHRoaXMucHJvamVjdEFycmF5KXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2YgcHJvamVjdCk7XG4gICAgICAgICAgICAgICAgaWYgKHByb2plY3QucHJvamVjdE5hbWUgPT09IHByb2plY3ROYW1lKXtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0UHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXRQcm9qZWN0LmFsbFRvZG9zO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0YXJnZXRQcm9qZWN0ID09PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic29tZXRoaW5nIHdlbnQgd3JvbmdcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDIwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5QdXBwZXRNYXN0ZXIuYWRkVG9JbmJveChcIkZpbmlzaCB3b3JrXCIsIFwieW91IGdvdHRhIVwiKTtcblB1cHBldE1hc3Rlci5pbmJveFRvZG9zKClcblB1cHBldE1hc3Rlci5hZGRUb0luYm94KFwibW9yZSBzdHVmZlwiLCBcImRvIG1vcmUhXCIpO1xuXG5QdXBwZXRNYXN0ZXIuY3JlYXRlUHJvamVjdChcIm5ldyBwcm9qZWN0XCIpO1xuY29uc29sZS5sb2coUHVwcGV0TWFzdGVyLm51bWJlck9mUHJvamVjdHMoKSk7XG5cblB1cHBldE1hc3Rlci5hZGRUb0luYm94KFwibGFzdCBjaGFuY2UhXCIsIFwidWhoaFwiKTtcblB1cHBldE1hc3Rlci5hZGRUb0luYm94KFwid293IVwiLCBcImFzZGZhc2RcIik7XG5jb25zb2xlLmxvZyhQdXBwZXRNYXN0ZXIuZ2V0UHJvamVjdFRvZG9zKFwiSW5ib3hcIikpO1xuY29uc29sZS5sb2coUHVwcGV0TWFzdGVyLmdldFByb2plY3RUb2RvcyhcIm5ldyBwcm9qZWN0XCIpKTtcblxuXG4vKlxuRE9NLWludGVyZmFjZS1GdW5jKCkge1xuICAgIHRha2UgaW5wdXQgZnJvbSB3ZWJwYWdlXG4gICAgcGx1ZyB0aGF0IGludG8gY3JlYXRpbmcgbmV3IHRvZG9cbiAgICB0aGF0IG5ldyB0b2RvIGlzIHRoZW4gYWRkZWQgdG8gdGhlIGRlc2lnbmF0ZWQgcHJvamVjdFxuXG59XG4qL1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9