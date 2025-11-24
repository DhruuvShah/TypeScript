// A hotel booking form submits room price as a string which must be converted to a number to
// generate the bill. Demonstrate type casting. (→ Type casting)

let roomPriceStr: string = "3500";
let roomPriceNum: number = Number(roomPriceStr);

console.log("Room price:", roomPriceNum, "Total bill:", roomPriceNum * 2);
