// parameter destructuring

// object
// recat

const person =  {
    firstName: "Harshit",
    gender: "male"
}

// function printDetails(obj) {
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }

// parameter destructuring is done in this example
function printDetails({firstName,gender,age}) {
    console.log(firstName);
    console.log(gender);
    console.log(age);
}
printDetails(person);