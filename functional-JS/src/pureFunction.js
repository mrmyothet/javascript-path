/* Pure Function 

1. Given the same input, always returns the same output 
2. Produces not side-effects.

*/

// Pure function
// const topic = (t) => `You are learning ${t}`;

// Impure function - having side effect
// Side-Effect is an interaction with the outside world

let greeting = 'Welcome!';
const topic = (t) => `${greeting}You are learning ${t}`;
// variable greeting in topic function is side effect

display(topic('pure functions'));

/* Side Effects 

- Changing or mutating the input 
- Querying or Updating the DOM object 
- Making API calls via network (fetch/xhr)
- Logging 
- Reading/Writing to a file
- Reading from a global state

*/
