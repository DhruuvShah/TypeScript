// A company stores product details in constant objects and arrays. Demonstrate how updates
// can be allowed without modifying the original data. (→ const with object & array immutability)

const productDetails = {
    name: "Laptop",
    price: 50000,
    inStock: true,
};

const newProductDetails = {
    ...productDetails,
    price: 48000,
};

console.log("Original product:", productDetails);
console.log("New product:", newProductDetails);
