// A payroll software automatically detects numeric and text types when storing salary details
// but sometimes requires explicit type definitions. Demonstrate using a program.
// (→ Type inference + explicit type)

// Type inference
let basicSalary = 30000;        // inferred as number
let employeeName = "Rahul";     // inferred as string

// Explicit type
let hra: number = 5000;
let department: string = "IT";

console.log(basicSalary, employeeName, hra, department);
