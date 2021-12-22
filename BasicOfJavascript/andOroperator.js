// and or operator

    let firstName = "Harshit";
    let age = 17;
    // first condition
        // if(firstName[0] === "H"){
        //     console.log("your name starts with H");
        // }

    // second condition
        // if(age > 18){
        //     console.log("you are above 18");
        // }

// and operator

    // if and only if both of the condition is true then only it will return true.
    // if(firstName[0] === "H" && age > 18){
    //     console.log("Name starts with H and above 18");
    // }else{
    //     console.log("condition is not satisfies");
    // }

// or operator

    // if any one of the condition is true then it will return true.
    if(firstName[0] === "H" || age > 18){
        console.log("Name starts with H and above 18");
    }else{
        console.log("condition is not satisfies");
    }