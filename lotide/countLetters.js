// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(theBombString) {
  let result = theBombString.split(""); // split the string from EVERYTHING
  let objectResult = {};
  for (let parse of result) {
    if (parse === " ") {
      continue;
    }
    else if (objectResult[parse]) {
      objectResult[parse] += 1;
    }
    else {
      objectResult[parse] = 1;
    }
  }



  return objectResult;
}

// TEST

console.log(countLetters("lighthouse in the house"));