// A student profile extends a base User class by adding marks and roll number. Write a
// program. (→ Inheritance)

class BasePerson {
    constructor(public name: string, public age: number) { }
}

class Student extends BasePerson {
    constructor(name: string, age: number, public rollNo: number, public course: string) {
        super(name, age);
    }

    show(): void {
        console.log(
            `Name: ${this.name}, Age: ${this.age}, Roll: ${this.rollNo}, Course: ${this.course}`
        );
    }
}

const s = new Student("Anjali", 20, 101, "BCA");
s.show();
