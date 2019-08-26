

const head = function(theArray) {
  if (theArray === []) {
    return undefined;
  } else {
    return theArray[0];
  }
};

module.exports = head;