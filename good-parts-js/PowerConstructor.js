/* Power Constructors 

1. Make an object 
2. Define some variables and functions 
    - These become private members 
3. Augment the object with priviledged methods 
4. Return the object 

*/

function constructor(spec) {
  var that = otherMaker(spec),
    member,
    method = function () {
      //spec, member, method
    };

  that.method = method;
  return that;
}
