// What is prototype
function hello(){
    console.log("hello world");
}

// const hello = ["value1"];

// javascript function ===> function + object
// console.log(hello.name);

// you can add your own properties
// hello.myOwnProperty = "very unique value"
// console.log(hello.myOwnProperty);

// name property ---> tells function name;


// function provides more usefull propertis.

// function  provides freespace
// actual mein free space jaisa kuch hota nahi hai 
// free space mein empty object{} ko bol raha hai
// sirf samajne ke liye aapko
// only functions provides prototype property

hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.string = function(){
    return "lalala";
};
console.log(hello.prototype.string());
