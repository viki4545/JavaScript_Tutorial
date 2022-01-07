// intro to events
// click

const btn = document.querySelector(".btn-headline");
// method --- addEventListener
// function clickMe(){
//     console.log("You clicked me !!!");
// }

// by callback function
// btn.addEventListener("click", function clickMe(){
//     console.log("You clicked me !!!");
// });

// by arrow function
btn.addEventListener("click", ()=>{
    console.log("You clicked me !!!!");
})