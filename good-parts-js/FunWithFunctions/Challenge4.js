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
