const tail = function(theArray) {
  let newArray = [];
  for (let i = 0; i < theArray.length; i++) {
    newArray.push(theArray[i]);
  }
  newArray.shift();
  return newArray;
};

module.exports = tail;