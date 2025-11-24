// An online store receives price as a string from a form but needs it as a number to calculate
// totals. Write a program to convert between string and number types. (→ Type casting)

let priceFromForm: string = "999";
let priceAsNumber: number = parseFloat(priceFromForm);

const quantity = 3;
const total = priceAsNumber * quantity;

console.log("Price:", priceAsNumber, "Quantity:", quantity, "Total:", total);
