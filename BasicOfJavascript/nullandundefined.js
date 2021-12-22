// undefinded

    // let firstName;
    // console.log(typeof(firstName));
    // firstName = "harshit";
    // console.log(typeof(firstName), firstName);

// null

    // let myVariable = null;
    // console.log(myVariable);
    // myVariable = "harshit";
    // console.log(myVariable, typeof(myVariable));

    // javascript having bug that is why it is giving typeof(null) = object
    // it is have to give typeof(null) = null.
    // console.log(typeof(null)); // returning object  

// BigInt
    // why to use BigInt?
    //  -> if you want to operate or store no greater than 
    //     Number.MAX_SAFE_INTEGER.
    // Note:- you cannot perform operation one variable with datatype
    //        BigInt and another variable without datatype BigInt.
    //        If you want to perform you want to do explicit conversion.
    
    // Methods to represent bigint
    // Methods 1 :-
    let myNumber = BigInt(2342);
    
    // Methods 2 :-
    let sameMyNumber = 1283742n;

    // console.log(myNumber);
    // console.log(Number.MAX_SAFE_INTEGER);
    console.log(myNumber + sameMyNumber);