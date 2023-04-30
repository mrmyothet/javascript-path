// Block Scope
// variables declared with the var keyword or
// within function declarations DO Not have block scope

let message = 'Hello';
if (message == 'Hello') {
  let message = 'Inside of block ';
  console.log(message); // Inside of block
}
console.log(message); // Hello
