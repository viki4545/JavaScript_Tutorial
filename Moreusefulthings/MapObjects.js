// Map Objects
// map is an iterable 
// store data in ordered fashion
// store key value pair (like object)
// duplicate keys are not allowed like objects

// different between maps and objects
// objects can only have string or symbol as key
// in maps you can use anything as key
// like array, number, string

// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.
// A Map has a property that represents the size of the map

// object literal
// key -> string or
// key -> symbol
// const person = {
//     firstName : "harshit",
//     age: 7,
//     1:"one"
// }
// for(let key in person){
//     console.log(typeof key);
// }
// // console.log(person.firstName);
// // console.log(person["firstName"]);


// map store key value pair
// const person = new Map();
// person.set("firstName", "harshit");
// person.set("age", 7);
// person.set(1, "one");
// person.set([1,2,3], "onetwothree");
// person.set({1: "one"}, "onetwothree");
// console.log(person);
// // console.log(person.get(1));
// for(let key of person.keys()){
//     console.log(key, typeof key);
// }

// for(let [key, value] of person){
//     console.log(key, value);
// }

const person1 = {
    id: 1,
    firstName: "harshit"
}
const person2 = {
    id: 2,
    firstName: "harsh"
}

const ans = new Map();
ans.set(person1, {age: 8, gender: "male"});
ans.set(person2, {age: 10, gender: "male"});
console.log(ans);
console.log(person1.firstName);
console.log(ans.get(person1).gender);
console.log(person2.firstName);
console.log(ans.get(person2).gender);

// const person = new Map([["firstName", "harshit"],["age", 7]]);
// console.log(person);
