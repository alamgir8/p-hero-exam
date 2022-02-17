//ludo number printing

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(getRandomNumber(1, 6));

//serial name with alphabetically

const name = ['Alamgir', 'Alamin', 'Sakib', 'Faruk'];

console.log(name.sort());

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
