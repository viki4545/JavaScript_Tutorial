// same method in base class

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

class Dog extends Animal{
  constructor(name, age, speed){
      super(name,age);
      this.speed = speed;
  }
  eat(){
      return `Modified Eat: ${this.name} is eating`
  }
  run(){
      return `${this.name} is running at ${this.speed}`;
  }
}

// object / instance
const tommy = new Dog("tommy",3,45);
console.log(tommy);
console.log(tommy.run());
console.log(tommy.eat());