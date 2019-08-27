// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    return true;
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    return false;
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

const eqObjects = function(object1, object2) {
let object1Keys = Object.keys(object1);
let object2Keys = Object.keys(object2);
let truthCheck = true;

if (object1Keys.length !== object2Keys.length) { // checks the length of the obj if sam
  return false;
}

else if (object1Keys.length === object2Keys.length) { // if length same then
  for (let par of object1Keys) { //loop all keys in object1keys
    if (Array.isArray(object1[par])) { // if it is an array
      truthCheck = eqArrays(object1[par], object2[par]);
      if (truthCheck !== true) { // if the array is not equal - return false
        return false;
        
      }
    }
    else if (object1[par] !== object2[par]) {
      return false;
    }
  }
}
return true;
}


const assertObjectsEqual = function(firObject, secObject, trueOrFalse) {
  const inspect = require('util').inspect; // <= add this line
  console.log(`first object: ${inspect(firObject)}`);
  console.log(`second object: ${inspect(secObject)}`);
  return assertEqual(eqObjects(firObject, secObject), trueOrFalse);
};


// TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba, true); // => true

 const abc = { a: "1", b: "2", c: "3" };
 assertObjectsEqual(ab, abc, false); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// eqObjects(cd, dc); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// eqObjects(cd, cd2); // => false
module.exports = assertObjectsEqual;