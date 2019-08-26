const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// TEST CODE
assertArraysEqual(middle([1, 2, 3]), [2], true);
assertArraysEqual(middle([1, 2]), [1], false);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3], true);