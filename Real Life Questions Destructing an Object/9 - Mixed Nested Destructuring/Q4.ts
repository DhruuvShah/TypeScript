// Write a program to demonstrate mixed destructuring (object within array and vice versa)

const data = [
    { id: 1, info: { name: "Alpha", value: 10 } },
    { id: 2, info: { name: "Beta", value: 20 } },
];

const [
    {
        info: { name: firstName, value: firstValue },
    },
] = data;

console.log(firstName, firstValue);
