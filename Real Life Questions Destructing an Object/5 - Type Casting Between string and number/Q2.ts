// A toll system receives toll amount as a string but needs it as a number for billing.
// Demonstrate conversion. (→ Type casting)

let tollAmountStr: string = "120";
let tollAmountNum: number = +tollAmountStr;

console.log("Toll amount:", tollAmountNum, "For 3 trips:", tollAmountNum * 3);
