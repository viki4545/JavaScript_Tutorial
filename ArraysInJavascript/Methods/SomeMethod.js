// some method
// The some() method checks if any array elements pass a test (provided as a function).
// The some() method executes the function once for each array element:
// If the function returns true, some() returns true and stops.
//     If the function returns false, some() returns false and stops.
//     The some() method does not execute the function for empty array elements.
// The some() method does not change the original array.

// Syntax
    // array.some(function(value, index, arr), this)

// const numbers = [3,5,8,10];

// if any of the no is even or odd in an array then some method will return true.
// const ans = numbers.some((number) => number%2 !== 0);
// console.log(ans);

const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 15000},
    {productId: 3, productName: "macbook", price: 250000},
]

const ans = userCart.some((cartItem) => cartItem.price > 50000);
console.log(ans);