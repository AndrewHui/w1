let args = process.argv;
let allArguments = args.splice(2, );

let pigLatin = function(allArguments) {
  let currentWord = "";
  let result = "";
  for (let i = 0; i < allArguments.length; i++) {
    currentWord = allArguments[i];
    for (let num = 0; num < currentWord.length-1; num++) {
      result += currentWord[num+1];
    }
    result += currentWord[0] + "ay ";
  }
  console.log(result);
}

pigLatin(allArguments);