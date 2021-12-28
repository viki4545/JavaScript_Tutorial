// call apply and bind method

function about(hobby, favMusician){
    console.log(this.firstName,this.age,hobby,favMusician);
}

const user1 = {
    firstName: "Harshit",
    age: 8
}

const user2 = {
    firstName: "mohit",
    age: 9,
}
// call
// about.call(user1,"guitar","moazrt");
 
// apply
// about.apply(user1, ["guitar", "batch"]);

// bind
const abu = about.bind(user1, "guitar", "bach");
console.log(abu);