// rest parameters

// function myFunction(a,b,...c){
//     console.log("a is", a);
//     console.log("b is", b);
//     console.log("c is", c);
// }
// // in this it print the a = 3
// // b = 4 and 
// // c = remaining element in the form of array because of rest parameter.
// myFunction(3,4,5,6,7,8,9);

function addAll(...nums){
    console.log(nums);
    let sum = 0;
    for(let num of nums){
        sum += num;
    }
    console.log(sum);
}
addAll(3,4,5,6,7,8,9);