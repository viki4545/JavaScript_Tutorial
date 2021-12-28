// getters and setters

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    // get keyword make the method behave like property
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    setName(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const pe1 = new Person("harshit", "sharma",21);
// console.log(pe1.fullName);
console.log(pe1.firstName);
console.log(pe1.lastName);

// pe1.setName("mohit", "vashistha");
// or
// pe1.firstName = "mohit";
// pe2.lastName = "vashistha";
// console.log(pe1.firstName);
// console.log(pe1.lastName);

pe1.fullName = "mohit vashistha";
console.log(pe1);
