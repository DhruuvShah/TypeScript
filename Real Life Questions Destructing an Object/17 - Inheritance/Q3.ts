// A college system maintains a Student model that should inherit features from a Person
// model and add academic information. Write a program. (→ Inheritance)

class Person {
    constructor(public name: string, public age: number) { }

    showPerson() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

class Student extends Person {
    constructor(
        name: string,
        age: number,
        public rollNo: number,
        public course: string
    ) {
        super(name, age);
    }

    showStudent() {
        console.log(
            `Name: ${this.name}, Age: ${this.age}, Roll No: ${this.rollNo}, Course: ${this.course}`
        );
    }
}

const s1 = new Student("Dhruv", 20, 101, "BCA");
s1.showStudent();
