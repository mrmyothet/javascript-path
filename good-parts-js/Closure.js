// Global

/*
let names = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
];
let digitName = function (n) {
  return names[n];
};
alert(digitName(3)); // 'three'

*/

// Slow
/*
let digitName = function(n){
    let names = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
    ];
    return names[n];   
}
alert(digitName(3)); // 'three'

*/

// Closure
let digitName = (function () {
  let names = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  return function (n) {
    return names[n];
  };
})();

alert(digitName(3)); // 'three'
