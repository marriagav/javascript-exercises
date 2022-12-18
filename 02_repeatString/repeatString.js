const repeatString = function (stringToRepeat, numberOfRepeats) {
  if (numberOfRepeats < 0) {
    return "ERROR";
  }
  let finalString = "";
  for (let _ = 0; _ < numberOfRepeats; _++) {
    finalString += stringToRepeat;
  }
  return finalString;
};

// Do not edit below this line
module.exports = repeatString;
