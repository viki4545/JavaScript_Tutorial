// use const for creating array
// Note:- when you use any reference type it is better to use 
//          const as variable type.
//          bestPractice is to use const with array
//          Arround 90% developer use this bestPractice.

// you can perform array methods on const array because 
// address of the array in the heap memory is same after 
// performing array operation but you cannot 
// declare the const with another array.
const fruits = ["apple", "mango"];
fruits.push("banana");
console.log(fruits);