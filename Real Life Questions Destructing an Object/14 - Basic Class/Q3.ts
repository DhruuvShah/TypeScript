// Write a program to model a real-world "Person" with properties (like name, age) and a
// method to display details. (→ Basic Person class)

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    display(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

const p1 = new Person("Rohan", 22);
p1.display();
