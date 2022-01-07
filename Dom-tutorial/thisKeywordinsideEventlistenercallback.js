// this keyword

const btn = document.querySelector(".btn-headline");

// // in normal function the value of this keyword is that 
// // own function,event,btn,etc 
// btn.addEventListener("click", function(){
//     console.log("You clicked me !!!");
//     console.log("Value of this is: ");
//     console.log(this);
// });

// in arrow function the value of this keyword is that 
// one level up from their respective function etc.
btn.addEventListener("click", ()=> {
    console.log("You clicked me !!!");
    console.log("Value of this is: ");
    console.log(this);
});