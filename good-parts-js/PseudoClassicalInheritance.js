function Gizmo(id) {
  this.id = id;
}

Gizmo.prototype.toString = function () {
  return 'gizmo' + this.id;
};

// function Hoozit(id) {
//   this.id = id;
// }

// Hoozit.prototype = new Gizmo();
// Hoozit.prototype.test = function (id) {
//   return this.id === id;
// };

// let myHoozit = new Hoozit('success');
// test = myHoozit.test;
// let result = test('success'); // false

// console.log(result);

function hoozit(id) {
  var that = new Gizmo(id);

  that.test = function (testId) {
    return testId === id;
  };

  return that;
}

myHoozit = hoozit('success');
test = myHoozit.test;
result = test('success');
console.log(result);
