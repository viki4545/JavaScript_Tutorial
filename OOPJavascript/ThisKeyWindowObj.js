// this keyword
// In a method, this refers to the owner object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), and apply() can refer this to any object.

// The "use strict" directive was new in ECMAScript version 5.
// It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.
// The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
// With strict mode, you can not, for example, use undeclared variables.
// You can use strict mode in all your programs. It helps you to write cleaner code, like preventing you from using undeclared variables.
// "use strict" is just a string, so IE 9 will not throw an error even if it does not understand it.

// window object

// console.log(window);
"use strict"
function myFunc(){
    console.log(this);
}
myFunc();