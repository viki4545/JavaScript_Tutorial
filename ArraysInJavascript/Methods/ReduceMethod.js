// reduce method
// The reduce() method executes a reducer function for array element.
// The reduce() method returns a single value: the function's accumulated result.
// The reduce() method does not execute the function for empty array elements.
// The reduce() method does not change the original array.
// Syntax
    // array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

const numbers = [1,2,3,4,5];

// const sum = numbers.reduce((accumulator, currentValue) => {
//         return accumulator + currentValue;
// });
// console.log(sum);
// Dry run of the above program(blueprint of how the reduce method works)
                  // accumulator, currentValue,  returnValue 
// iteration1:    // 1             2              3
// iteration2:    // 3             3              6
// iteration3:    // 6             4              10
// iteration4:    // 10            5              15
   

const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 15000}
];

const Price = userCart.reduce((totalPrice,currentProduct) => {
        return totalPrice + currentProduct.price         
},0);
console.log(Price);

// Dry run of the above program(blueprint of how the reduce method works)
                  // totalPrice,   currentValue,  returnValue 
// iteration1:    // 0             {}             12000
// iteration2:    // 12000         22000          34000
// iteration3:    // 34000         15000          49000