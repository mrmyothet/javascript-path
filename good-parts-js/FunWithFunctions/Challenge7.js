/*

Write a counter function that returns an object containing two functions
that implement an up/down counter, hiding the counter.

var object = counter(10),
  up = object.up,
  down = object.down;

up()    // 11
down()  // 10
down()  // 9
up()    // 10

*/

function counter(x) {
  let count = x;
  return {
    up: function () {
      return ++count;
    },
    down: function () {
      return --count;
    },
  };
}

/*

function counter(value) {
  return {
    up: function () {
      value += 1;
      return value;
    },
    down: function () {
      value -= 1;j
      return value;
    },
  };
}

*/

var object = counter(10),
  up = object.up,
  down = object.down;
console.log('up() ', up());
console.log('down() ', down());
console.log('down() ', down());
console.log('up() ', up());

/*

Make a revocable function that takes a binary function, and returns 
an object containing an invoke function that can invoke the binary function, 
and revoke function that disables the invoke function. 

var rev = revocable(add), 
  add_rev = rev.invoke;
add_rev(3, 4);  // 7
rev.revoke();
add_rev(5, 7);  // undefined

*/

function add(first, second) {
  return first + second;
}

function revocable(binary) {
  let isRevoked = false;
  return {
    invoke: function () {
      if (isRevoked) {
        return undefined;
      }

      return binary(arguments[0], arguments[1]);
    },
    revoke: function () {
      isRevoked = true;
    },
  };
}

/*

function revocable(binary) {
  return {
    invoke: function (first, second) {
      if (binary !== undefined) {
        return binary(first, second);
      }
    },
    revoke: function () {
      binary = undefined;
    },
  };
}

*/

var rev = revocable(add),
  add_rev = rev.invoke;
console.log('add_rev(3, 4) ', add_rev(3, 4));
console.log('rev.revoke() ', rev.revoke());
console.log('add_rev(5, 7) ', add_rev(5, 7));
