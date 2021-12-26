// lexical scope
// Lexical scope is the ability for a function scope to 
// access variables from the parent scope. We call the 
// child function to be lexically bound by that of the 
// parent function.

const myVar = "value1";
function myApp(){
    
    function myFunc(){
        const myVar = "value2";
        console.log("inside myFunc", myVar);
        const myFunc2 = () => {
            console.log("inside myFunc2", myVar);
        }
        myFunc2();
    }
    
    console.log(myVar);
    myFunc();
}

myApp();