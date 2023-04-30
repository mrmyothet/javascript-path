/*
Function 
    A function is a block of organized, reusable code 
that is used to perform a single, related action 

Argument 
    An argument is a value that we pass to the function 
when we invoke it 

Parameter
    A parameter is a variable that we list as part of a function definition 

*/

function printAll() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}
printAll(1, 2, 3, 4, 5);
printAll(10, 20);
