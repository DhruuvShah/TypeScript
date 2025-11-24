// Implement a Staff interface in a Teacher class and print teacher details. (→ Interface in class)

interface Staff {
    name: string;
    subject: string;
}

class Teacher implements Staff {
    constructor(public name: string, public subject: string) { }

    showTeacher() {
        console.log(`Teacher: ${this.name}, Subject: ${this.subject}`);
    }
}

const t1 = new Teacher("Amit", "Maths");
t1.showTeacher();
