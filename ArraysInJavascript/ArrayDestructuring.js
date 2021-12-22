// Array Destructuring
const myArray = ["value1", "value2", "value3","value4"];
// let myVar1 = myArray[0];
// let myVar2 = myArray[1];
// console.log(myVar1);
// console.log(myVar2);

let [myvar1,myvar2,...myNewArray] = myArray;
// let myNewArray = myArray.slice(2);
console.log(myvar1);
console.log(myvar2);  
console.log(myArray);
console.log(myNewArray);