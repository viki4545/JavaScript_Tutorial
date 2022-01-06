// loops

// get multiple items using getElements by class name
// array like object ---> indexing, length property
// const navItems = document.getElementsByClassName("nav-item");//HTMLCollection
// const navItems = document.getElementsByTagName("a");//HTMLCollection
// console.log(navItems.length);

// we can't use forEach method to iterate through HTMLCollection
// simple for loop
// for of loop
// forEach

// for(let i = 0;i < navItems.length;i++){
//     // console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "black";
//     navItem.style.fontWeight = "bold";
// }


// for(let navItem of navItems){
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "black";
//     navItem.style.fontWeight = "bold";
// }

// let navItems = document.getElementsByTagName("a");//HTMLCollection
// navItems = Array.from(navItems);
// console.log(Array.isArray(navItems));
// navItems.forEach(navItem => {
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "black";
//     navItem.style.fontWeight = "bold";
// });


// console.log(typeof navItems);
// console.log(Array.isArray(navItems));


// get multiple items using querySelectorAll

// const navItems = document.querySelectorAll(".nav-item");//Nodelist
// console.log(navItems);

let navItems = document.querySelectorAll("a");//Nodelist
console.log(navItems);

// we can use forEach method to iterate through NodeList
// simple for loop
// for of loop
// forEach

    // for(let i = 0;i < navItems.length;i++){
    //     // console.log(navItems[i]);
    //     const navItem = navItems[i];
    //     navItem.style.backgroundColor = "#fff";
    //     navItem.style.color = "black";
    //     navItem.style.fontWeight = "bold";
    // }

    // for(let navItem of navItems){
    //     navItem.style.backgroundColor = "#fff";
    //     navItem.style.color = "black";
    //     navItem.style.fontWeight = "bold";
    // }

    navItems.forEach(navItem => {
        navItem.style.backgroundColor = "#fff";
        navItem.style.color = "black";
        navItem.style.fontWeight = "bold";
    });