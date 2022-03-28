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
//if we use large number then it will takes so much time space to finish
console.log(gridTraveler(1, 1));
console.log(gridTraveler(3, 4));

//best gridTraveler
const bestGridTraveler = (m, n, memo = {}) => {
  const key = m + ',' + n;

  if (key in memo) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;

  memo[key] =
    bestGridTraveler(m - 1, n, memo) + bestGridTraveler(m, n - 1, memo);
  return memo[key];
};

//here m = row, n = column
//it is same function with little change uses memorize version of result
console.log(bestGridTraveler(1, 1));
console.log(bestGridTraveler(18, 18));
console.log(bestGridTraveler(25, 18));
console.log(bestGridTraveler(30, 30));

//generate target number from an array

const canSum = (targetNumber, numbers) => {
  if (targetNumber === 0) return true;
  if (targetNumber < 0) return false;

  for (let num of numbers) {
    const reminder = targetNumber - num;
    if (canSum(reminder, numbers) === true) return true;
  }
  return false;
};

console.log(canSum(7, [2, 3]));
console.log(canSum(7, [2, 3, 4, 7]));
console.log(canSum(8, [2, 3, 7, 9]));
console.log(canSum(9, [2, 3, 6]));
console.log(canSum(200, [7, 10, 20, 9, 5, 3]));
