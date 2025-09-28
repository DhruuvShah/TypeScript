//  Write a program to show the difference between `let`, `var`, and `const`.

var a = 10;
let b = 20;
const c = 30;

var a = 100; // re-declared inside block, changes global 'a' 
// let b = 200; // new block-scoped variable, separate from global 'b' 
// c = 300; // Error: Cannot assign to 'c' because it is a constant.

console.log("var a:", a);
console.log("let b:", b);
console.log("const c:", c);