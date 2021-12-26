// template string 
    let age = 22;
    let firstName = "harshit";

    //normal way example
    // "my name is harshit and my age is 22"
    // let aboutMe = "my name is " + firstName + " and my age is 22.";

    // template string(${variableName}) way example
    // template string is used when you dont want hardcoded value
    // and you want the value from variable
    let aboutMe = `my name is ${firstName} and my age is ${age}`;
    console.log(aboutMe);