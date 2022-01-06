// innerHtml

const headline = document.querySelector(".headline");
// console.log(headline.innerHTML);
headline.innerHTML = "<h1>Inner html changed <\h1>";
// we cannot use doublequotes under doublequotes in javascript that is why we use backslash
headline.innerHTML += "<button class = \"btn\">Learn More</button>";
console.log(headline.innerHTML);