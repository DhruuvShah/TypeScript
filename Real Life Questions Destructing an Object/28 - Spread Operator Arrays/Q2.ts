// A billing system stores constant tax slabs in an object. Any revision must create a new object
// without mutating the original. Demonstrate immutability. (→ const immutability)

const taxSlabs = {
    slab1: 5,
    slab2: 12
};

const updatedTaxSlabs = { ...taxSlabs, slab2: 18 };

console.log(taxSlabs);
console.log(updatedTaxSlabs);
