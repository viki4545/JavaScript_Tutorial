// Closures Example 4

function myFunc(){
    let count = 0;
    return function(){
        if(count < 1){
            console.log("Hi You Called me");
            count++;
        }else{
            console.log("mein already ek baar called ho chuka hoon!.");
        }
    }
}

const ans = myFunc();
ans();
ans();