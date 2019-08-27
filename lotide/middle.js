
const middle = function(findMiddleArray) {
  let numOne = 0;
  let numTwo = 0;
  let newArray = [];
  if (findMiddleArray.length < 3) {
    return [];
  }
  else if (findMiddleArray.length % 2 !== 0) {
    numOne = Math.floor(findMiddleArray.length/2);
    newArray.push(findMiddleArray[numOne]);
    return newArray;
  }
  else {
    numOne = findMiddleArray.length/2 - 1;
    numTwo = numOne + 1;
    newArray.push(findMiddleArray[numOne]);
    newArray.push(findMiddleArray[numTwo]);
    return newArray;
  }
}

module.exports = middle;