// Events behind the scenes

console.log("script start !!!!!!!!!");
const allButtons = document.querySelectorAll(".my-buttons button");

allButtons.forEach((button)=>{
    button.addEventListener("click", (event)=> {
        let num = 0;
        for(let i = 0;i<=1000000000;i++){
            num += i;
        }
        console.log(event.currentTarget.textContent, num);
    })
});

let outerVar = 0;
for(let i =0; i<= 1000000000; i++){
    outerVar += i;
}
console.log("value of outer variable is ", outerVar);
console.log("script end!!!!")