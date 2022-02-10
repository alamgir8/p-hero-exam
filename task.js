// Create function to convert given string to the output below

// Input
const optionRule =
  '{1069} AND ({1070} OR {1071} OR {1072}) AND {1244} AND ({1245} OR {1339}) AND {1010} AND ({1070} OR {1071} OR {1072})';

// Output Example
/* const output = {
  and: [
    1069,
    { or: [1070, 1071, 1072] },
    1244,
    { or: [1245, 1339] },
  ]
}; */

const newStr = optionRule
  .replaceAll('{', '')
  .replaceAll('}', '')
  .replaceAll('(', '')
  .replaceAll(')', '');
console.log(newStr);

let strArr = newStr.split('AND');

console.log(strArr);

let allVal = [];

strArr.forEach((value) => {
  console.log(value);
  if (value.indexOf('OR') > -1) {
    allVal = [...allVal, value];
  } else {
    allVal = [...allVal, value];
  }
});

const container = {
  and: [...allVal],
};

const output = container.and.map((value) => {
  if (value.indexOf('OR') > -1) {
    const filtered = value.split('OR');

    const strRmv = filtered.map((vl) => {
      return parseInt(vl);
    });

    return { or: strRmv };
  } else {
    return parseInt(value);
  }
});

// console.log(output);

let result = {
  and: [...output],
};

// console.log('result:', result);
