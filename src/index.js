import "./style.css";
import { Project, Item } from "./todo.js";
import { clearMainDOM, projectCreationDOM, newProjectDOM } from "./domstuff.js";

const newProjectBtn = document.getElementById("newproject");
newProjectBtn.addEventListener("click", newProjectDOM);

window.projects = [];

if (sessionStorage.length > 0) {
  let array = JSON.parse(sessionStorage.getItem("projects"));
  window.projects = array;

  for (let i = 0; i < window.projects.length; i++) {
    console.log(window.projects.title);
    let nav = document.getElementById("nav");
    let text = document.createElement("p");
    text.textContent = window.projects[i].title; //id noch übergeben?!
    nav.appendChild(text);
  }
}
