// Write a program to use public, private, and protected access modifiers in a class.

class Employee {
    public name: string;
    private salary: number;
    protected department: string;

    constructor(name:string,salary:number,department:string) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }
    showDetails():void{
        console.log(`Name: ${this.name}`);
        console.log(`Salary: ${this.salary}`);
        console.log(`Department: ${this.department}`);
    }
}

let employee = new Employee("Rahul", 50000,"IT");
employee.showDetails();