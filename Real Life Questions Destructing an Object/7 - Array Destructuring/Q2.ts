// A grocery store tracks daily sales in an array and wants to extract weekends' data using array
// destructuring. Write a program. (→ Array destructuring)

const salesWeek = [1000, 1200, 1300, 1100, 1500, 2000, 2200];
const [, , , , , saturdaySales, sundaySales] = salesWeek;

console.log("Saturday sales:", saturdaySales);
console.log("Sunday sales:", sundaySales);
