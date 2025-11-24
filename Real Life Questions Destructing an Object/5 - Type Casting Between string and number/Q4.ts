// Write a program to use type Casting Between string and number

const numStr: string = "42";
const asNumber: number = Number(numStr);

const backToString: string = asNumber.toString();

console.log("Number:", asNumber);
console.log("Back to string:", backToString);
