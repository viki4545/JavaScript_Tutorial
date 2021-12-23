// how to iterate object

const person = {
    name: "harshit",
    age: 22,
    "person hobbies": ["guitar", "sleeping", "listening music"]
}

// Method 1:- by for in loop

    // for(let key in person){
    //     console.log(key,": ",person[key]);
    //     // to print the key value pairs we use template string
    //     // console.log(`${key}: ${person[key]}`);
    // }

// Method 2:- by Object.keys
    // console.log(Object.keys(person));
    // console.log(typeof Object.keys(person));
    // console.log(Array.isArray(Object.keys(person)));

    for(let key of Object.keys(person)){
        console.log(person[key]);
    }
