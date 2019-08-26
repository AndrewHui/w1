// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {
  let i = 0;
  names.forEach(function(element) {
    let name = names[i];
    if (name === "Waldo") {
      found(i);   // execute callback
    }
    i += 1;
  })
}


findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(indexNum) {
  console.log("Found him at index", indexNum + "!");
});