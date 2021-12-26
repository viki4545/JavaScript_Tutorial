// Objects
// Objects are refrence type
// arrays are good but not sufficient
// for real world data
// Objects store key(properties) value pairs
// Objects don't have index
// In javascript key(properties) are in string by default
// Booleans can be objects (if defined with the new keyword)
// Numbers can be objects (if defined with the new keyword)
// Strings can be objects (if defined with the new keyword)
// Dates are always objects
// Maths are always objects
// Regular expressions are always objects
// Arrays are always objects
// Functions are always objects
// Objects are always objects

// how to create objects

// const person = {name: "Harshit", age: 22}
const person = {
    name: "harshit",
    age: 22,
    hobbies: ["guitar", "sleeping", "listening music"]
}
// console.log(person);

// how to access data from objects
// Note:- to access properties we have to used dot notation
// Note:- There are two ways to access key(properties) of object

// Method 1:- by dot notation
    // console.log(person.name);
    // console.log(person.age);
    // console.log(person.hobbies);

// Method 2:- by bracket notation
    // console.log(person["name"]);
    // console.log(person["age"]);
    // console.log(person["hobbies"]);

// how to add key value pair to objects

// Method 1:- by dot notation
    // person.gender = "Male";
    // console.log(person);

// Method 2:- by bracket notation
    person["gender"] = "Male";
    console.log(person);
