/* Closure 

A closure gives you access to an outer function's scope from an inner function. 
In Javascript, closures are created every time a function is created, 
at function creation time.

*/

// Outer function
const welcomeAuthor = () => {
  let name = 'Adhithi';

  // Inner function
  const autherName = () => 'Welcome' + ' ' + name;

  // return inner function
  return autherName;
};

const a = welcomeAuthor();
display(a());

// Track number of clicks on button
const updateClickCounter = () => {
  var counter = 0;
  // a private variable, that can be accessed only by incrementCounter

  // inner function
  const incrementCounter = () => counter++;

  // return inner function
  return incrementCounter;
};

const counterResults = updateClickCounter();
display(counterResults());
display(counterResults());
display(counterResults());
display(counterResults());
display(counterResults());

/* A real-world example of Functional Programming 

Redux is a real-world example, that uses functional programming paradigms and pure functions

Reducers in Redux
It takes in an old state and action and brews a new state!

function(state, action) => newState

Reducers are like coffee makers
coffee powder + water = Fresh cup of coffee 

Functions that take in current state (coffee powder) and actions (water) and 
brew a new state (fresh cup of coffee)

*/
