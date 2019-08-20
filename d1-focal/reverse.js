let args = process.argv;
let allArguments = args.splice(2, 4);



let reverseFunction = function(strings) {
  let newString = "";
  for (let i = 0; i < strings.length; i++) {
    newString += strings[strings.length - i -1];
  }
  console.log(newString);
}

// test

for(let i = 0; i < allArguments.length; i++) {
  reverseFunction(allArguments[i]);
}

