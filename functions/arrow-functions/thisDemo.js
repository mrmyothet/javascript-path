/*  
Behavior of This keyword 

this
refers to the owner of the function we are executing 


Unlike regular functions, 
Arrow functions do not have their own this value 
*/

let message = {
  name: 'John',

  regularFunction: function () {
    console.log('Hello', this.name); // message object
    console.log(this);
  },

  arrowFunction: () => {
    console.log('Hi', this.name);
    console.log(this); // window object
  },
};

message.regularFunction(); // Hello John
message.arrowFunction(); // Hi
