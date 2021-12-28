
class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    static classInfo(){
        return 'this is personclass';
    }
    static desc = "static property";
    // get keyword make the method behave like property
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(fullName){
        const [firstName,lastName] = this.fullName.split()
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const pe1 = new Person("harshit","sharma",8);
const info = Person.classInfo();
console.log(pe1);
console.log(info);