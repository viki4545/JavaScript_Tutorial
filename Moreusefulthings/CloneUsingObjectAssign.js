// clone using Object.assign
// The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. 
// It returns the modified target object.
// Syntax
//     Object.assign(target, ...sources)

const obj = {
    key1: "value1",
    key2: "value2"
}

// Method 1:- by spread operator cloning
    // const obj2 = {...obj};
    // obj.key3 = "value3";
// Method 2:- by object.assign method cloning
    const obj2 = Object.assign({}, obj);
    obj.key3 = "value3";


console.log(obj);
console.log(obj2);