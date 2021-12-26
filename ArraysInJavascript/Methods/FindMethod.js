// find method
// The find() method returns the value of the first element that passes a test.
// The find() method executes a function for each array element.
// The find() method retuns undefined if no elements are found.
// The find() method does not execute the function for empty elements.
// The find() method does not change the original array.

const myArray = ["Hello", "cat" , "dog", "lion"];

// function isLenght3(string){
//     return string.length === 3;
// }
// const ans = myArray.find(isLenght3);
// console.log(ans);

// by arrow function
// const ans = myArray.find((string) => string.length === 3);
// console.log(ans);

const users = [
    {userId: 1, userName: "harshit"},
    {userId: 2, userName: "harsh"},
    {userId: 3, userName: "nitish"},
    {userId: 4, userName: "mohit"},
    {userId: 5, userName: "aaditya"}
];

const ans = users.find((user) => {
    return user.userId === 3
});
console.log(ans);