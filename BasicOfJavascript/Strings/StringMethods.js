// String Methods
    // trim()
    // toUpperCase()
    // toLowerCase()
    // slice()

let firstName = "harshit";

// console.log(firstName.length);
// because string is immutable that is why we have to reassign
// the operation trim to variable firstName or create new variable
// to assign the operation trim.
// trim()
    // trim methods basically trim the spaces present in the variable
    // firstName = firstName.trim();
    // or
    // let Name = firstName.trim();
    // console.log(Name.length);

// toUpperCase()
    // firstName = firstName.toUpperCase();

// toLowerCase()
    // firstName = firstName.toLowerCase();

// slice()
    // start index
    // end index

    // it only return the element present between 0 to 3(endIndex-1)
    let newString = firstName.slice(0,4);
    console.log(newString);
