function setupCounter(val) {
  return function counter() {
    return val++;
  };
}
let counter1 = setupCounter(0);
console.log(counter1()); // 0
console.log(counter1()); // 1

let counter2 = setupCounter(10);
console.log(counter2()); // 10
console.log(counter2()); // 11
