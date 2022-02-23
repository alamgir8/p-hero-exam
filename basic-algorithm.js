//Convert Celsius to Fahrenheit

const convertToFahrenheit = (celsius) => {
  let fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
};

console.log(convertToFahrenheit(30));
