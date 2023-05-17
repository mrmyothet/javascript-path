// A Module Pattern

let singleton = (function () {
  let privateVariable;
  function privateFunction(x) {
    // ...privateVariable
  }
  return {
    firstMethod: function (a, b) {
      // ...privateVariable
    },
    secondMethod: function (c) {
      // ...privateFunction
    },
  };
})();
