// computed properties

const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

// computed properties
    
// Method 1:-
    // const obj = {
    //     [key1] : value1,
    //     [key2] : value2 
    // }

// Method 2:-
    const obj = {};
    obj[key1] = value1;
    obj[key2] = value2;

    console.log(obj);