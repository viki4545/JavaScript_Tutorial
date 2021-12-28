// Example using class keyword

class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating`;
    }
    isCute(){
        return this.age <= 1;
    }
}

// const ans1 = new Animal("Tom",2);
// console.log(ans1);
// console.log(ans1.eat());


// dog class
class Dog extends Animal{
    
}

const tommy = new Dog("tommy",3);
console.log(tommy.eat());