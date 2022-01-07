// elem.insertAdjacentHTML(where, html)
// beforebegin;
// afterbegin;
// beforeend;
// afterend;

const todoList = document.querySelector(".todo-list");
todoList.insertAdjacentHTML("beforeend", "<li>Learn Sanskrit</li>");
// todoList.insertAdjacentHTML("afterbegin", "<li>Learn Sanskrit</li>");
// todoList.insertAdjacentHTML("beforebegin", "<li>Learn Sanskrit</li>");
// todoList.insertAdjacentHTML("afterend", "<li>Learn Sanskrit</li>");
