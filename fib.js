const fib = (n) => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};

// console.log(fib(6));
// console.log(fib(7));
// console.log(fib(8));

//best case to use fib function
const bestFib = (n, memo = {}) => {
  if (n in memo) return memo[n];

  if (n <= 2) return 1;
  memo[n] = bestFib(n - 1, memo) + bestFib(n - 2, memo);
  return memo[n];
};

console.log(bestFib(10));
console.log(bestFib(50));

//gridTraveler
const gridTraveler = (m, n) => {
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
};

//here m = row, n = column
console.log(gridTraveler(1, 1));
console.log(gridTraveler(3, 4));

//best gridTraveler
const bestGridTraveler = (m, n, memo = {}) => {};
