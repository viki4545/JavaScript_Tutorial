// async await
const URL = "https://jsonplaceholder.typicode.com/posts";

console.log("script start");

// fetch(URL)
//     .then((response) => {
//         return response.json();
//     }).then((data) => {
//         console.log(data);
//     })

// by normal function
// async function getPost(){
//     const response = await fetch(URL);
//     if(!response.ok){
//         throw new Error("Something went wrong");
//     }
//     const data = await response.json();
//     return data;
// }

// by arrow function
const getPost = async() => {
    const response = await fetch(URL);
    if(!response.ok){
        throw new Error("Something went wrong");
    }
    const data = await response.json();
    return data;
}

getPost()
    .then((mydata) => {
        console.log(mydata);
    }).catch((error) => {
        console.log(error);
    })

console.log("script end");
