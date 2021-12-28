// new keyword

function createUser(firstName, age){
    this.firstName = firstName;
    this.age = age;
}

createUser.prototype.about = function(){
    console.log(this.firstName, this.age);
}
// const user1 = new createUser("harshit", 6);

// new keyword
// 1. it created empty object this = {}
// 2. return this 


// constructor function
// agar hum aisa function bana rahe hai jo future mein new keyword 
// laga ke call hoga toh function ka naam likhte samaye ek convention use
// karna hoga(function ka naam capital letter se shuru karo).
function CreateUser(firstName, lastName, email, age, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}

CreateUser.prototype.about = function(){
            return `${this.firstName} is ${this.age} years`
        };
CreateUser.prototype.is18 = function(){
            return this.age >= 18;
        };
CreateUser.prototype.sing = function(){
            return "toon na na na la la";
        };


const user1 = new CreateUser("Harshit", "vashsith", "harshit@gmail.com", 18, "House no, colony, pincode, state");
const user2 = new CreateUser("Harsh", "vashsith", "harsh@gmail.com", 20, "House no, colony, pincode, state");
const user3 = new CreateUser("mohit", "vashsith", "mohit@gmail.com", 22, "House no, colony, pincode, state");

console.log(user1);
console.log(user1.about());
console.log(user3.sing());
