// map method in javascript
// map() creates a new array from calling a function for every array element.
// map() calls a function once for each element in an array.
// map() does not execute the function for empty elements.
// map() does not change the original array.
// Syntax
    // array.map(function(currentValue, index, arr), thisValue)

// const numbers = [3,4,6,1,8];
// const square = function(number){
//     return number * number; // it is always recommended  to return the result for using map function
//     // console.log(number * number); // it will not recommended because it will always return the array consist of undefined value
// }

// by using normal function inside map function
    // map function will always create an array to store 
    // the output of the function 
    // const squareNumber = numbers.map(square);
    // console.log(squareNumber);


// by using anonymous function inside map function
    // map function will always create an array to store 
    // the output of the function 
    // const squareNumber = numbers.map(function(number){
    //     return number * number;
    // })
    // console.log(squareNumber);

// by using arrow function inside map function
    // map function will always create an array to store 
    // the output of the function 
    // const squareNumber = numbers.map((number,index) => {
    //     return `${number*number} at index:  ${index}`;
    // })
    // console.log(squareNumber);


const users = [
    {firstName: "harshit", age: 23},
    {firstName: "mohit", age: 21},
    {firstName: "nitish", age: 22},
    {firstName: "garima", age: 20}
]

const userNames = users.map((users) => {
    return users.firstName;
});
console.log(userNames);