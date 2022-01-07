// how to get the dimension of element
// height width
const sectionTodo = document.querySelector(".todo-section");
const info = sectionTodo.getBoundingClientRect();
console.log(info);