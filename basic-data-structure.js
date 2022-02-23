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
