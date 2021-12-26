// block scope vs function scope

// let and const are block scope
// {
//     let firstName = "mohit";
//     console.log(firstName);
// } 
// {
//     const firstName = "harshit";
//     console.log(firstName);
// }

// function myApp(){
//     if(true){
//         let firstName = "harshit";
//         console.log(firstName);
//     }
//     // it does not print the value because
//     // let and const are block scope
//     console.log(firstName);
// }
// myApp();



// var is function scope 
// {
//     var firstName = "harshit";
// }
// console.log(firstName);

// {
//     console.log(firstName);
// }

function myApp(){
    if(true){
        var firstName = "harshit";
        console.log(firstName);
    }
    // it  print the value because
    // var are function scope
    console.log(firstName);
}
myApp();

