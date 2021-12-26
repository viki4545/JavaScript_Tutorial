// callback function
// callbackFn is invoked with three arguments:
    // the value of the element
    // the index of the element(optional)
    // the Array object being traversed(optional)

function myFunc2(name){
    console.log("Inside func 2");
    console.log("your name is", name);
}
function myFunc(callback){
    console.log("hello there");
    callback("harshit");
}
myFunc(myFunc2);