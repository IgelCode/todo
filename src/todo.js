import { clearMainDOM, addSuccessDOM, submitProjectDOM } from "./domstuff.js";

class Project {
  items = [];
  constructor(title) {
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

function newProject() {
  let projectTest = new Project("Workout");
  project.projects.push(projectTest);
}

function submitProject() {
  console.log("working submitProject");
  submitProjectDOM();
  clearMainDOM();
  addSuccessDOM();
}

function submitItem() {
  console.log("working submitItem");
}

export { Project, Item, newProject, submitProject, Test };
