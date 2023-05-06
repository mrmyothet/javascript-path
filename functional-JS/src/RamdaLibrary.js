/* Ramda Features 

- Emphasize a purer functoinal style 
- Immutability and side-effect free functions 
- Clean and elegant API

Pipe
Performs left to right composition 

Compose
Performs right to left 

Lodash also provide similar features 

*/

const triple = (x) => x * 3;
const cube = (x) => x * x * x;

let output;
output = R.pipe(cube, triple)(2);
// 24

output = R.compose(cube, triple)(2);
// 216

display(output);
