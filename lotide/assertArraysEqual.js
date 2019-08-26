const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays')

const assertArraysEqual = function (firArray, secArray, trueOrFalse) {
  return assertEqual(eqArrays(firArray, secArray), trueOrFalse);
}

module.exports = assertArraysEqual;
