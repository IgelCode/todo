import { clearMainDOM, addSuccessDOM, submitProjectDOM } from "./domstuff.js";

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

const Test = {
  title: "Work out",
  discription: "Do a Workout",
  dueDate: "01.01.1984",
  priority: "high",
};

function submitProject() {
  console.log("working submitProject");
  const input = document.getElementById("Title:");
  if (input.value.length > 20) {
    alert("Input too long, maximum 20 characters");
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
  const title = document.getElementById("Title:");
  const discription = document.getElementById("Discription:");
  const duedate = document.getElementById("Due Date:");
  const priority = document.getElementById("Priority:");
  const item = new Item(title, discription, duedate, priority);
  const project = window.projects.find();
}

export { Project, Item, newProject, submitProject, Test, submitItem };
