const URL = "https://jsonplaceholder.typicode.com/posts";

function sendRequest(method, url){
    return new Promise((resolve,reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method,url);
        xhr.onload = () => {
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.response);
            }else{
                reject(new Error("some thing went wrong"));
            }
        }

        xhr.onerror = () => {
            reject(new Error("network error"));
        }

        xhr.send();
    });
}

sendRequest("GET",URL)
    .then((response) => {
        const data = JSON.parse(response);
        return data;  
    })
    .then((data) => {
        const id = data[3].id;
        return id;
    })
    .then((id) => {
        const url = `${URL}/${id}`
        return sendRequest("GET", url);
    }).then((newResponse) => {
        const newdata = JSON.parse(newResponse);
        console.log(newdata);
    })
    .catch((error) => {
        console.log(error);
    })