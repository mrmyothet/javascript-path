/* flat()

- create a new array with all sub-array elements concatenated into it, 
- recursively up to the specified depth

*/

const arr1 = [1, 2, 3, 4, [5, 6], 7];
display(arr1.flat());

const arr2 = [1, 2, 3, 4, [[[5, 6]]]];
// display(arr2.flat(3));
display(arr2.flat(Infinity));
