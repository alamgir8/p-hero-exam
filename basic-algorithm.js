//Convert Celsius to Fahrenheit

const convertToFahrenheit = (celsius) => {
  let fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
};

console.log(convertToFahrenheit(30));

//Reverse a String
const reverseString = (str) => {
  return str.split('').reverse().join('');

  //second method

  //   let reversedStr = '';
  //   for (let i = str.length - 1; i >= 0; i--) {
  //     reversedStr += str[i];
  //   }
  //   return reversedStr;
};

console.log(reverseString('hello'));

//Factorialize a Number
const factorialize = (num) => {
  //   let product = 1;
  //   for (let i = 2; i <= num; i++) {
  //     product *= i;
  //   }
  //   return product;

  //second method

  //   if (num === 0) {
  //     return 1;
  //   }
  //   return num * factorialize(num - 1);

  //third
  return num === 0 ? 1 : num * factorialize(num - 1);
};

console.log(factorialize(10));

//find the longest word in a sentence

const findLongestWordLength = (str) => {
  //first method
  return str.split(' ').reduce((long, word) => Math.max(long, word.length), 0);

  //second method

  // return Math.max(...str.split(' ').map((word) => word.length));
};

console.log(
  findLongestWordLength('The quick brown fox jumped over the lazy dog')
);

//Return Largest Numbers in Arrays

const largestNumberInArray = (arr) => {
  //first method
  // return arr.map((group) => {
  //   return group.reduce((preV, currV) => (currV > preV ? currV : preV));
  // });
  //second method
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNumber = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    result[i] = largestNumber;
  }
  return result;
};

console.log(
  largestNumberInArray([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);

//Confirm the Ending
const confirmEnding = (str, target) => {
  //first method
  // return str.slice(str.length - target.length) === target;

  //second method
  return str.slice(-target.length) === target;
};

console.log(confirmEnding('Bastian', 'n'));
