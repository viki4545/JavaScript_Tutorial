// Sets (it is iterable)
// store data
// sets also have its own methods
// No index-based access
// Order is not guaranteed
// unique items only (no duplicates allowed) 
// A JavaScript Set is a collection of unique values.
// Each value can only occur once in a Set.
// A Set can hold any value of any data type.


// const items = ["item1", "item2", "item3"];
// const numbers = new Set([1,2,3,4,5]);
// numbers.add(1);
// numbers.add(2);
// numbers.add(items);
// numbers.add(["item1", "item2", "item3"]);
// if(numbers.has(1)){
//     console.log("1 is present");
// }else{
//     console.log("1 is not present");
// }
// for (let number of numbers) {
//     console.log(number);
// }

const myArray = [1,2,4,4,5,6,5,6];
const uniqueElements = new Set(myArray);
console.log(uniqueElements);
let length = 0;
for(let elements of uniqueElements){
    length++;
}
console.log(length);
