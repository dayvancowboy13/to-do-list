import DOMController from "./DOMController.js"
import './style.css'

// function storageAvailable(type) {
//     let storage;
//     try {
//       storage = window[type];
//       const x = "__storage_test__";
//       storage.setItem(x, x);
//       storage.removeItem(x);
//       return true;
//     } catch (e) {
//       return (
//         e instanceof DOMException &&
//         e.name === "QuotaExceededError" &&
//         // acknowledge QuotaExceededError only if there's something already stored
//         storage &&
//         storage.length !== 0
//       );
//     }
// }

// if (storageAvailable("localStorage")) {
//     console.log("Local storage available!");
//   } else {
//     console.log("No local storage :(");
//   }


//DOMController.initialize();