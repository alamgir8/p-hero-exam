const cardDistribution = (arr) => {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let card = {};
    const dist = arr[i].district.substring(0, 2).toUpperCase();
    const currYear = arr[i].currentYear.toString().slice(-2);
    const post = arr[i].postNo.toString().substring(0, 2);
    const birth = arr[i].birthYear;
    const pad = String(i + 1).padStart(5, '0');

    card.cardNumber = dist
      .concat(currYear)
      .concat(post)
      .concat(birth)
      .concat(pad);
    card.gift = pad % 2 === 0 ? 'R' : 'W';
    card.priority = arr[i].priority;

    newArr.push(card);
  }
  newArr.sort((a, b) => {
    return a.priority < b.priority ? -1 : 1;
    // if (a.priority < b.priority) {
    //   return -1;
    // }
    // if (a.priority > b.priority) {
    //   return 1;
    // }
    // return 0;
  });
  console.log(newArr);
};

const arrayDescription = [
  {
    name: 'Mr Rashed',
    birthYear: 1999,
    currentYear: 2022,
    district: 'Dhaka',
    postNo: 1200,
    priority: 2,
  },
  {
    name: 'Mr Raju',
    birthYear: 1995,
    currentYear: 2022,
    district: 'Rajshahi',
    postNo: 1211,
    priority: 1,
  },
];

cardDistribution(arrayDescription);
