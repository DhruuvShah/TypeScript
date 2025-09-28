// Write a program that assign default values while destructuring an object.

let product: { title: string; price?: number } = {
    title: "Pen"
};

let { title, price = 10 } = product;
console.log(title);
console.log(price);