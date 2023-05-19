// Challenge 1

function log(arg) {
  document.writeln(arg);
}

function identity(x) {
  return x;
}

log(identity(3));

// Quiz - 1
function funky(o) {
  o = null;
}

var x = [];
funky(x);
console.log(x);
/*
A. null
B. []
C. undefined 
D. throw 
*/

// Quiz - 2
function swap(a, b) {
  var temp = a;
  a = b;
  b = temp;
}

var x = 1,
  y = 2;
swap(x, y);
console.log(x);
/*
A. 1
B. 2
C. undefined
D. throw
*/

function add(first, second) {
  return first + second;
}

function sub(first, second) {
  return first - second;
}

function mul(first, second) {
  return first * second;
}
console.log(add(3, 4));
console.log(sub(3, 4));
console.log(mul(3, 4));

/*
Write a function identityf 
that takes an argument and returns a function that returns that argument 

var three = identityf(3);
three() //3
*/
function identityf(value) {
  return function () {
    return value;
  };
}
let three = identityf(3);
console.log('three()', three());

/*
Write a function addf that adds from two invocations.
addf(3)(4) // 7
*/
function addf(first) {
  return function (second) {
    return first + second;
  };
}
console.log('addf(3)(4)', addf(3)(4));

/*
Write a function liftf 
that takes a binary function, and makes it callable with two invocations 

var addf = liftf(add);
addf(3)(4) // 7
liftf(mul)(5)(6)  // 7
*/
function liftf(binary) {
  return function (first) {
    return function (second) {
      return binary(first, second);
    };
  };
}
var addf = liftf(add);
console.log('addf(3)(4)', addf(3)(4));
console.log('liftf(mul)(5)(6)', liftf(mul)(5)(6));

// these are example of Higher Order Functions

// Challenge 2

/*
Write a function curry that takes a binary function and an argument, 
and returns a function that can take a second argument 
var add3 = curry(add, 3);
add3(4) // 7
curry(mul, 5)(6) // 30
*/

function curry(binary, first) {
  return function (second) {
    return binary(first, second);
  };
}

// function curry(binary, first) {
//   return liftf(binary)(first);
// }

var add3 = curry(add, 3);
console.log('add3(4)', add3(4));
console.log('curry(mul, 5)(6)', curry(mul, 5)(6));

/*
function currying(func) {
  var slice = Array.prototype.slice,
    args = slice.call(arguments, 1);
  return function () {
    return func.apply(null, args.concat(slice.call(arguments, 0)));
  };
}

function currying(func, ...first) {
  return function (...second) {
    return func(...first, ...second);
  };
}
*/

/*
Without writing any new functions, 
show three ways to create inc function 
var inc = ___;
inc(5)  // 6
inc(inc(5)) // 7
*/

var inc = addf(1);
var inc = liftf(add)(1);
var inc = curry(add, 1);

console.log('inc(5)', inc(5));
console.log('inc(inc(5))', inc(inc(5)));

/* 
first rule of functional programming 
let the functions do the work. 
If you've already written a function that does what you need 
You don't need to write another one.
*/

/*
Write a function twice that takes a binary function and returns a 
unary function that passes its argument to the binary function twice
add(11,11) // 22
var doubl = twice(add);
doubl(11) // 22
var square = twice(mul);
square(11) // 121
*/
function twice(binary) {
  return function (value) {
    return binary(value, value);
  };
}

console.log('add(11,11)', add(11, 11));
var doubl = twice(add);
console.log('double(11)', doubl(11));
var square = twice(mul);
console.log('square(11)', square(11));

/*
Write reverse, a function that reverses the arguments of a binary function.
var bus = reverse(sub);
bus(3, 2) // -1
*/

function reverse(binary) {
  return function (first, second) {
    return binary(second, first);
  };
}

/*
function reverse(func) {
  return function (...args) {
    return func(...args.reverse());
  };
}
*/

var bus = reverse(sub);
console.log('bus(3, 2)', bus(3, 2));

/*
Write a function composeu that takes two unary functions and 
returns a unary function that calls them both
composeu(doubl, square)(5)  // 100
*/
function composeu(f, g) {
  return function (x) {
    return g(f(x));
  };
}
console.log('composeu(doubl, square)(5)', composeu(doubl, square)(5));

/*
Write a function composeb that takes two binary functions and 
returns a function that calls them both.
composeb(add, mul)(2,3,7) // 35
*/
function composeb(f, g) {
  return function (a, b, c) {
    return g(f(a, b), c);
  };
}
console.log('composeb(add, mul)(2,3,7)', composeb(add, mul)(2, 3, 7));

/*
Write a limit function that allows a binary function 
to be called a limited number of times.
var add_ltd = limit(add, 1);
add_ltd(3, 4) // 7
add_ltd(3, 5) // undefined 
*/

function limit(f, times) {
  let n = 0;
  return function (a, b) {
    if (n < times) {
      n = n + 1;
      return f(a, b);
    } else {
      return undefined;
    }
  };
}

/*
function limit(binary, count) {
  return function (a, b) {
    if (count >= 1) {
      count -= 1;
      return binary(a, b);
    }
    return undefined;
  };
}
*/

var add_ltd = limit(add, 2);
console.log('add_ltd(3, 4)', add_ltd(3, 4));
console.log('add_ltd(3, 5)', add_ltd(3, 5));
console.log('add_ltd(3, 6)', add_ltd(3, 5));
