import {
  Project,
  Item,
  newProject,
  submitProject,
  submitItem,
} from "./todo.js";
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
  clearMainDOM();
  for (let i = 0; i < itemProperties.length; i++) {
    const input = document.createElement("input");
    const text = document.createElement("p");
    text.className = "input";
    text.textContent = itemProperties[i];
    input.id = itemProperties[i];
    input.dataset.id = i;
    main.appendChild(text);
    main.appendChild(input);
  }
  const btn = document.createElement("button");
  btn.textContent = "Submit Item";
  btn.id = "submitbtn";
  main.appendChild(btn);
  const submitbtn = document.getElementById("submitbtn");
  submitbtn.addEventListener("click", submitItem);
}

function appendItemsDOM() {
  const id = main.getAttribute("data-project-id");
  const project = window.projects.find(function (project) {
    return id === project.id;
  });

  addCleanTableDOM();

  for (let j = 0; j < project.items.length; j++) {
    const itemTitle = document.createElement("td");
    const itemDiscription = document.createElement("td");
    const itemDueDate = document.createElement("td");
    const itemPriority = document.createElement("td");
    const del = document.createElement("td");
    const table = document.getElementById("table");
    const tr = document.createElement("tr");

    itemTitle.textContent = project.items[j].title;
    itemDiscription.textContent = project.items[j].discription;
    itemDueDate.textContent = project.items[j].dueDate;
    itemPriority.textContent = project.items[j].priority;
    del.textContent = "Delete";
    del.dataset.lul = j;

    table.appendChild(tr);
    tr.appendChild(itemTitle);
    tr.appendChild(itemDiscription);
    tr.appendChild(itemDueDate);
    tr.appendChild(itemPriority);
    tr.appendChild(del);
    del.addEventListener("click", function delItem() {
      project.items.splice(del.dataset.lul, 1);
      table.removeChild(tr);
      while (table.firstChild) {
        table.firstChild.remove();
      }
      clearMainDOM();
      appendAddButtonDOM();
      appendItemsDOM();
    });
  }
}

function addCleanTableDOM() {
  const table = document.createElement("table");
  const tr = document.createElement("tr");
  const tableTitle = document.createElement("th");
  const tableDiscription = document.createElement("th");
  const tableDueDate = document.createElement("th");
  const tablePriority = document.createElement("th");

  main.appendChild(table);
  table.appendChild(tr);
  table.id = "table";

  tableTitle.textContent = "Title";
  tableDiscription.textContent = "Discription";
  tableDueDate.textContent = "Due Date";
  tablePriority.textContent = "Priority";

  tr.appendChild(tableTitle);
  tr.appendChild(tableDiscription);
  tr.appendChild(tableDueDate);
  tr.appendChild(tablePriority);
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
  text.setAttribute("data-id", Date.now());
  nav.appendChild(text);
  text.addEventListener("click", openProjectDOM);
  return text.getAttribute("data-id");
}

function openProjectDOM(event) {
  const target = event.target;
  const id = target.getAttribute("data-id");
  clearMainDOM();
  main.setAttribute("data-project-id", id);
  appendAddButtonDOM();
  appendItemsDOM();
}

function appendAddButtonDOM() {
  const addbtn = document.createElement("button");
  const delbtn = document.createElement("button");
  main.appendChild(addbtn);
  addbtn.textContent = "Add Item";
  addbtn.addEventListener("click", itemCreationDOM);
  main.appendChild(delbtn);
  delbtn.textContent = "Delete Project";
  delbtn.addEventListener("click", deleteProjectDOM);
}

function deleteProjectDOM() {
  const nav = document.getElementById("nav");
  const navChildren = document.getElementById("nav").childNodes;

  for (let i = 0; i < navChildren.length; i++) {
    console.log(navChildren[5].getAttribute("data-id"));
    const main = document.getElementById("main");
    let navid = navChildren[i].getAttribute("data-id");
    const mainid = main.getAttribute("data-project-id");

    if (mainid === navid) {
      nav.removeChild(navChildren[i]);
    }
  }
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
  openProjectDOM,
  appendItemsDOM,
};
