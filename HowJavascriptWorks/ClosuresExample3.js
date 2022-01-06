// Closures Example 3

// function myFunction(power){
//     return function(number){
//         return number ** power
//     }
// }

// const cube = myFunction(3);
// const ans = cube(2);
// console.log(ans);

// by arrow function
const myFunction = (power) => (number) => (number ** power);

const cube = myFunction(3);
const ans = cube(2);
console.log(ans);