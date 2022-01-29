// Callbacks
function addTwoNumbers(num1,num2,onSuccess,onFaliure){
    if(typeof num1 === "number" && typeof num2 === "number"){
        onSuccess(num1,num2);
    }else{
        onFaliure();
    }
}

addTwoNumbers(4,5,(num1,num2) => {
    console.log(num1+num2);
}, () => {
    console.log("Wrong data type");
});
