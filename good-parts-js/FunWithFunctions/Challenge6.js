function addf(first) {
  return function (second) {
    return first + second;
  };
}

var inc = addf(1);

function concat(gen1, gen2) {
  return function () {
    var value = gen1();
    if (value === undefined) {
      return gen2();
    }
    return value;
  };
}

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

Make a function gensymf that makes a function that generates unique symbols.

var geng = gensymf('G'),
  genh = gensymf('H');

geng()  // 'G1'
genh()  // 'H1'
geng()  // 'G2'
genh()  // 'H2'

*/

function gensymf(sym) {
  let count = 1;
  return function () {
    return sym + count++;
  };
}

function gensymf(prefix) {
  let number = 0;
  return function () {
    number += 1;
    return prefix + number;
  };
}

var geng = gensymf('G'),
  genh = gensymf('H');
console.log(geng());
console.log(genh());
console.log(geng());
console.log(genh());

/*
  
  Write a function gensymff that takes a unary function and a seed and
  returns gensymf. 
  
  factory factory 
  
  */

function gensymff(unary, seed) {
  return function (prefix) {
    let number = seed;
    return function () {
      number = unary(number);
      return prefix + number;
    };
  };
}

var gensymf = gensymff(inc, 0),
  geng = gensymf('G'),
  genh = gensymf('H');
console.log('geng() ', geng());
console.log('genh() ', genh());
console.log('geng() ', geng());
console.log('genh() ', genh());

/*
  
  Make a function fibonaccif that returns a generator 
  that will return the next fibonacci number. 
  
  var fib = fibonaccif(0, 1);
  fib() // 0
  fib() // 1
  fib() // 1
  fib() // 2
  fib() // 3
  fib() // 5
  
  */

/*
  function fibonaccif(a, b) {
    var i = 0;
    return function () {
      var next;
      switch (i) {
        case 0:
          i = 1;
          return a;
        case 1:
          i = 2;
          return b;
        default:
          next = a + b;
          a = b;
          b = next;
          return next;
      }
    };
  }
  */

/*
  
  function fibonaccif(a, b) {
    return function () {
      var next = a;
      a = b;
      b += next;
      return next;
    };
  }
  
  */

/*
  function fibonaccif(a, b) {
    return (
      concat(concat(limit(identityf(a), 1)), limit(identityf(b), 1)),
      function fibonacci() {
        var next = a + b;
        a = b;
        b = next;
        return next;
      }
    );
  }
  */

function fibonaccif(a, b) {
  return concat(element([a, b]), function fibonacci() {
    var next = a + b;
    a = b;
    b = next;
    return next;
  });
}

var fib = fibonaccif(0, 1);
console.log('fibonaccif(0, 1)');
console.log('fib() ', fib());
console.log('fib() ', fib());
console.log('fib() ', fib());
console.log('fib() ', fib());
console.log('fib() ', fib());
console.log('fib() ', fib());
console.log('fib() ', fib());
