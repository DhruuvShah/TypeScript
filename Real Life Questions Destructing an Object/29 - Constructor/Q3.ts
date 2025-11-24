// A financial app merges multiple transaction arrays (debit, credit). Write a program that
// merges them using the spread operator. (→ Spread operator for arrays)

const debit = [100, 200];
const credit = [50, 300];

const allTransactions = [...debit, ...credit];

console.log(allTransactions);
