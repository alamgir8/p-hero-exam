//ludo number printing

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(getRandomNumber(1, 6));

//serial name with alphabetically

const names = ['Alamgir', 'Alamin', 'Sakib', 'Faruk'];

console.log(names.sort());

//number serial with alphabetically
const rollNumbers = [12, 5, 13, 50, 100];

console.log(rollNumbers.sort((a, b) => a - b));

//leap year find out

const isLeapYear = (year) => {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 != 0)) {
    console.log(`${year} is a leap!`);
  } else {
    console.log(`${year} not leap year!`);
  }
};

isLeapYear(2024);

//how many vowel have in a sentence

const vowels = ['a', 'o', 'f', 'e', 'g', 'i', 'z'];

const countVowels = (sentence) => {
  let count = 0;

  const letters = Array.from(sentence);

  letters.forEach((value) => {
    if (vowels.includes(value)) {
      count++;
    }
  });
  return count;
};

console.log(countVowels('My name is Alamgir Hossain'));

//how to find duplicate value from an array
const numbers = [12, 11, 10, 5, 12, 13, 10, 5, 10, 12, 13, 15, 16, 17, 18];

const duplicate = numbers.filter((value, index, array) => {
  return array.indexOf(value) !== index;
});

console.log(duplicate);

//how to find unique number from an array

const unique = numbers.filter((value, index, array) => {
  return array.indexOf(value) === index;
});

console.log(unique);
