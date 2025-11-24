// Write a program to show the difference between let, var, and const

var a = 10;
let b = 20;
const c = 30;

if (true) {
    var a = 40; // same var
    let b = 50; // new block-scoped b
    console.log("Inside - a:", a, "b:", b, "c:", c);
}

console.log("Outside - a:", a, "b:", b, "c:", c);
