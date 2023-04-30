// Problem

// let greeting = function () {
//   let message = 'Hello';
//   let getMessage = function () {
//     return message;
//   };
// };

// console.log(greeting.message); // undefined - out of scope

// Closure
let greeting = (function () {
  let message = 'Hello';
  let getMessage = function () {
    return message;
  };

  return {
    getMessage: getMessage,
  };
})();

console.log(greeting.getMessage());
