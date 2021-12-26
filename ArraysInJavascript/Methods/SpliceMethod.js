// splice method
// The splice() method adds and/or removes array elements.
// The splice() method overwrites the original array.
// Syntax
    // array.splice(index, howmany, item1, ....., itemX)

// start, delete, insert

const myArray = ["item1", "item2", "item3"];

// // delete 
const deletedItem = myArray.splice(1,1);
// console.log(deletedItem);

// insert
// myArray.splice(3,0,"item4","item5");


// insert and delete
myArray.splice(1,2,"inserted item1","inserted item2");
console.log(myArray);