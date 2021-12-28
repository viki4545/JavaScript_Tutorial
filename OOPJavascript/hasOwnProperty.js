// hasOwn property

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

for(let key in user1){
    // console.log(key);
    // hasOwnProperty(key) only return the key of the user1 not the prototype of user1
    if(user1.hasOwnProperty(key)){
        console.log(key);
    }
}