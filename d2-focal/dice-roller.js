let args = process.argv;
let allArguments = args.splice(2, );
allArguments = allArguments[0];


function getRandomDice(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}


const diceRoller = function(allArguments) {
  let ranGenArray = [];
  for (let i = 0; i < allArguments; i++) {
    ranGenArray.push(getRandomDice(1, 6));
  }
  return ranGenArray;
}

console.log(`Rolled ${allArguments} dice: ${diceRoller(allArguments).join(", ")}`);