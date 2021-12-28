// function to create multiple object

// const user = {
//     firstName: "harshit",
//     lastName: "vashistha",
//     email: "harshitvashisth@gmail.com",
//     age: 18,
//     address: "House no, colony, pincode, state",
//     about: function(){
//         return `${this.firstName} is ${this.age} years`
//     },
//     is18: function(){
//         return this.age >= 18;
//     }
// }



// function to create multiple object

// 1. function (that function create object)
// 2. add key value pair
// 3. object ko return karega
function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function(){
        return `${this.firstName} is ${this.age} years`
    };
    user.is18 = function(){
        return this.age >= 18;
    };
    return user;
}
const user1 = createUser("Harshit", "vashsith", "harshit@gmail.com", 18, "House no, colony, pincode, state");
console.log(user1);
const is18 = user1.is18();
console.log(is18);
const about = user1.about();
console.log(about);