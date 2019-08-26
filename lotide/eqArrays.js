const eqArrays = function(firstArray, secondArray) {
  for (let i = 0; i < 3; i++) {
    if (firstArray[i] === secondArray[i]) {

    }
    else {
      return false;
    }
  }
  return true;
}

module.exports = eqArrays;