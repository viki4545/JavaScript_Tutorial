// Synchronous programming vs Asynchronous programming

// In programming, synchronous operations block instructions 
// until the task is completed,  while asynchronous operations
// can execute without blocking other operations. Asynchronous 
// operations are generally completed by firing an event or by 
// calling a provided callback function.

// Javascript is a synchronous programming language single threaded.

// SetTimeout function

// Synchronous 
// console.log("script start");

// for (let i = 0; i < 10; i++) {
//     console.log("inside for loop");
// }

// console.log("script end");

// Asynchronous 

console.log("Script start");

const id = setTimeout(() => {
    console.log("inside setTimeout");
}, 1000);

for (let i = 0; i < 100; i++) {
    console.log(".....");
}

console.log("settimeout id is ", id);
console.log("clearing timeout");
clearTimeout(id);
console.log("Script end");