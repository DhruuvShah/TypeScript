// A food delivery app uses temporary variables for calculations, block-level variables inside
// functions, and fixed constants for GST. Show differences in behaviour.
// (→ var, let, const)

// var: function / global scope, re-declarable
var tempDistance = 5;
tempDistance = 7;

// let: block level
function calculateDiscount() {
    let orderCount = 3;
    if (true) {
        let orderCount = 10; // different variable inside block
        console.log("Inner orderCount:", orderCount);
    }
    console.log("Outer orderCount:", orderCount);
}

// const: cannot be reassigned
const GST_RATE = 0.05;

console.log("Temp distance:", tempDistance);
calculateDiscount();
console.log("GST rate:", GST_RATE);
