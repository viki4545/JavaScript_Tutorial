// how to use prototype

// Solution using object.create() 

// const userMethods  = {
//     about: function(){
//         return `${this.firstName} is ${this.age} years`
//     },
//     is18: function(){
//         return this.age >= 18;
//     },
//     sing: function(){
//         return "toon na na na la la";
//     }
// }

// in this function no of times user is created that much no of times
// about & is18 function is not created because when the user is 
// created only refernce is stored in the memory because of userMethods object.
function createUser(firstName, lastName, email, age, address){
    const user = Object.create(createUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}

createUser.prototype.about = function(){
            return `${this.firstName} is ${this.age} years`
        };
createUser.prototype.is18 = function(){
            return this.age >= 18;
        };
createUser.prototype.sing = function(){
            return "toon na na na la la";
        };





const user1 = createUser("Harshit", "vashsith", "harshit@gmail.com", 18, "House no, colony, pincode, state");
const user2 = createUser("Harsh", "vashsith", "harsh@gmail.com", 20, "House no, colony, pincode, state");
const user3 = createUser("mohit", "vashsith", "mohit@gmail.com", 22, "House no, colony, pincode, state");

console.log(user1);
console.log(user1.about());
console.log(user3.sing());