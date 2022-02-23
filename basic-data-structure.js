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
