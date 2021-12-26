// every method
// The every() method executes a function for each array element.
// The every() method returns true if the function returns true for all elements.
// The every() method returns false if the function returns false for one element.
// The every() method does not execute the function for empty elements.
// The every() method does not change the original array

// Syntax
    // array.every(function(currentValue, index, arr), thisValue)

// const numbers = [2,4,3,8,10];

// function isEven(numbers){
//     return numbers % 2 === 0;
// }
// const ans = numbers.every(isEven);

// const ans = numbers.every((number) => number % 2 === 0);

// console.log(ans);

// callback function ---> true/false (boolean)

// every method ----> true/false (boolean)


const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 15000}
]

// check every product < 30000
const ans = userCart.every((cartItem) => cartItem.price < 30000);
console.log(ans);

