### [Good Parts of JavaScript and the Web by Douglas Crockford](https://app.pluralsight.com/library/courses/good-parts-javascript-web/table-of-contents)

##### Chapter 1 - Programming Style & Your Brain

- Right Curly Brace - works well in JavaScript
- A good style can help produce better programs
- Programs must communicate clearly to people
- Use elements of good composition where applicable
- Confusion must be avoided
- Always use ===, never ==
- If there is a feature of a language that is sometimes problematic, and if it can be replaced with another feature that is more reliable, then always use the more reliable feature.
- Make your programs look like what they do
- Declare all variables at the top of the function
- Declare all functions before you call them
- Constructor functions should be named with InitialCaps, nothing else should be named with InitialCaps
- JSLint defines a professional subset of JavaScript
- WARNING! JSLint will hurt your feelings

##### Chapter 2 - And Then There was JavaScriipt

- ECMAScript
  - 1999 - ES3
  - 2009 - ES5
  - 2015 - ES6
- Where do Bad Parts come from?
  - Legacy
  - Good Intentions
  - Haste
- Objects
  - An object is a dynamic collection of properties
  - [keys] must be strings - automatic type coercion
  - Object literals
  - Prototypal Inheritance
- Number
  - Decimal fractions are approximate
  - Numbers are first class objects
  - Math object
  - NaN - NaN is not equal to anything, including NaN
  - Number.MAX_VALUE
- Strings
  - Strings are immutable
  - Use " for external strngs
  - Use ' for internal strings and characters
  - Convert a string to a number
    - Use Number function
    - Use `+` prefix operator
    - ParseInt - The radix (10) should always be used
- Arrays
  - sort - will sort by alphabetical order
  - Arrays vs Objects
    - Use objects when the name are arbitrary
    - Use arrays when the names are sequential integers
- All values are objects - Except null and undefined
- undefined
  - The default value for variables and parameters
  - The value of missing members in objects and arrays
- Use `undefined` instead of `null`, because JS language use `undefined`
- Boolean
  - `Falsy` values
    - false
    - null
    - undefined
    - "" (empty string)
    - 0
    - NaN
  - All other values are `truthy`
  - All values can be said to be boolish
- `&&` - logical and - If first operand is `truthy` then result is second operand, else result is first operand
- `||` - logical or - If first operand is `truthy` then result is first operand, else result is second operand
- `!` - logical not - If the operand is truthy, result is false, otherwise result is true
- `!!` produces booleans
- `for` loop
  - Use `forEach` or `map` method instead
- `For in`
  - Use Object.keys instead
- `Switch` statements
  - The switch values does not need to a number. It can be a string.
  - The case values can be expressions

##### Chapter 3 - Function the Ultimate

- Two pseudo parameters
  - arguments
  - this
  - Neither is recommended
- this
  - `this` parameter contains a reference to the object of invocation
  - `this` allows a method to know what object it is concerned with
  - `this` allows a single function object to service many objects
  - `this` is key to prototypal inheritance
- Invocation - There are four ways to call a function:
  - Function form
    - functionObject(arguments)
  - Method form
    - thisObject.methodName(arguments)
  - Constructor form
    - new FunctionObject(arguments)
  - Apply form
    - functionObject.apply(thisObject, [arguments])
- Closure
  - The context of an inner function includes the scope of the outer function
  - An inner function enjoys that context even after the parent functions have returned
  - Function scope works like block scope
- Module Pattern is easily transformed into a powerful constructor pattern

##### Chapter 4 - The Metamorphosis of AJAX

- Browser
  - URL -> `Fetch` -> Cache -> `Parse` -> Tree -> `Flow` -> Display List -> `Paint` -> Pixels
- Scripted Browser
  - `Flow` -> `Paint` -> `Event` -> `Script` -> `Flow again`
- DOM is massively inefficient
- The browser has an event-driven, single-threaded programming model
- Trickling and Bubbling
- Performance
  - Toching a node has a cost
  - Styling can have a big cost
  - Reflow can have a big cost
  - Repaint can have a big cost
  - Random things like nodelist can have a big cost
- In most applications, JavaScript has a small cost
- Optimization without good performance data is a waste of time
- Ajax libraries are fun and easy to make.
- How to choose? - Subject all of the candidates to JSLint
- Pendulum of Despair
  - Server oriented - The browser is a terminal
  - Browser oriented - The server is a file system
  - Seek the middle way
  - A plesant dialogue between specilized peers.
  - Minimize the volume of traffic
