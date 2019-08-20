let args = process.argv;
let allArguments = args.splice(2, );
allArguments = allArguments[0];


const obfuscate = function(allArguments) {
  let newString = "";
  for (let i = 0; i < allArguments.length; i++) {
    if (allArguments[i] === "a") {
      newString += "4";
    }
    else if (allArguments[i] === "e") {
      newString += "3";
    }
    else if (allArguments[i] === "o") {
      newString += "0";
    }
    else if (allArguments[i] === "l") {
      newString += "1";
    }
    else {
      newString += allArguments[i];
    }
 
  }
  return newString;

}

console.log(obfuscate(allArguments));