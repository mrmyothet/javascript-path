/* Curring

Transforms a function with multiple arguments 
into several functions containing a single argument 

Wraps a function inside a function. 

f(a, b, c) => f(a)(b)(c)

Currying is a transformation of functions that translate a function.

*/

// const add = (a, b, c) => a + b + c;
// display(add(5, 10, 20));

// Curry function to add numbers
const add = (a) => (b) => (c) => a + b + c;
display(add(5)(10)(20));

const sendMessage = (greeting) => (name) => (message) =>
  `${greeting} ${name} ${message}`;

display(sendMessage('Hello')('Adhithi')('You are learning Currying'));

/*
- Could be confusing 
- Not easily understood 
- Useful for functional composition
*/
