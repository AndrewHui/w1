const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];
const winnersOnly = grades.filter(function(num) {
  return (num >= 70);
})

console.log("Winners only:", winnersOnly);