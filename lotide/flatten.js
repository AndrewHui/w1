// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const assertArraysEqual = function (firArray, secArray, trueOrFalse) {
  return assertEqual(eqArrays(firArray, secArray), trueOrFalse); 
}

const flatten = function(sneakyArray) {
  let result = [];
  for (let i = 0; i < sneakyArray.length; i++) {
    if (Array.isArray(sneakyArray[i]) === true) {
      for (let n = 0; n < sneakyArray[i].length; n++) {
        result.push(sneakyArray[i][n]);
      }
    }
    else {
      result.push(sneakyArray[i]);
    }
  }
  return result;
}

console.log(flatten([1, 2, [3, 4], 5, [6]]));

module.exports = flatten;