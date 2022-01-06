// closures
// A closure is the combination of a function bundled together 
// (enclosed) with references to its surrounding state (the lexical environment). 
// In other words, a closure gives you access to an outer function’s scope 
// from an inner function. In JavaScript, closures are created every 
// time a function is created, at function creation time.


// function can return functions

// function outerFunction(){
//     function innerFunction(){
//         console.log("hello world");
//     }
//     return innerFunction;
// }

// const ans = outerFunction();
// console.log(ans);
// ans();


function printFullName(firstName, lastName){
    function printName(){
        console.log(firstName, lastName);
    }
    return printName;
}

const ans = printFullName("Harshit", "sharma");
// console.log(ans);
ans();