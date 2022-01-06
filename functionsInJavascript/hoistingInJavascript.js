// hoisting in javascript
// Hoisting is JavaScript's default behavior of moving declarations to the top.

// JavaScript Declarations are Hoisted
// In JavaScript, a variable can be declared after it has been used.
// In other words; a variable can be used before it has been declared.

// The let and const Keywords
// Variables defined with let and const are hoisted to the top of the block, but not initialized.
// Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.
// Using a let variable before it is declared will result in a ReferenceError.
// The variable is in a "temporal dead zone" from the start of the block until it is declared


// this example is running because it is a function
// declartion and is called hoisting
// hello();
// function hello(){
//     console.log("hellow world!!!");
// }

// this example is giving error because 
// hoisting is working wrt function declaration only
// hello2();
// const hello2 = function() {
//     console.log("hello world !!");
// }

// console.log(hello);
// const hello = "hello world";
// console.log(hello);
