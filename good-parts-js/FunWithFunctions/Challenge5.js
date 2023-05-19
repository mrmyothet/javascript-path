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
