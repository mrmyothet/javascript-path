function add(first, second) {
  return first + second;
}

function mul(first, second) {
  return first * second;
}

function addf(first) {
  return function (second) {
    return first + second;
  };
}

function liftf(binary) {
  return function (first) {
    return function (second) {
      return binary(first, second);
    };
  };
}

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
