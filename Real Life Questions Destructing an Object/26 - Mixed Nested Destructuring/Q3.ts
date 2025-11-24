// A system needs to extract product details from both an array and object format. Write a
// program showing nested destructuring. (→ Mixed destructuring)

const products = [
    { id: 1, info: { name: "Phone", price: 15000 } },
    { id: 2, info: { name: "Laptop", price: 55000 } }
];

const [
    {
        info: { name: firstName, price: firstPrice }
    }
] = products;

console.log(firstName, firstPrice);
