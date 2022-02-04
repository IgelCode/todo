import "./style.css";
import { Project, Item, Test } from "./todo.js";
import { clearMainDOM, projectCreationDOM, newProjectDOM } from "./domstuff.js";

const newProjectBtn = document.getElementById("newproject");
newProjectBtn.addEventListener("click", newProjectDOM);
