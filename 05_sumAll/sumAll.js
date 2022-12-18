const sumAll = function (num1, num2) {
  if (typeof num1 != "number" || typeof num2 != "number") {
    return "ERROR";
  }
  let bigNum = Math.max(num1, num2);
  let minNum = Math.min(num1, num2);
  if (minNum < 0) {
    return "ERROR";
  }
  let res = 0;
  for (let i = minNum; i <= bigNum; i++) {
    res += i;
  }
  return res;
};

// Do not edit below this line
module.exports = sumAll;
