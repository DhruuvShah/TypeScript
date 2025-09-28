// Write a program to Create an interface with optional properties and access them 
// safely.

interface Employee {
    id: number;
    name: string;
    department?: string; // optional property 
    email?: string;
}
// optional property 
// Create objects with and without optional properties 
let emp1: Employee = { id: 101, name: "Meena", department: "HR" };
let emp2: Employee = { id: 102, name: "Ravi" }; // no department, no email 
console.log(emp1);
console.log(emp2);