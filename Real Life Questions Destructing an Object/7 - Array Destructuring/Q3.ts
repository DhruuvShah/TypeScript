// A weather app receives a weekly temperature array and wants to extract specific day values
// into variables. Write a program to achieve this. (→ Array destructuring)

const temps = [30, 31, 29, 32, 33, 34, 31];
const [mon, tue, , thu] = temps;

console.log("Mon:", mon, "Tue:", tue, "Thu:", thu);
