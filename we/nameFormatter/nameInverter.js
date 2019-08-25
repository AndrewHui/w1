const nameInverter = function(name) {
  if (name === "") { // if empty string is passed
    return "";
  }
  if (name === undefined) { // throw error
    return "Error";
  }
  splitName = name.split(" ")

  if (splitName.length < 2) { // if only one name is returned
    return splitName[0];
  }

  let firstName = "";
  let lastName = "";
  let hon = ["Mr.", "Dr.", "Mrs.", "Ms"];
  let honAns = ""

  for (let par in splitName) { // NAME ASSIGNMENT LOGIC

    if (splitName[par] === "") { 
    }
    else if (splitName[par] === hon[hon.indexOf(splitName[par])]) {
      honAns = splitName[par] + " ";
    }
    else if (firstName && splitName[par] !== "") {
      lastName = splitName[par];
      
    }
    else {
      firstName = splitName[par];
    }
  }


  if (lastName) { // RETURN LOGIC
    return (honAns.concat(lastName) + ", " + firstName)
  }
  else if (firstName) {
    return (honAns.concat(firstName)); // return
  }
  else {
    return "";
  }
}

module.exports = nameInverter;