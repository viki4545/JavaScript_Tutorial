// spread operator

// spread operator in array
// const array1 = [1,2,3];
// const array2 = [5,6,7];

// // const newArray = [...array1,...array2];
// const newArray = [..."abc"];
// console.log(newArray);

// spread operator in objects
const obj1 = {
    key1: "value1",
    key2: "value2",
};

const obj2 = {
    key3: "value3",
    key4: "value4"
};

// const newObject = {...obj1,...obj2,key5 : "value5"};
// const newObject = {..."abc"};
const newObject = {...["item1","item2"]};
console.log(newObject);