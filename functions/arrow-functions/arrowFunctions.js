/*
Arrow Functions

Introduced in ES6
Simpler way to write a function expression 

Why to use them? 
- shorter syntax 
- this derives its value from enclosing lexical scope 

Side Effects 
- behavior of this keyword 
- No arguments object 

*/

// Regular Function
let greetings = function () {
  return 'Hello World';
};
let message = greetings();
console.log(message);

// Arrow Function
// let greeting = () => {
//   return 'Hello World';
// };

let greeting = () => 'Hello World';
message = greeting();
console.log(message);
