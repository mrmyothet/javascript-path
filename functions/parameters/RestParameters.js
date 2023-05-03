// Rest parameter must be last parameter
function greet(...names) {
  names.forEach((name) => console.log('Hi', name));
}
greet('Mary', 'John', 'James');

function greeting(message, ...names) {
  console.log(message, 'everyone!');
  names.forEach((name) => console.log('Hi', name));
}
greet('Welcome', 'Mary', 'John', 'James');
