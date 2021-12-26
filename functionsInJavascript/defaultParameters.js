// default parameters

// by normal way
// function addTwo(a,b){
//     if(typeof(b) === "undefined"){
//         b = 1;
//     }
//     return a+b;
// }

// by default parameters way
function addTwo(a,b=0){
    return a+b;
}
const ans = addTwo(4);
console.log(ans);