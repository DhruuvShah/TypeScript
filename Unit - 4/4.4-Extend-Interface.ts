// Write a program to extend an interface and create a new type with additional fields.

interface Person {
    name: string;
    age: number;
}

interface Student extends Person {
    course: string;
    rollNumber: number;
}

let student1: Student = {
    name: "Dhruv",
    age: 19,
    course: "Computer Science",
    rollNumber: 80
};
console.log(student1);