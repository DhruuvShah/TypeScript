// Write a program to add a constructor to the Person class and initialize object properties

class Person {
    constructor(public name: string, public age: number) { }

    show() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

const p = new Person("Rahul", 22);
p.show();
