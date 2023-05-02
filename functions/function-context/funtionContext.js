function sayHi() {
  console.log('Hi');
  console.log(this);
}
sayHi();
// Hi
// Window - global window object

// empty object variable with anonymous function

let greeting = {};
greeting.name = 'John';
greeting.sayHi = function () {
  console.log('Hi');
  console.log(this.name);
};
greeting.sayHi();
// Hi
// {sayHi: f}

// Constructor Function
function sayHi2() {
  console.log('Hi');
  console.log(this);
}
let greeting2 = new sayHi2();
// Hi
// [obj Object]
