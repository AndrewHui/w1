const eqArrays= require('../eqArrays');
const assertEqual = require('../assertEqual');

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays([5, "2", 2], [5, "2", 2]), true);