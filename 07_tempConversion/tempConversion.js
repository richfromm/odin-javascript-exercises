function roundToTenths(float) {
  return Math.round(float * 10) / 10;
}

const convertToCelsius = function (tempF) {
  let tempC = (tempF - 32) * (5 / 9);
  return roundToTenths(tempC);
};

const convertToFahrenheit = function (tempC) {
  let tempF = (tempC * (9 / 5)) + 32;
  return roundToTenths(tempF);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
