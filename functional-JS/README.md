### [Functional Programming Concepts in JavaScript by Adhithi Ravichandran](https://app.pluralsight.com/library/courses/javascript-functional-programming-concepts/table-of-contents)

- What is functional programming
- Core features of functional programming
- Function composition
- Built-in JavaScript functions
- Advanced concepts
- Javascript frameworks

Programming Paradigms

- Imperative
  - Prodcedural
  - Object-Oriented Programming
- Declarative
  - Functional
  - Mathematical
  - Reactive Programming

#### Imperative Programming

- Focus on the "How"
- State the order in which operations occur
- Procedural and Object Oriented Programming

```js
for (let i = 0; i < courses.length; i++) {
  courses[i].lastModified = new Date();
}
```

#### Declarative Programming

- Focus of "What"
- Does not state the order in which to execute operations
- Functional, Mathematical and Reactive Programming

```js
courses.map((course) => {
  course.lastModified = new Date();
  return course;
});
```

#### Key Principles

1. focus on ensuring each function does one thing well!

   - can implement in other programming paradigm,
   - Readable, Maintainable, Testable

2. Building functions for immutable variables

```js
// Functions doing more that one thing
function getCourseInformation() {
  // 1. Call API get courses information.
  // 2. Sort courses based on release date, with newest being first.
  // 3. Render the courses within the UI.
}
```

```js
//Function that does one thing well

function getCourseInfoQuery() {
  // Call API get courses information.
}

function sortCourses() {
  // Sort courses based on release date, with newest being first.
}

function renderCourses() {
  // Render the courses within the UI.
}
```

#### Immutable data is the data that cannot be changed after it is created

```js
const initialArray = ['c', 'd', 'a', 'e', 'b'];
const sortedArray = sortFunction(initialArray);
```

- sortFunction does not replace first array.
- Function returns a new array sortedArray that contains the new copy of the sorted array.
- There are two different arrays now, and the sortFunction is immutable and did not change any data.

#### Why should I use FP?

- code is consie, predictable and readable
- easier to test functional code
- results in fewer bugs
- modular code with smaller and independent units

#### FP

- function is the main unit
- data is immutable
- fewer data structures
- functions with not side effects

#### OOP

- object is the primary unit
- data is mutalbe
- more data structures
- methods with side effects

#### Paradigm for Javascript

JS supports both OOP and FP paradigms
choose paradigm suits application's use case or
use a combination of the paradigms

#### Core Features of Functional Programming

FP is the process of building software by composing pure functions,
avoiding shared state, mutable data and side effects.

- First Class Functions
- Pure Functions
- Side Effects
- Closures

#### First Class Functions

- Functions in FP are treated as a data type and can be used like any other value
- A function is treated like a data type
- Javascript supports first class functions by default
- First class functions in JS:
  - Can be assigned to regular variables
  - Passed as arguments to functions
  - Returned as results of functions
  - Included in any data structures
