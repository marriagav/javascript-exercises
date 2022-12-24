const fibonacci = function (fibo) {
  if (fibo < 0) {
    return "OOPS";
  }
  map = { 0: 1, 1: 1, 2: 1 };
  return fiboRecursive(fibo, map);
};

function fiboRecursive(fibo, map) {
  if (fibo in map) {
    return map[fibo];
  } else {
    map[fibo] = fiboRecursive(fibo - 1, map) + fiboRecursive(fibo - 2, map);
    return map[fibo];
  }
}

// Do not edit below this line
module.exports = fibonacci;
