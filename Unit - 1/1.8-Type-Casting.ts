// Type Casting Between string and number.

let a : string = "123";
let b : number = Number(a);
console.log("Number:",b);

let c: number = 456;
let d: string = c.toString(); // Converts 456 → "456" (string)
console.log("String:", d);