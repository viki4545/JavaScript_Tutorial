// More about prototype 

let numbers = [1,2,3];
// // let numbers = new Array(1,2,3);
console.log(Object.getPrototypeOf(numbers));
console.log(numbers);

function hello(){
    console.log("hello");
}

// prototype
// console.log(hello.prototype);
// hello.prototype = [];
// console.log(hello.prototype);