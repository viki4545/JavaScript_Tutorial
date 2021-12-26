// for of loop in array
// for of statement loops through the values of an iterable object.
// It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:
// Syntax
        // for (variable of iterable) {
             //   // code block to be executed
        // }
// variable - For every iteration the value of the next property is assigned to the variable. Variable can be declared with const, let, or var.

// iterable - An object that has iterable properties.

const fruits = ["apple", "mango", "grapes", "banana"];
for(let fruit of fruits){
    console.log(fruit);
}