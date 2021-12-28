// Methods
// function inside object

function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}

const person = {
     firstName: "mohit",
     age: 8,
     about: personInfo
}

const person2 = {
    firstName: "harshit",
    age: 18,
    about: personInfo
}

const person3 = {
    firstName: "nitish",
    age: 28,
    about: personInfo
}

person.about();
person2.about();
person3.about();
