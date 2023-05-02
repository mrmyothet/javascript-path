// call and apply
// call an existing function and change the function context - this object

// bind
// make a copy of a function change this object

let person1 = {
  name: 'Mary',
  getName: function () {
    return this.name;
  },
};

let person2 = { name: 'John' };

let getNameCopy = person1.getName.bind(person2);

console.log(getNameCopy());
