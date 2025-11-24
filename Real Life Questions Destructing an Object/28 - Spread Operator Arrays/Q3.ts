// A library maintains a constant catalog object where values should not be overwritten, but
// updates must create a new version. Write a program to demonstrate immutability. (→ const
// immutability)

const catalog = {
    book1: "Maths",
    book2: "Science"
};

const catalogV2 = { ...catalog, book2: "Physics" };

console.log(catalog);
console.log(catalogV2);
