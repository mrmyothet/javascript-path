/*

Write a function m that takes a value and an optional source string 
and returns them in an object.

*/

function m(value, source) {
  return {
    value: value,
    source: typeof source === 'string' ? source : String(value),
  };
}

let result = JSON.stringify(m(1));
console.log(result);

result = JSON.stringify(m(Math.PI, 'pi'));
console.log(result);

/*

Write a function addm that takes two m objects 
and returns an m object.

*/

function addm(m1, m2) {
  return {
    value: m1.value + m2.value,
    source: '(' + m1.source + '+' + m2.source + ')',
  };
}

function addm(a, b) {
  return m(a.value + b.value, '(' + a.source + '+' + b.source + ')');
}

result = JSON.stringify(addm(m(3), m(4)));
console.log(result);

result = JSON.stringify(addm(m(1), m(Math.PI, 'pi')));
console.log(result);

function add(first, second) {
  return first + second;
}

function mul(first, second) {
  return first * second;
}

/*

Write a function liftm that takes a binary function and a string and 
returns a function that acts on m objects 

*/

function liftm(binary, operator) {
  return function (a, b) {
    return m(
      binary(a.value, b.value),
      '(' + a.source + operator + b.source + ')'
    );
  };
}

var addm = liftm(add, '+');
result = JSON.stringify(addm(m(3), m(4)));
console.log(result);

result = JSON.stringify(liftm(mul, '*')(m(3), m(4)));
console.log(result);

/* 

Modify function liftm so that the functions it produces can accept 
arguments that either numbers or m objects 

*/

function liftm(binary, operator) {
  return function (a, b) {
    let first = typeof a === 'number' ? a : a.value;
    let second = typeof b === 'number' ? b : b.value;
    let firstSource = typeof a === 'number' ? a : a.source;
    let secondSource = typeof b === 'number' ? b : b.source;

    return m(
      binary(first, second),
      '(' + firstSource + operator + secondSource + ')'
    );
  };
}

function liftm(binary, op) {
  return function (a, b) {
    if (typeof a === 'number') {
      a = m(a);
    }
    if (typeof b === 'number') {
      b = m(b);
    }
    return m(binary(a.value, b.value), '(' + a.source + op + b.source + ')');
  };
}

var addm = liftm(add, '+');
result = JSON.stringify(addm(3, 4));
console.log('addm(3, 4)');
console.log(result);

result = JSON.stringify(addm(m(3), 4));
console.log('addm(m(3), 4))');
console.log(result);
