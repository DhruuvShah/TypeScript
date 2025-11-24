// An e-commerce app merges two lists: product names from the warehouse and from the
// local store. Write a program to combine them into one list. (→ Spread operator with
// arrays)

const warehouseProducts = ["TV", "Fridge"];
const localStoreProducts = ["Fan", "Cooler"];

const completeProductList = [...warehouseProducts, ...localStoreProducts];

console.log(completeProductList);
