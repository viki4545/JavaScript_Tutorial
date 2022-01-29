// callbacks , callback hell, pyramid of doom
// asynchronous programming
const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");



// callback hell
// setTimeout(() => {
//     heading1.textContent = "One";
//     heading1.style.color = "violet";
//     setTimeout(() => {
//         heading2.textContent = "Two";
//         heading2.style.color = "purple";
//         setTimeout(() => {
//             heading3.textContent = "Three";
//             heading3.style.color = "red";
//             setTimeout(() => {
//                 heading4.textContent = "Four";
//                 heading4.style.color = "pink";
//                 setTimeout(() => {
//                     heading5.textContent = "Five";
//                     heading5.style.color = "green";
//                     setTimeout(() => {
//                         heading6.textContent = "Six";
//                         heading6.style.color = "blue";
//                         setTimeout(() => {
//                             heading7.textContent = "Seven";
//                             heading7.style.color = "brown";
//                         }, 1000);
//                     }, 2000);
//                 }, 2000);
//             }, 1000);
//         }, 2000);
//     }, 2000);
// }, 1000);

function changeText(element, text, color, time, onSuccess, onFaliure){
    setTimeout(() => {
        if(element){
            element.textContent = text;
            element.style.color = color;
            if(onSuccess){
                onSuccess();
            }
        }else{
            if(onFaliure){
                onFaliure();
            }
        }
    }, time);
}

// Pyramid of doom
changeText(heading1, "One", "voilet", 1000, () => {
    changeText(heading2, "Two", "purple", 2000, () => {
        changeText(heading3, "Three", "red", 2000, () => {
            changeText(heading4, "Four", "pink", 1000, () => {
                changeText(heading5, "Five", "green", 3000, () => {
                    changeText(heading6, "Six", "blue", 2000, () => {
                        changeText(heading7, "Seven", "brown", 1000, () => {
                            changeText(heading8, "Eight", "cyan", 1000, () => {
                                changeText(heading9, "Nine", "orangered", 1000, () => {
                                    changeText(heading10, "Ten", "aquablue", 1000, () => {
                            
                                    }, () => {console.log("element does not exist.");})                            
                                }, () => {console.log("element does not exist.");})
                            }, () => {console.log("element does not exist.");})
                        }, () => {console.log("element does not exist.");})                    
                    }, () => {console.log("element does not exist.");})                
                }, () => {console.log("element does not exist.");})            
            }, () => {console.log("element does not exist.");})        
        }, () => {console.log("element does not exist.");})
    }, () => {console.log("element does not exist.");})
}, () => {console.log("element does not exist.")});

