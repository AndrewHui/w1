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

const letterPositions = function(sentence) {
  const results = {};
  let counter = 0;
  // logic to update results here
  let splitSentence = sentence.split(""); // split the string from EVERYTHING
  for (let par of splitSentence) {
    if (par === " ") {
      counter += 1
      continue;
    }
    else if (results[par]) { // if the letter exists in the object already
      results[par].push(counter);
    }
    else { // if the letter doesnt exist in the object already
      results[par] = [];
      results[par].push(counter);

    }
    counter += 1
  }

  return results;
};

// TEST

console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("hello").e, [1], true);
