//ludo number printing

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(getRandomNumber(1, 6));

//serial name with alphabetically

const name = ['Alamgir', 'Alamin', 'Sakib', 'Faruk'];

console.log(name.sort());
