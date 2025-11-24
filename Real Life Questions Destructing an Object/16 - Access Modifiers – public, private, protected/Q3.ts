// A company requires controlled access to employee data where some data is public, some
// protected, and some private. Write a class implementing all types of access levels. (→ public,
// private, protected)

class Employee {
    public name: string;               // public info (everyone can see)
    protected salary: number;          // protected (HR, manager)
    private aadhaarNumber: string;     // private (strict confidential)

    constructor(name: string, salary: number, aadhaar: string) {
        this.name = name;
        this.salary = salary;
        this.aadhaarNumber = aadhaar;
    }

    public showEmployee(): void {
        console.log(`Employee: ${this.name}`);
    }

    protected showSalary(): void {
        console.log(`Salary: ₹${this.salary}`);
    }

    private showAadhaar(): void {
        console.log(`Aadhaar: ${this.aadhaarNumber}`);
    }
}

class Manager extends Employee {
    showManagerAccess(): void {
        this.showSalary();   // allowed (protected)
    }
}

const emp = new Manager("Amit", 55000, "1234-5678-9999");

emp.showEmployee();
emp.showManagerAccess();

// emp.salary          ❌ ERROR (protected)
// emp.aadhaarNumber   ❌ ERROR (private)
