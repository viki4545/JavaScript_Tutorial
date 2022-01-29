const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();
// console.log(xhr);
// Step 1
// console.log(xhr.readyState);
xhr.open("GET", URL);
// console.log(xhr.readyState);

// This method will run if any state is changing
// xhr.onreadystatechange = function(){
// //    console.log(xhr.readyState);
//     if(xhr.readyState === 4){
//         console.log(xhr);
//         const response = xhr.response;
//         const data = JSON.parse(response);
//         console.log(typeof data);
//     }
// }

// This method will run if the state is 4.
xhr.onload = function(){
    console.log(xhr.readyState);
    const response = xhr.response;
    const data = JSON.parse(response);
    console.log(data);
}

xhr.send();

