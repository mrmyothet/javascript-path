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

// Redux
// Redux is a real-world example, that uses functional programming paradigms and pure functions
