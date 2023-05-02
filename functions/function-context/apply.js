function introduction(name, profession) {
  console.log('My name is ', name, 'and I am a ', profession, '.');
  //   console.log(this);
}

introduction('John', 'student');

// apply - array input with similar elements
// need to provide array as argument
introduction.apply(undefined, ['Marry', 'Lawyer']);

// call - individual arguments of varying type
introduction.call(undefined, 'James', 'artist');

// call and apply
// call an existing function and change the function context - this object
