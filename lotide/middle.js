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


const middle = function(findMiddleArray) {
  let numOne = 0;
  let numTwo = 0;
  let newArray = [];
  if (findMiddleArray.length < 3) {
    return [];
  }
  else if (findMiddleArray.length % 2 !== 0) {
    numOne = Math.floor(findMiddleArray.length/2);
    newArray.push(findMiddleArray[numOne]);
    return newArray;
  }
  else {
    numOne = findMiddleArray.length/2 - 1;
    numTwo = numOne + 1;
    newArray.push(findMiddleArray[numOne]);
    newArray.push(findMiddleArray[numTwo]);
    return newArray;
  }
}
// TEST CODE
//console.log(middle([1, 2, 3]));
console.log(middle([1, 2]));
//assertArraysEqual([1, 2, 3], [1, 2, 3], true);
//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
//assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
//assertEqual(eqArrays([5, "2", 2], [5, "2", 2]), true);