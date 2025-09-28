// Write a program to show excess property checks and how to resolve them.

interface Animal {
    name: string;
    age: number;
}
// let dragon: Animal = { name: "Dragon", age: 3, colour: "Red" }; // error 
let dragon = { name: "Dragon", age: 3, colour: "Red" } as Animal;
console.log(dragon); 