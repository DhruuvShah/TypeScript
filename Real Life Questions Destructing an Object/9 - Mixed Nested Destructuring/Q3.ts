// A delivery app stores multiple orders where each order contains objects within arrays (or
// vice-versa). Write a program that extracts selected values using a mixed destructuring
// technique. (→ Mixed destructuring)

const orders = [
    { id: 101, items: [{ name: "Shoes", qty: 1 }, { name: "Socks", qty: 2 }] },
    { id: 102, items: [{ name: "Bag", qty: 1 }] },
];

const [firstOrder] = orders;
const {
    items: [firstItem],
} = firstOrder;

console.log("Order:", firstOrder.id, "First item:", firstItem.name);
