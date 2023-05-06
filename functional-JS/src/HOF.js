/* Higher Order Functions

1. Accepts a function as an argument 
2. Returns a function 

HOF - Built-in function 
- map
- filter
- reduce

*/

// Create your own custom Higher Order Function
const add = (n1, n2) => n1 + n2;
const substract = (n1, n2) => n1 - n2;
const multiply = (n1, n2) => n1 * n2;

const compute = (mathOperation, initialValue, values) => {
  let total = initialValue;

  values.forEach((value) => {
    total = mathOperation(total, value);
  });
  return total;
};

let result = compute(add, 0, [5, 2]);
display(result);

result = compute(substract, 10, [5, 2]);
display(result);

result = compute(multiply, 1, [5, 2]);
display(result);
