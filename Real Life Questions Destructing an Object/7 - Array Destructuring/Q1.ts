// A fitness tracker records seven-day step counts and needs to extract steps of Monday and
// Friday. Write a program using array destructuring. (→ Array destructuring)

const stepsWeek = [5000, 7000, 8000, 6000, 9000, 10000, 7500];
const [mondaySteps, , , , fridaySteps] = stepsWeek;

console.log("Monday steps:", mondaySteps);
console.log("Friday steps:", fridaySteps);
