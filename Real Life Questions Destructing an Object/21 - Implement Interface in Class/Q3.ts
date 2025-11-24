// Implement a Staff interface in a Teacher class and print teacher details. (→ Interface in class)

interface Employee {
    id: number;
    name: string;
    department: string;
}

class OrganizationEmployee implements Employee {
    constructor(
        public id: number,
        public name: string,
        public department: string
    ) { }

    show() {
        console.log(`ID: ${this.id}, Name: ${this.name}, Dept: ${this.department}`);
    }
}

const e1 = new OrganizationEmployee(101, "Ravi", "IT");
e1.show();
