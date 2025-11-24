// A shopping app uses three variables for temporary values, block-level values, and
// constants like tax rates. Write a program showing how each behaves in different scopes.
// (→ var, let, const)

var tempCartValue = 0;
tempCartValue = 500;

function checkOffers() {
    let itemsInCart = 2;
    if (true) {
        let itemsInCart = 5;
        console.log("Inner items:", itemsInCart);
    }
    console.log("Outer items:", itemsInCart);
}

const DEFAULT_TAX = 0.18;

console.log("Temp cart value:", tempCartValue);
checkOffers();
console.log("Default tax:", DEFAULT_TAX);
