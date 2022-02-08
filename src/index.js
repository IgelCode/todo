import "./style.css";
import { newProjectDOM, openProjectDOM } from "./domstuff.js";

const newProjectBtn = document.getElementById("newproject");
newProjectBtn.addEventListener("click", newProjectDOM);

window.projects = [];

if (sessionStorage.length > 0) {
  let array = JSON.parse(sessionStorage.getItem("projects"));
  window.projects = array;

  for (let i = 0; i < window.projects.length; i++) {
    let nav = document.getElementById("nav");
    let text = document.createElement("p");
    text.textContent = window.projects[i].title;
    text.dataset.id = window.projects[i].id;
    text.className = "projectNav";
    nav.appendChild(text);
    text.addEventListener("click", openProjectDOM);
  }
}
