const user = {
    firstName: "harshit",
    lastName: "vashistha",
    email: "harshitvashisth@gmail.com",
    age: 8,
    address: "House no, colony, pincode, state",
    about: function(){
        return `${this.firstName} is ${this.age} years`
    },
    is18: function(){
        return this.age >= 18;
    }
}
const aboutUser = user.about();
console.log(aboutUser);