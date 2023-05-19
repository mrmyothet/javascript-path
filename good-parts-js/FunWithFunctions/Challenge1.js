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

let add_ltd = limit(add, 2);
console.log('add_ltd(3, 4)', add_ltd(3, 4));
console.log('add_ltd(3, 5)', add_ltd(3, 5));
console.log('add_ltd(3, 6)', add_ltd(3, 5));

/* 

Write a from function that produces a generator 
that will produce a series of values 
var index = from(0);
index() // 0
index() // 1
index() // 2

*/

function from(x) {
  let privateVariable = x;
  return function () {
    return privateVariable++;
  };
}

/*

function from(start) {
  return function () {
    var next = start;
    start += 1;
    return next;
  };
}

*/

let index = from(0);
console.log('from(0)');
console.log('index()', index());
console.log('index()', index());
console.log('index()', index());

/*

Write a to function that takes a generator and an end value, 
and returns a generator that will produce numbers up to that limit
var index = to(from(1), 3);
index() // 1
index() // 2
index() // undefined 

*/

function to(f, limit) {
  return function () {
    let next = f();
    if (next < limit) {
      return next;
    }
  };
}

/*

function to(gen, end) {
  return function () {
    var value = gen();
    if (value < end) {
      return value;
    }
    return undefined;
  };
}

*/

index = to(from(1), 3);
console.log('to(from(1), 3)');
console.log('index()', index());
console.log('index()', index());
console.log('index()', index());

/*
Write a fromTo function that produces a generator 
that will produce values in a range
var index = fromTo(0, 3);
index() //0
index() //1
index() //2
index() //undefined
*/

function fromTo(start, end) {
  let next = start;
  return function () {
    if (next < end) {
      return next++;
    }
    return undefined;
  };
}

/*
function fromTo(start, end) {
  return to(from(start), end);
}
*/

// Don't do the hard way,
// Let the functions do the work

index = fromTo(0, 3);

console.log('fromTo(0, 3)');
console.log('index()', index());
console.log('index()', index());
console.log('index()', index());
console.log('index()', index());

/*
Wriate an element function that takes an array and a generator and 
returns a generator that will produce elements from the array
var ele = element(['a', 'b', 'c', 'd'], fromTo(1,3));
ele() // 'b'
ele() // 'c'
ele() // undefined
*/

/*
function element(arr, gen) {
  return function () {
    return arr[gen()];
  };
}
*/

/*
function element(array, gen) {
  return function () {
    let index = gen();
    if (index !== undefined) {
      return array[index];
    }
  };
}
*/

/*
let arr = ['a', 'b', 'c', 'd'];
let ele = element(arr, fromTo(1, 3));

console.log('element(arr, fromTo(1,3))');
console.log('ele()', ele());
console.log('ele()', ele());
console.log('ele()', ele());
*/

/*
Modify the element function so that the generator argument is optional. 
If a generator is not provided, 
then each of the elements of the array will be produced.
var ele = element(array);
ele() // 'a'
ele() // 'b'
ele() // 'c'
ele() // 'd'
ele() // undefined
*/

function element(array, gen) {
  let index = 0;
  return function () {
    if (gen === undefined) {
      index = index + 1;
      if (index > array.length) {
        return undefined;
      }
      return array[index - 1];
    } else {
      index = gen();
      if (index !== undefined) {
        return array[index];
      }
    }
  };
}

/*
function element(array, gen) {
  if (gen === undefined) {
    gen = fromTo(0, array.length);
  }
  return function () {
    let index = gen();
    if (index !== undefined) {
      return array[index];
    }
  };
}
*/

// Don't do the hard way,
// Let the functions do the work

let arr = ['a', 'b', 'c', 'd'];
let ele = element(arr);
console.log('element(arr)');
console.log('ele()', ele());
console.log('ele()', ele());
console.log('ele()', ele());
console.log('ele()', ele());
console.log('ele()', ele());

/*

Write a collect function that takes a generator and an array and 
produces a function that will collect the results in the array.
var array = [], 
  col = collect(fromTo(0,2), array);
col() // 0
col() // 1
col() // undefined 
array // [0, 1]

*/
function collect(gen, array) {
  return function () {
    let value = gen();
    if (value !== undefined) {
      array.push(value);
    }
    return value;
  };
}

console.log('collect(fromTo(0, 2), array');
var array = [],
  col = collect(fromTo(0, 2), array);
col();
col();
col();
console.log(array);

/*

Write a filter function that takes a generator and a predicate and 
produces a generator that produces only the values approved by the predicate. 

var fil = filter(fromTo(0, 5), function third(value) {
  return value % 3 === 0;
});
fil() // 0
fil() // 3
fil() // undefined 

*/

function filter(gen, predicate) {
  return function () {
    var value;
    do {
      value = gen();
    } while (value !== undefined && !predicate(value));
    return value;
  };
}

// ES6
function filter(gen, predicate) {
  return function recur() {
    var value = gen();
    if (value === undefined || predicate(value)) {
      return value;
    }
    return recur();
  };
}

var fil = filter(fromTo(0, 5), function third(value) {
  return value % 3 === 0;
});

console.log('filter(fromTo(0, 5), predicate');
console.log(fil());
console.log(fil());
console.log(fil());

/*

Write a concat function that takes two generators and 
produces a genertor that combines the sequences.

var con = concat(fromTo(0, 3), fromTo(0, 2));
con();  // 0
con();  // 1
con();  // 2
con();  // 0
con();  // 1
con();  // undefined

*/

function concat(gen1, gen2) {
  return function () {
    var value = gen1();
    if (value === undefined) {
      return gen2();
    }
    return value;
  };
}

/*

function concat(gen1, gen2) {
  var gen = gen1;
  return function () {
    var value = gen();
    if (value !== undefined) {
      return value;
    }
    gen = gen2;
    return gen();
  };
}

*/

/* 

function concat(...gens) {
  var next = element(gens),
    gen = next();
  return function recur() {
    var value = gen();
    if (value === undefined) {
      gen = next();
      if (gen !== undefined) {
        return recur();
      }
    }
    return value;
  };
}

*/

var con = concat(fromTo(0, 3), fromTo(0, 2));

console.log('concat(fromTo(0, 3), fromTo(0, 2))');
console.log('con() ', con());
console.log('con() ', con());
console.log('con() ', con());
console.log('con() ', con());
console.log('con() ', con());
console.log('con() ', con());
