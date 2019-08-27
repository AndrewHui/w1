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
//check that the arrays are not empty
// check that arrays are defined 
// create new empty array to push data into new array for return
// for loop to iterate the amount of variables in array 1
// nested for loop to iterate the amount of variables in array 2
// checking that variables in array 1 and array 2 are not the same then push into new array
// 

const without = function(theArray, removalArray) {
  let result = [];
  let checker = false;
  for (let i = 0; i < theArray.length; i++) {
    checker = false;
    for (let n = 0; n < removalArray.length; n++) {
      if (theArray[i] === removalArray[n]) {
        checker = true;
      }
      
    }
    if (checker === false) {
      result.push(theArray[i]);
    }

  }
  return result;
}


console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));

module.exports = without;