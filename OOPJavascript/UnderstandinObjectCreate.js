// understanding object

const obj1 = {
    key1: "value1",
    key2: "value2"
}

// in official ecmascript documentation 
// __proto__ and [[prototype]] is one and the same thing
// but prototype is purely different thing

// obj2 proto is set by Object.create()
const obj2 = Object.create(obj1); // {}
// there is one more way to create empty object
obj2.key3 = "value3";
// obj2.key2 = "unique";
console.log(obj2);

// this is happening
console.log(obj2.__proto__);