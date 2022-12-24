const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (itr) {
  return itr.reduce((total, curr) => {
    return total + curr;
  }, 0);
};

const multiply = function (itr) {
  return itr.reduce((total, curr) => total * curr, 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  let accum = 1;
  for (let i = 1; i <= a; i++) {
    accum *= i;
  }
  return accum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
