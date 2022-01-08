// keypress event

// const body = document.body;
// body.addEventListener("keypress", (event)=> {
//     console.log(event.key);
// });

// Mouseover event

const mainButton = document.querySelector(".btn-headline");

mainButton.addEventListener("mouseover", ()=> {
    console.log("moseover event occurred!!!!");
});

mainButton.addEventListener("mouseleave", ()=> {
    console.log("moseleave event occurred!!!!");
});

