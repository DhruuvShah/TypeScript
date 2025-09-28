//  Write a program to Demonstrate duck typing with two different objects using the same 
// interface.

interface Point {
    x: number;
    y: number;
}

let p1: Point = { x: 10, y: 20 };   // exactly matches interface 
let p2 = { x: 30, y: 40, z: 50 };   // has x, y, and an extra z 
p1 = p2;  // Allowed: p2 has at least x and y 
console.log(p1);