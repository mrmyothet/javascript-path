/*  reduce 

- run a reducer callback function over all elements in array 
- run in ascending-index order, and accumulates them into a single value 
- reduce an array to a single value 

reduce() is a central concept in FP. 
It does not mutate the array on which it is called. 
But function provided as callbackFn can

*/

const initialArray = [1, 2, 3, 4, 5];

const multiply = initialArray.reduce(
  (accumulator, currentValue) => accumulator * currentValue
);

display(initialArray);
display('Reducer results: ' + multiply);

display([1, 2, , 4].reduce((a, b) => a + b)); // 7
// can handle empty or missing element

display([1, 2, undefined, 4].reduce((a, b) => a + b)); // NaN
// cannot skip undefined value
