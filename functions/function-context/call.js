let person1 = { name: 'John', age: 22 };
let person2 = { name: 'Mary', age: 26 };
let sayHi = function () {
  console.log('Hi, ', this.name);
};
let sayHiWithMessage = function (message) {
  console.log(message, 'to', this.name);
};

sayHi(); // Hi,
sayHi.call(person1); // Hi, John
sayHi.call(person2); // Hi, Mary

sayHiWithMessage.call(person1, 'message');
sayHiWithMessage.call(person2, 'message');

sayHiWithMessage.call('message', person1); // does not work
// call - first argument must be thisArg follow by other arguments
