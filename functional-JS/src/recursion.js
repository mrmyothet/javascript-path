/* Recursion 

- A function calling itself is recursion. 
- Needs a stopping point, if not ends up calling itself forever!

Array Method flat is recursive function 
- default stopping point - level 1

*/

// Looping approach
const incrementByOne = (number) => {
  for (let i = 0; i < 11; i++) {
    display(i);
  }
};
// incrementByOne(1);

// Recursive approach
const incrementByOneRecursive = (number) => {
  // stopping point
  if (number === 11) return;

  // recursive
  display(number);
  incrementByOneRecursive(number + 1);
};

incrementByOneRecursive(1);
