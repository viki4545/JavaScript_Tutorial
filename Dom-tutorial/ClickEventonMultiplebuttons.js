// Click event on multiple objects
const allButtons = document.querySelectorAll(".my-buttons button");

// forof loop
// for(let button of allButtons){
//     button.addEventListener("click", function(){
//         console.log(this.textContent);
//     })
// }

// for loop
// for(let i = 0;i<allButtons.length;i++){
//     allButtons[i].addEventListener("click", function(){
//         console.log(this.textContent);
//     })
// }

// for each loop
// allButtons.forEach(function(button){
//     button.addEventListener("click", function(){
//         console.log(this.textContent);
//     });
// });

allButtons.forEach(button => {
    button.addEventListener("click", (event)=> {
        event.target.style.backgroundColor = "yellow";
        event.target.style.color = "#333";
    })
})