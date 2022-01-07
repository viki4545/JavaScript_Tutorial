// Static list vs live list

// querySelectorAll hamein static list degi
// getElementsBySomething hamein live list degi

const ul = document.querySelector(".todo-list");
// const listItems = document.querySelectorAll(".todo-list li");
const listItems = ul.getElementsByTagName("li");


const sixthli = document.createElement("li");
sixthli.textContent = "item 6";
ul.append(sixthli);
console.log(listItems);