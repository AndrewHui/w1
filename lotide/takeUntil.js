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



const takeUntil = function(array, callback) {
  // ...
  let result = [];
  for (let par in array) {

    if (callback(array[par])) {
      return result;
    }
    result.push(array[par]);
  }



  return result;
}

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

//  console.log('---');

//  const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
//  const results2 = takeUntil(data2, x => x === ',');
//  console.log(results2);

//  // TEST CODE
// assertArraysEqual(takeUntil(data2, x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ], true);
assertArraysEqual(takeUntil([1, 5, 7, 10, 15, 4], x => x > 9.9), [1, 5, 7, 10], true);
console.log(takeUntil([1, 5, 7, 10, 15, 4], x => x > 9.9));
