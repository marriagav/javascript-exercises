const palindromes = function (word) {
  const skip = { "!": 0, ".": 0, "?": 0, ",": 0, " ": 0 };
  word = word.toLowerCase();
  let left = 0;
  let right = word.length - 1;
  while (left < right) {
    if (word[right] in skip) {
      right--;
      continue;
    }
    if (word[left] in skip) {
      left++;
      continue;
    }
    console.log(word[left], word[right]);
    if (word[left] != word[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

// palindromes("racecar");
// Do not edit below this line
module.exports = palindromes;
