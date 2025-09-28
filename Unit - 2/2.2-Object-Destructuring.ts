// Write a program to use object destructuring to extract properties from an object.

let student = {
    id: 101,
    naam: "Alice",
    grade: "A"
};

let { id, naam, grade } = student;
console.log(id);
console.log(naam);
console.log(grade);