// Write a program to Implement an interface in a class and access the properties

interface Person {
    name: string;
    age: number;
}

class Student implements Person {
    constructor(public name: string, public age: number) { }

    display() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

const s = new Student("Karan", 20);
s.display();
