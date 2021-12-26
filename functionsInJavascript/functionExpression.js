// function expression
// Note:- In function expression the variable name is treat as
//          function name.

// const singHappyBirthday = function(){
//     console.log("happy birthday to you ......");
// }
// singHappyBirthday();

// const sumThreeNumbers = function(num1, num2, num3){
//     return num1 + num2 + num3;
// }
// console.log(sumThreeNumbers(2,3,4));

// const checkOddEven = function (num){
//     if(num % 2 === 0){
//         console.log("even");
//     }else{
//         console.log("odd");
//     }
// }
// checkOddEven(3);

// const firstCharacter = function (anyString){
//     return anyString[0];
// }
// console.log(firstCharacter("abc"));

const findTargetIndex = function(arr, target){
    for(let i = 0;i < arr.length;i++){
        if(arr[i] === target){
            return i;
        }
    }
    return -1;
}
console.log(findTargetIndex([1,3,4,5], 4));