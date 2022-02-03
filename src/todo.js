class Project {
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

export { Project, Item, Test };
