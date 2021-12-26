// Arrow function

// const singHappyBirthday = () => {
//     console.log("happy birthday to you .......");
// }
// singHappyBirthday();

// const sumThreeNumbers = (num1, num2, num3) => {
//     return num1 + num2 + num3;
// }
// console.log(sumThreeNumbers(2,3,4));

// const checkOddEven = num => {
//     if(num % 2 === 0){
//         console.log("even");
//     }else{
//         console.log("odd");
//     }
// }
// checkOddEven(3);

// Method 1:-
// const firstChar = (anyString) => {
//     return anyString[0];
// }

// Method 2:-
// const firstChar = anyString => anyString[0];
// console.log(firstChar("abc"));

const findTargetIndex = (arr, target) => {
    for(let i = 0;i<arr.length;i++){
        if(arr[i] === target){
            return i;
        }
    }
    return -1;
}
console.log(findTargetIndex([4,5,6,4,7], 4));