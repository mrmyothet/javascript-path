// eval
let x = 1;
let y = 2;
console.log(eval('x + y + 1')); // 4

// parseInt
console.log(parseInt('F', 16)); // 15
console.log(parseInt('15', 10)); // 15
console.log(parseInt('Hi', 10)); // NaN

// parseFloat
console.log(parseFloat('3.99')); // 3.99
console.log(parseFloat('399')); // 399
console.log(parseFloat('x')); // NaN

// escape
console.log(escape('text')); // text
console.log(escape(' ')); // %20
console.log(escape('abc&%')); // abc%26%25

// unescape
console.log(unescape('text')); // text
console.log(unescape('%20')); //
console.log(unescape('abc%26%25')); // abc&%
