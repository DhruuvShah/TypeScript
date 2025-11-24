// A store collects product names from online and offline inventory and merges them. Write a
// program using spread. (→ Spread with arrays)

const onlineProducts = ["Laptop", "Mouse"];
const offlineProducts = ["Keyboard", "Monitor"];

const allProducts = [...onlineProducts, ...offlineProducts];

console.log(allProducts);
