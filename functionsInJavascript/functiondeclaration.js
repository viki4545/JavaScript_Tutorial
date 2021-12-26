//function declaration

function singHappyBirthday(){
    console.log("happy birthday to  you .....");
}

function sumThreeNumbers(num1, num2, num3){
    console.log(num1+num2+num3);
}

// odd or even
// function checkOddEven(num){
//     if(num%2 === 0){
//         console.log("even");
//     }else{
//         console.log("odd");
//     }
// }
// console.log(checkOddEven(4));

// function to input string and output first character
// function firstChar(anyString){
//     return anyString[0];
// }
// console.log(firstChar("abc"));

// function to input array & target and return the index of target
function findTarget(arr , target){
    for(let i = 0;i < arr.length;i++) {
        if(arr[i] === target){
            return i;
        }
    }
    return -1;
}

console.log(findTarget([1,2,3,4,5], 3));