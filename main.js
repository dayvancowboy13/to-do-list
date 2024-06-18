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

    func1 () {
        console.log("Func1");
        // console.log(bigCall);
        console.log(this.p1); // undefined
    }

    addTodo (todo) {
        console.log("this function will add the todo object to the project's array");
        console.log(this.todoArray);
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
    
    greet(){
        console.log("Hello!");
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
// this is where all the modules will be pulled into and used from



class Manager {
    static createTodo(){
        console.log("creating todo obj");
    }
    static createProject(){
        console.log("creating project obj");
    }
}

const BigCahuna = new Manager();

Manager.createProject();

// have a "default" project when user starts the app
const proj0 = new _Project_js__WEBPACK_IMPORTED_MODULE_1__["default"]();

// projects are functionally separate lists of todos
// TODO's can only be part of one project
//      which module allows you to change projects?

// Manager class? responsible for creating projects and todos
// when switching the project that a todo is part of, it 
// accesses the designated project and removes the todo
// from that list, then appends it to the new one?

const myT = new _Todo_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Title", "Desc");
const t2 = new _Todo_js__WEBPACK_IMPORTED_MODULE_0__["default"]("t1", "d2");

//console.log(myT.theTitle);

proj0.addTodo(myT);
proj0.addTodo(t2);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsS0FBSztBQUNqRTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUN6QmU7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QyxXQUFXO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDbEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7OztBQ05BO0FBQzRCO0FBQ007O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxrQkFBa0IsbURBQU87O0FBRXpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsZ0RBQUk7QUFDcEIsZUFBZSxnREFBSTs7QUFFbkI7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL1RvZG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gICAgXG4gICAgY29uc3RydWN0b3IobmFtZT1cImRlZmF1bHRcIikge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnRvZG9BcnJheSA9IG5ldyBBcnJheSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhgTmV3IHByb2plY3Qgb2JqZWN0IGNyZWF0ZWQgd2l0aCBuYW1lICR7bmFtZX1gKTtcbiAgICB9XG5cbiAgICBnZXQgcHJvamVjdE5hbWUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG5cbiAgICBmdW5jMSAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRnVuYzFcIik7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGJpZ0NhbGwpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnAxKTsgLy8gdW5kZWZpbmVkXG4gICAgfVxuXG4gICAgYWRkVG9kbyAodG9kbykge1xuICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMgZnVuY3Rpb24gd2lsbCBhZGQgdGhlIHRvZG8gb2JqZWN0IHRvIHRoZSBwcm9qZWN0J3MgYXJyYXlcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudG9kb0FycmF5KTtcbiAgICAgICAgdGhpcy50b2RvQXJyYXkucHVzaCh0b2RvKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy50b2RvQXJyYXkpO1xuICAgIH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG8ge1xuICAgIGJJc0NvbXBsZXRlID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvciAodGl0bGUsZGVzY3JpcHRpb24pe1xuICAgICAgICB0aGlzLnRpdGxlID0gIHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIC8vIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIC8vIHRoaXMucHJpb3JpdHk7XG4gICAgICAgIC8vIHRoaXMuZGV0YWlscztcbiAgICB9XG5cbiAgICBnZXQgdGhlVGl0bGUoKXtcbiAgICAgICAgcmV0dXJuIGBUaGUgdGlsZSBmb3IgdGhpcyBUb2RvIGlzICR7dGhpcy50aXRsZX1gO1xuICAgIH1cbiAgICBcbiAgICBncmVldCgpe1xuICAgICAgICBjb25zb2xlLmxvZyhcIkhlbGxvIVwiKTtcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyB0aGlzIGlzIHdoZXJlIGFsbCB0aGUgbW9kdWxlcyB3aWxsIGJlIHB1bGxlZCBpbnRvIGFuZCB1c2VkIGZyb21cbmltcG9ydCBUb2RvIGZyb20gXCIuL1RvZG8uanNcIlxuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vUHJvamVjdC5qc1wiXG5cbmNsYXNzIE1hbmFnZXIge1xuICAgIHN0YXRpYyBjcmVhdGVUb2RvKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY3JlYXRpbmcgdG9kbyBvYmpcIik7XG4gICAgfVxuICAgIHN0YXRpYyBjcmVhdGVQcm9qZWN0KCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY3JlYXRpbmcgcHJvamVjdCBvYmpcIik7XG4gICAgfVxufVxuXG5jb25zdCBCaWdDYWh1bmEgPSBuZXcgTWFuYWdlcigpO1xuXG5NYW5hZ2VyLmNyZWF0ZVByb2plY3QoKTtcblxuLy8gaGF2ZSBhIFwiZGVmYXVsdFwiIHByb2plY3Qgd2hlbiB1c2VyIHN0YXJ0cyB0aGUgYXBwXG5jb25zdCBwcm9qMCA9IG5ldyBQcm9qZWN0KCk7XG5cbi8vIHByb2plY3RzIGFyZSBmdW5jdGlvbmFsbHkgc2VwYXJhdGUgbGlzdHMgb2YgdG9kb3Ncbi8vIFRPRE8ncyBjYW4gb25seSBiZSBwYXJ0IG9mIG9uZSBwcm9qZWN0XG4vLyAgICAgIHdoaWNoIG1vZHVsZSBhbGxvd3MgeW91IHRvIGNoYW5nZSBwcm9qZWN0cz9cblxuLy8gTWFuYWdlciBjbGFzcz8gcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHByb2plY3RzIGFuZCB0b2Rvc1xuLy8gd2hlbiBzd2l0Y2hpbmcgdGhlIHByb2plY3QgdGhhdCBhIHRvZG8gaXMgcGFydCBvZiwgaXQgXG4vLyBhY2Nlc3NlcyB0aGUgZGVzaWduYXRlZCBwcm9qZWN0IGFuZCByZW1vdmVzIHRoZSB0b2RvXG4vLyBmcm9tIHRoYXQgbGlzdCwgdGhlbiBhcHBlbmRzIGl0IHRvIHRoZSBuZXcgb25lP1xuXG5jb25zdCBteVQgPSBuZXcgVG9kbyhcIlRpdGxlXCIsIFwiRGVzY1wiKTtcbmNvbnN0IHQyID0gbmV3IFRvZG8oXCJ0MVwiLCBcImQyXCIpO1xuXG4vL2NvbnNvbGUubG9nKG15VC50aGVUaXRsZSk7XG5cbnByb2owLmFkZFRvZG8obXlUKTtcbnByb2owLmFkZFRvZG8odDIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9