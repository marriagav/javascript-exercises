const convertToCelsius = function (degrees) {
  let res = (degrees - 32) / (9 / 5);
  return Math.round(res * 10) / 10;
};

const convertToFahrenheit = function (degrees) {
  let res = degrees * (9 / 5) + 32;
  return Math.round(res * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
