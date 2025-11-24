// Write a program to Demonstrate duck typing with two different objects using the same
// interface.

interface Shape {
    type: string;
    area: number;
}

function display(s: Shape) {
    console.log(`Shape: ${s.type}, Area: ${s.area}`);
}

const square = { type: "Square", area: 25 };
const circle = { type: "Circle", area: 78.5, radius: 5 };

display(square);
display(circle);
