// Write a program to declare an interface Student and initialize an object with it

interface Student {
    name: string;
    age: number;
    city: string;
}

const stu: Student = {
    name: "Aman",
    age: 19,
    city: "Delhi"
};

console.log(stu);
