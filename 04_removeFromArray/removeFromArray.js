const removeFromArray = function (arr, ...toRemoveObjs) {
  let toRemove = toRemoveObjs.shift();
  if (toRemove == undefined) {
    return arr;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === toRemove) {
      arr.splice(i, 1);
      return removeFromArray(arr, ...toRemoveObjs);
    }
  }
  return removeFromArray(arr, ...toRemoveObjs);
};
// Do not edit below this line
module.exports = removeFromArray;
