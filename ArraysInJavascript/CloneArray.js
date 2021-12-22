// how to clone array
// Note:- slice method is faster as compared to other two for coloning the array.

let array1 = ["item1", "item2"];
// let array2 = ["item1", "item2"];

// Method 1: by slice function to clone the array
// let array2 = array1.slice(0);

// how to concatenate two arrays
// Method 2 : by concatenation to clone the array
// let array2 = [].concat(array1);

// clone array and add some element
// let array2 = array1.slice(0).concat(["item3","item4"]);

// Method 3 : by spread operator to clone the array
// let array2 = [...array1];

// clone array and add some element
let oneMoreArray = ["item3", "item4"];
let array2 = [...array1, ...oneMoreArray];

array1.push("item3");
console.log(array1 === array2);
console.log(array1);
console.log(array2);