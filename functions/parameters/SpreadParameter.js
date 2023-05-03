/* 
sperad opertor 
is the opposite of how a rest parameter works 
*/

function greet(person1, person2) {
  console.log('Hello', person1, 'and', person2);
}
let names = ['John', 'Mary'];
greet(...names);

function display(char1, char2, char3, char4) {
  console.log(char1, char2, char3, char4);
}
let letters = 'abcd';
display(...letters);
