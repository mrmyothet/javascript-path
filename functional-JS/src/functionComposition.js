/* Why Function Composition

- Less code 
- Improve code readability 
- Chain of functions, and can easily remove a link

Framework like React, 
use composition by wrapping a component around another component
 
*/

const compose = (f, g) => (x) => f(g(x));

const getAge = (user) => user.age;
const isAllowedAge = (age) => age >= 21;

const user = { name: 'Adam', age: 25 };
const isUserAllowedToDrink = compose(isAllowedAge, getAge);
// right to left execution

display(isUserAllowedToDrink(user));
