function gizmo(id) {
  return {
    id: id,
    toString: function () {
      return 'gizmo ' + this.id;
    },
  };
}

function hoozit(id) {
  let that = gizmo(id);

  that.test = function (testId) {
    return testId === this.id;
  };

  return that;
}
