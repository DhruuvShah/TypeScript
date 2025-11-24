// A warehouse stores product info in constant arrays/objects. Show how to update data using
// immutability without modifying originals.. (→ const + immutability)

const products = [
    { id: 1, name: "Box", qty: 10 },
    { id: 2, name: "Tape", qty: 5 },
];

// create updated copy (immutability)
const updatedProducts = products.map(p =>
    p.id === 1 ? { ...p, qty: p.qty + 5 } : p
);

console.log("Original:", products);
console.log("Updated:", updatedProducts);

