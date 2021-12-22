// Primitive vs Reference datatypes
    // Whenever you create a variable in JavaScript, that variable 
    // can store one of two types of data, a primitive value 
    // or a reference value. 
    // If the value is a number, string, boolean, undefined, 
    // null, or symbol, it’s a primitive value. 
    // If it’s anything else (i.e. typeof object), 
    // it’s a reference value.

    // Primitive Values
    // number
    // string
    // boolean
    // undefined
    // null
    // symbol

    // Reference Values
    // anything that is "typeof" "object"
    // objects
    // arrays
    // functions

    // All primitives are immutable, i.e., they cannot be altered. 
    // It is important not to confuse a primitive itself with 
    // a variable assigned a primitive value. The variable may be 
    // reassigned a new value, but the existing value can not be 
    // changed in the ways that objects, arrays, and functions 
    // can be altered.

// Primitive types
// let num1 = 6;
// let num2 = num1;
// console.log("value of num1 is " + num1);
// console.log("value of num2 is " + num2);
// num1++;
// console.log("value of num1 after incrementing is " + num1);
// console.log("value of num2 is " + num2);


// Reference types
// array
let array1 = ["item1","item2"];
let array2 = array1;
console.log(array1);
console.log(array2);
array1.push("item3");
console.log("after pushing element to the array" , array1);
console.log(array2); 
