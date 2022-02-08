import {
  clearMainDOM,
  addSuccessDOM,
  submitProjectDOM,
  appendItemsDOM,
  appendButtonsDOM,
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
  const input = document.getElementById("Title:");
  if (input.value.length > 20 || input.value.length < 3) {
    alert("Input invalid, maximum 20 and minimum 3 characters");
    return;
  }
  const id = submitProjectDOM();
  let project = new Project(id, input.value);
  window.projects.push(project);
  sessionStorage.setItem("projects", JSON.stringify(window.projects));

  clearMainDOM();
  addSuccessDOM();
}

function submitItem() {
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
  project.items.unshift(item);
  sessionStorage.setItem("projects", JSON.stringify(window.projects));
  clearMainDOM();
  appendButtonsDOM();
  appendItemsDOM();
}

export { Project, Item, submitProject, submitItem };
