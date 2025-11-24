// A pharmacy app uses temporary batch numbers, block-level stock counts, and constant
// drug tax rates. Show differences in behaviour. (→ var, let, const)

var tempBatchNumber = "B123";
tempBatchNumber = "B124";

function manageStock() {
    let stockCount = 100;
    if (true) {
        let stockCount = 50;
        console.log("Inner stockCount:", stockCount);
    }
    console.log("Outer stockCount:", stockCount);
}

const DRUG_TAX_RATE = 0.12;

console.log("Temp batch:", tempBatchNumber);
manageStock();
console.log("Drug tax:", DRUG_TAX_RATE);
