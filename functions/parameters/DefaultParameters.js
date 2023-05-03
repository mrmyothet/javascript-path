function sayHi(name = 'World') {
  console.log('Hello', name);
}

sayHi(); // Hello World
sayHi('John'); // Hello John

// default parameter always comes after the regular parameters

function greeting(message, name = 'World') {
  console.log(message, name);
}
greeting('Hello'); // Hello World
greeting('Hi', 'John');
