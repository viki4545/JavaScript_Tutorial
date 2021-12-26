// for in loop in array
// for in statement loops through the key(properties) of an Object
// The for in loop iterates over a person object
// Each iteration returns a key (x)
// The key is used to access the value of the key
// The value of the key is person[x]

const fruits = ["apple", "mango", "grapes", "banana"];
const fruits2 = [];

for(let index in fruits){
    fruits2.push(fruits[index].toUpperCase());
}
console.log(fruits2);