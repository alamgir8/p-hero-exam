//remove items using splice
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
//splice will take 3 parameter, first starting index from then how many index will remove
arr.splice(1, 4);

console.log(arr);

const colorNames = (arr) => {
  arr.splice(0, 3, 'Gray', 'Sky');
  return arr;
};

console.log(colorNames(['Red', 'White', 'Green', 'Blue', 'Yellow']));

//copy array items with slice method
const foreCast = (arr) => {
  return arr.slice(2, 4);
};
console.log(
  foreCast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms'])
);

//Copy an Array with the Spread Operator
const copyArray = (arr, num) => {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr]);
    num--;
  }
  return newArr;
};

console.log(copyArray([true, false, true], 2));

//Combine Arrays with the Spread Operator
const combineArray = (arr) => {
  let newArr = ['learning', ...arr, 'is', 'fun'];
  return newArr;
};

console.log(combineArray(['to', 'code']));

//Check For The Presence of an Element With indexOf()
const checkElement = (arr, elem) => {
  return arr.indexOf(elem) === -1 ? false : true;
};

console.log(checkElement(['squash', 'onions', 'shallots'], 'mushrooms'));

//Iterate Through All an Array's Items Using For Loops
const filteredArray = (arr, elem) => {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    arr[i].indexOf(elem) === -1 && newArr.push(arr[i]);
  }
  return newArr;
};

console.log(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 2, 9],
    ],
    3
  )
);

//Create complex multi-dimensional arrays
const nestedArray = [
  'level 1', // nestedArray[0]
  ['level 2'], //nestedArray[1][0]
  [['level 3', 'deep']], //nestedArray[2][0][0]
  [[['level 4', 'deeper']]], //nestedArray[3][0][0][0]
  [[[['level 5', 'deepest']]]], //nestedArray[4][0][0][0][0]
];

console.log(nestedArray[4][0][0][0][0]);

//Add Key-Value Pairs to JavaScript Objects
let foods = {
  apple: 25,
  orange: 32,
  plums: 28,
};

console.log(foods);

//Modify an Object Nested Within an Object
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42,
  },
};

userActivity.data.online = 45;

console.log(userActivity);
