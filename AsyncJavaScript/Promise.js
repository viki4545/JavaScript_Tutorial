// Promise
// Promises are used to handle asynchronous operations in JavaScript. 
// They are easy to manage when dealing with multiple asynchronous 
// operations where callbacks can create callback hell leading to unmanageable code.
// A JavaScript Promise object can be:

//     Pending
//     Fulfilled
//     Rejected

// The Promise object supports two properties: state and result.

// While a Promise object is "pending" (working), the result is undefined.

// When a Promise object is "fulfilled", the result is a value.

// When a Promise object is "rejected", the result is an error object.

console.log("script start");
const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];

// produce promise
const friedRicePromise = new Promise((resolve,reject) => {
    if(bucket.includes('vegetables') && bucket.includes('salt') && bucket.includes('rice')){
        resolve({value: "friedRice"});
    }else{
        reject("could not do it");
    }
});


// how to consume promise
friedRicePromise.then(
    // jab promise resolve hoga tab phela callback function resolve hoga.
    (myfriedRice) => {
    console.log("lets eat", myfriedRice);
}).catch(
    // jab promise reject hoga tab dusra callback function resolve hoga.
    (error) => {
    console.log(error);
})

setTimeout(() => {
    console.log("hello from settimeout");
}, 0);

for (let i = 0; i < 100; i++) { 
    console.log(Math.random(), i);
}

console.log("Script end !!!");
