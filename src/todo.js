import {
  clearMainDOM,
  addSuccessDOM,
  submitProjectDOM,
  openProjectDOM,
  itemCreationDOM,
  appendItemsDOM,
} from "./domstuff.js";

class Project {
  items = [];
  constructor(id, title) {
    this.id = id;
    this.title = title;
  }
}
class Item {
  constructor(title, discription, dueDate, priority) {
    this.title = title;
    this.discription = discription;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

function submitProject() {
  console.log("working submitProject");
  const input = document.getElementById("Title:");
  if (input.value.length > 20 || input.value.length < 3) {
    alert("Input invalid, maximum 20 and minimum 3 characters");
    return;
  }
  const id = submitProjectDOM();
  let project = new Project(id, input.value);
  window.projects.push(project);

  clearMainDOM();
  addSuccessDOM();
}

function submitItem() {
  console.log("working submitItem");
  const titleInput = document.getElementById("Title:");
  const discriptionInput = document.getElementById("Discription:");
  const duedateInput = document.getElementById("Due Date:");
  const priorityInput = document.getElementById("Priority:");
  const title = titleInput.value;
  const discription = discriptionInput.value;
  const duedate = duedateInput.value;
  const priority = priorityInput.value;
  const item = new Item(title, discription, duedate, priority);
  const main = document.getElementById("main");
  const id = main.getAttribute("data-project-id");
  const project = window.projects.find(function (project) {
    return id === project.id;
  });
  project.items.push(item);
  clearMainDOM();
  const btn = document.createElement("button");
  main.appendChild(btn);
  main.setAttribute("data-project-id", id);
  btn.textContent = "Add Item";
  btn.addEventListener("click", itemCreationDOM);
  appendItemsDOM();
}

export { Project, Item, submitProject, submitItem };
