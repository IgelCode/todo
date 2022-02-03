import "./style.css";
import { Project, Item, Test } from "./todo.js";

//Kann ich das alles irgendwie in das todo.js einfügen und exportieren?
//Vllt indem ich das als funktion in todo.js schreibe und nach domstuff.js exportiere?
let projects = [];
let projectTest = new Project("Workout");
projects.push(projectTest);

let items = [];
let item = new Item("huso", "lol", "heute", "low");
items.push(item);
console.log(item);
console.log(items);
console.log(Test);
console.log(projectTest);
