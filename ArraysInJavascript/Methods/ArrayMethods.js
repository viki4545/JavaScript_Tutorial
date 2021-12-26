// important array methods

// const numbers = [4,2,5,8];

// function multiply(numbers, index){
//     console.log(`index is ${index} number is ${numbers}`);
//     // console.log(`${numbers}*2 = ${numbers*2}`);
// }

// Method 1:- by normal for-loop
// for(let i = 0;i<numbers.length;i++){
//     multiply(numbers[i],i)
// }

// Method 2:- by for each loop 
// numbers.forEach(function(numbers,index){
//     console.log(`index is ${index} number is ${numbers}`);
// });

// numbers.forEach(function(numbers){
//     console.log(`${numbers}*2 = ${numbers*2}`);
// })


const users = [
    {firstName: "harshit", age: 23},
    {firstName: "mohit", age: 21},
    {firstName: "nitish", age: 22},
    {firstName: "garima", age: 20}
]

// users.forEach(function(user){
//     console.log(user.firstName,": ", user.age);
// })

users.forEach((user, index) => {
    console.log(user.firstName,": ", user.age , "at ", index);
})

// for(let user of users){
//     console.log(user.firstName,": ", user.age);
// }
