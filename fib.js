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
