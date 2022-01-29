// Function returning promise.
function ricePromise(){
    const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];
    return new Promise((resolve,reject) => {
        if(bucket.includes('vegetables') && bucket.includes('salt') && bucket.includes('rice')){
            resolve({value: "friedRice"});
        }else{
            reject("could not do it");
        }
    });
}

ricePromise().then(
    // jab promise resolve hoga tab phela callback function resolve hoga.
    (myfriedRice) => {
    console.log("lets eat", myfriedRice);
}).catch(
    // jab promise reject hoga tab dusra callback function resolve hoga.
    (error) => {
    console.log(error);
})