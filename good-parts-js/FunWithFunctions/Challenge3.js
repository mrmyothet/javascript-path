function add(first, second) {
  return first + second;
}

function sub(first, second) {
  return first - second;
}

function mul(first, second) {
  return first * second;
}

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
