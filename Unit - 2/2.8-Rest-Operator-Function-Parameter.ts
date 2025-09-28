// Write a program to create a function that takes any number of arguments using the
// rest operator.

function sum(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3));
console.log(sum(10, 20, 30, 40));