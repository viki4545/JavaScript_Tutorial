// filter method 
// The filter() method creates a new array filled with elements that pass a test provided by a function.
// The filter() method does not execute the function for empty elements.
// The filter() method does not change the original array.
// Syntax
    // array.filter(function(currentValue, index, arr), thisValue)

const numbers = [1,3,2,6,4,8];

// by callback function declare outside filter function
    // const isEven = function(number){
    //     return number % 2 === 0;
    // }
    // const ansEven = numbers.filter(isEven);
    // console.log(ansEven);

    // const isOdd = function(number){
    //     return number % 2 !== 0;
    // }
    // const ansOdd = numbers.filter(isOdd);
    // console.log(ansOdd);

// by callback function declare inside filter function
    // by anonymous function 
        // const ansEven = numbers.filter(function(number){
        //     return number % 2 === 0;
        // });
        // console.log(ansEven);

    // by arrow function
        const ansOdd = numbers.filter( (number) => {
            return number % 2 !== 0;
        });
        console.log(ansOdd);