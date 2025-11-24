// A bank stores account rules in constant arrays and objects. Show how updates can be made
// without altering original records. (→ const immutability)

const accountRules = {
    minBalance: 1000,
    withdrawalLimit: 20000,
};

// new object with updated field
const updatedAccountRules = {
    ...accountRules,
    withdrawalLimit: 25000,
};

console.log("Original rules:", accountRules);
console.log("Updated rules:", updatedAccountRules);
