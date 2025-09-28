// Write a program to demonstrate mixed destructuring (object within array and vice
// versa).

let person = {
    naam: "Ravi",
    scores: [95, , 88, 76]
};

let { naam, scores: [math, science, english] } = person;
console.log(naam);
console.log(math);