/* filter() 

- create a shallow copy of a portion of a given array 
- Filter down to just the elements that pass the callback function test
- Array elements which do not pass the callback function test are not included in new array

*/

const words = [
  'Courses',
  'Rating',
  'Pluralsight',
  'JavaScript',
  'Functional Programming',
];

const isWordGreaterThanSeven = (word) => word.length > 7;

const result = words.filter(isWordGreaterThanSeven);

display(words);
display(result);
