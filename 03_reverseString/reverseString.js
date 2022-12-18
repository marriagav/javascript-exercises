const reverseString = function (string) {
  let reversed = "";
  for (let index = 0; index < string.length; index++) {
    reversed = string[index] + reversed;
  }
  return reversed;
};

console.log(reverseString("hola"));

// Do not edit below this line
module.exports = reverseString;
