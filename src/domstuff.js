import {
  Project,
  Item,
  newProject,
  submitProject,
  submitItem,
} from "./todo.js";
import * as Index from "./index.js";
import { Datepicker } from "vanillajs-datepicker";

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
  //Datepicker
  const elem = document.querySelector('input[id="Due Date:"]');
  const datepicker = new Datepicker(elem);

  //Submit Button
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
    const edit = document.createElement("td");
    const table = document.getElementById("table");
    const tr = document.createElement("tr");

    itemTitle.textContent = project.items[j].title;
    itemTitle.dataset.lul = j;
    itemDiscription.textContent = project.items[j].discription;
    itemDiscription.dataset.lul = j;
    itemDueDate.textContent = project.items[j].dueDate;
    itemDueDate.dataset.lul = j;
    itemPriority.textContent = project.items[j].priority;
    itemPriority.dataset.lul = j;
    del.textContent = "Delete";
    del.dataset.lul = j;
    edit.textContent = "Edit";
    edit.dataset.lul = j;

    table.appendChild(tr);
    tr.appendChild(itemTitle);
    tr.appendChild(itemDiscription);
    tr.appendChild(itemDueDate);
    tr.appendChild(itemPriority);
    tr.appendChild(del);
    tr.appendChild(edit);

    //Delete an item
    del.addEventListener("click", delItem);

    function delItem() {
      project.items.splice(del.dataset.lul, 1);
      table.removeChild(tr);
      while (table.firstChild) {
        table.firstChild.remove();
      }
      clearMainDOM();
      appendButtonsDOM();
      appendItemsDOM();
    }
    //Edit an Item
    edit.addEventListener("click", editItem);

    function editItem() {
      itemCreationDOM();
      const inputTitle = document.getElementById("Title:");
      const inputDiscription = document.getElementById("Discription:");
      const inputDueDate = document.getElementById("Due Date:");
      const inputPriority = document.getElementById("Priority:");

      inputTitle.value = project.items[j].title;
      inputDiscription.value = project.items[j].discription;
      inputDueDate.value = project.items[j].dueDate;
      inputPriority.value = project.items[j].priority;
      project.items.splice(edit.dataset.lul, 1);
      project.items[j].id = edit.dataset.lul;
    }
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
  appendButtonsDOM();
  appendItemsDOM();
}

function appendButtonsDOM() {
  const addbtn = document.createElement("button");
  const btnwrap = document.createElement("div");
  btnwrap.id = "btnwrap";
  main.appendChild(btnwrap);
  btnwrap.appendChild(addbtn);
  addbtn.textContent = "Add Item";
  addbtn.addEventListener("click", itemCreationDOM);
  const delbtn = document.createElement("button");
  btnwrap.appendChild(delbtn);
  delbtn.textContent = "Delete Project";
  delbtn.addEventListener("click", deleteProjectDOM);
}

function deleteProjectDOM() {
  const nav = document.getElementById("nav");
  const navChildren = document.getElementById("nav").children;

  for (let i = 0; i < navChildren.length; i++) {
    const main = document.getElementById("main");
    let navid = navChildren[i].getAttribute("data-id");
    const mainid = main.getAttribute("data-project-id");

    if (mainid === navid) {
      nav.removeChild(navChildren[i]);
    }
  }
  clearMainDOM();
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
  appendButtonsDOM,
};
