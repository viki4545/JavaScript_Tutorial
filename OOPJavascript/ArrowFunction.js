// arrow functions
// arrow function does not contains this keyword
// if this arrow function contains this keyword it takes values from surroundings(1 level up).
const user1 = {
    firstName: "harshit",
    age: 8,
    about: () => {
        console.log(this);
        console.log(this.firstName,this.age);
    }
}

user1.about(user1);