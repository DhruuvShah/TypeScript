// Write a program to Implement an interface in a class and access the properties.

interface Person {
    name: string;
    age: number;
    display(): void;
}

class Student implements Person {
    name: string;
    age: number;
    course: string;

    constructor(name: string, age: number, course: string) {
        this.name = name;
        this.age = age;
        this.course = course;
    }

    display(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Course: ${this.course}`);
    }
}

let student1 = new Student("Dhruv", 19, "Computer Science");
console.log(student1.age);
student1.display();