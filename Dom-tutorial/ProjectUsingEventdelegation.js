const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const ul = document.querySelector(".todo-list");
todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const newTodoValue = todoInput.value;
    const newLi = document.createElement("li");
    const newLiInnerHtml = `
    <span class="text">${newTodoValue}</span>
    <div class="todo-buttons">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button>
    </div>`;
newLi.innerHTML = newLiInnerHtml;
ul.append(newLi);
todoInput.value = "";
});

ul.addEventListener("click", (event) => {
    // check if user click on done button
    if(event.target.classList.contains("done")){
        const liSpan = event.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration = "line-through";
    }
    if(event.target.classList.contains("remove")){
        const targetedLi = event.target.parentNode.parentNode;
        targetedLi.remove();
    } 
});