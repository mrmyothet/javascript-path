// Function Scope
function greeting() {
  let message = 'Hello';
  let sayHi = function hi() {
    let message = 'Hi';
  };
  sayHi();
  console.log(message);
}

greeting(); // Hello
