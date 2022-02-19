//async function

const asyncFunction = async (num) => {
  return num * num;
};

console.log(asyncFunction(10));

//promise
const newPromise = new Promise((resolve, reject) => {
  let n = 10;
  if (n % 2 === 0) {
    resolve(`${n} is even number!`);
  } else {
    reject(`${n} is't even number!`);
  }
});

newPromise.then((res) => console.log(res)).catch((err) => console.log(err));
