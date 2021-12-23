// difference between dot and bracket notation
const key = "email";
const person = {
    name: "harshit",
    age: 22,
    "person hobbies": ["guitar", "sleeping", "listening music"]
}

// console.log(person["person hobbies"]);
// by dot notation it insert the properties name key to the person.
// person.key = "harshitvashist@gmail.com";

// by bracket notation it insert the key value the properties name email to the person.
// this is the plus point of bracket notation.
person[key] = "harshitvashist@gmail.com";
console.log(person);

