// A real-estate system keeps backup copies of property details; update only specific fields
// without altering originals. Write a program. (→ Spread with objects)

const property = {
    id: 1,
    city: "Mumbai",
    price: 7500000,
};

const updatedProperty = { ...property, price: 8000000 };

console.log(property);
console.log(updatedProperty);

