// Event Object

// const firstButton = document.querySelector("#one");

// firstButton.addEventListener("click", function(event){
//     console.log(event); 
// });

// jab bhi mai kisi bhi element pe event listener add hoga
// js Engine ---> line by line execute karta hai
// browser ----> js Engine + extra features
// browser ----> js Engine + WebApi

// jab browser ko pata chala ki user ne event perform kiya hai
// toh jo hum listen kar rahe hai
// browser ---- 2 kaam karega
// 1. callback function hai vo js Engine ko degi
// 2. callback function ke sath browser jo event hua hai uski info bhi dega
// ye info hamein ek object ke form mein milegi


const allButtons = document.querySelectorAll(".my-buttons button");

for(let button of allButtons){
    button.addEventListener("click", (event) => {
        console.log(event.currentTarget);
    })
}


