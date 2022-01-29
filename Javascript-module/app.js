import { firstName as fname } from "./utils/fname.js";
import { age } from "./utils/age.js";
import Person,{Person2,hello} from "./utils/Person.js";

console.log(fname,age);

const person1 = new Person("John","doe", 22);
person1.info();
console.log(person1);

const person2 = new Person2("Harshit","sharma", 23);
person2.info();
console.log(person2);

console.log(hello);