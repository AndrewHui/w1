// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(firstArray, secondArray) {
  let longerArray = firstArray.length;
  if (secondArray.length > firstArray.length) {
    longerArray = secondArray.length;
  }
  for (let i = 0; i < longerArray; i++) {
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

// TEST CODE
assertArraysEqual([1, 2, 3], [1, "2", 3], false);
//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
//assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
//assertEqual(eqArrays([5, "2", 2], [5, "2", 2]), true);