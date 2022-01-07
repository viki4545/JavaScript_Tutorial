// some old methods to support poor IE
// appendChild
// insertBefore
// replaceChild
// removeChild

const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
const refrenceNode = document.querySelector(".first-todo");
li.textContent  = "Learn Sanskrit";
// ul.appendChild(li);
// ul.insertBefore(li,refrenceNode);
// ul.replaceChild(li, refrenceNode);
// ul.remove(refrenceNode);