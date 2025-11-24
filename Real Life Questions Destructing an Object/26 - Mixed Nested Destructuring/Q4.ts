// Write a program to demonstrate mixed destructuring (object within array and vice versa)

const data = [
    {
        id: 1,
        details: { title: "Book", author: "ABC" }
    }
];

const [
    {
        details: { title, author }
    }
] = data;

console.log(title, author);
