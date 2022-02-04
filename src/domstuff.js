import { Project, Item, newProject, submitProject, Test } from "./todo.js";
import * as Index from "./index.js";

const projectProperties = ["Title:"];
const itemProperties = ["Title:", "Discription:", "Due Date:", "Priority:"];

function clearMainDOM() {
  const main = document.getElementById("main");
  while (main.firstChild) {
    main.firstChild.remove();
  }
}

function projectCreationDOM() {
  for (let i = 0; i < projectProperties.length; i++) {
    const input = document.createElement("input");
    const text = document.createElement("p");
    text.className = "input";
    text.textContent = projectProperties[i];
    input.id = projectProperties[i];
    console.log(input.id);
    main.appendChild(text);
    main.appendChild(input);
  }
  const btn = document.createElement("button");
  btn.textContent = "Submit Project";
  btn.id = "submitbtn";
  main.appendChild(btn);
  const submitbtn = document.getElementById("submitbtn");
  submitbtn.addEventListener("click", submitProject);
}

function itemCreationDOM() {
  for (let i = 0; i < itemProperties.length; i++) {
    const input = document.createElement("input");
    const text = document.createElement("p");
    text.className = "input";
    text.textContent = itemProperties[i];
    input.id = itemProperties[i];
    main.appendChild(text);
    main.appendChild(input);
  }
  const btn = document.createElement("button");
  btn.textContent = "Submit Project";
  btn.id = "submitbtn";
  main.appendChild(btn);
  const submitbtn = document.getElementById("submitbtn");
  submitbtn.addEventListener("click", submitItem);
}

function addSuccessDOM() {
  const text = document.createElement("p");
  main.appendChild(text);
  text.textContent =
    "Project successfully added, open it by clicking its name on the left.";
  text.id = "successtext";
}

function submitProjectDOM() {
  const input = document.getElementById("Title:");
  const nav = document.getElementById("nav");
  const text = document.createElement("p");
  text.className = "projectNav";
  text.textContent = input.value;
  nav.appendChild(text);
}

/*
let workoutProject = new Project("Workout");

let legday = new Item(
  itemProperties[0],
  itemProperties[1],
  itemProperties[2],
  itemProperties[3]
);

urlaubProject.items.push(hotel); 
*/

function newProjectDOM() {
  clearMainDOM();
  projectCreationDOM();
}

export {
  clearMainDOM,
  projectCreationDOM,
  itemCreationDOM,
  newProjectDOM,
  addSuccessDOM,
  submitProjectDOM,
};
