function sum() {
  let i,
    n = arguments.length,
    total = 0;

  for (let i = 0; i < n; i += 1) {
    total += arguments[i];
  }
  return total;
}

let ten = sum(1, 2, 3, 4);
