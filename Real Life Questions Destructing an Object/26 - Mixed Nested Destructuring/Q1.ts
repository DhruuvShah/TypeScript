// A food delivery system stores menu items in arrays and objects. Extract required details using
// nested destructuring. (→ Nested/mixed destructuring)

const menu = {
    category: "Pizza",
    items: [
        { name: "Margherita", price: 200 },
        { name: "Cheese Burst", price: 300 }
    ]
};

const {
    category,
    items: [first, second]
} = menu;

console.log(category, first.name, second.price);
