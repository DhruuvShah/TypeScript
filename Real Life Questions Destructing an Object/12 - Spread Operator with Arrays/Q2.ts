// Merge two customer lists: one from website orders and another from in-store orders.
// Write a program. (→ Spread with arrays)

const websiteCustomers = ["Anita", "Rohit"];
const storeCustomers = ["Sanjay", "Lena"];

const mergedCustomers = [...websiteCustomers, ...storeCustomers];

console.log(mergedCustomers);
