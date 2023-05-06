/* map() function 
creates a new array 
populated with the results of calling a provided function 
on every element in the calling array 

*/

const initialNumbers = [1, 2, 3, 4, 5];

// const newNumbers = initialNumbers.map((number) => number + 2);

const addTwo = (number) => number + 2;
const newNumbers = initialNumbers.map(addTwo);

display('Initial Numbers: ' + initialNumbers);
display('New Numbers: ' + newNumbers);
