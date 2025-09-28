// Write a student to Create a Student class that inherits from Person and adds course info. 

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    display() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
    }
}

class Strudent extends Person {
    course: string;

    constructor(name: string, age: number, course: string) {
        super(name, age);
        this.course = course;
    }

    display() {
        super.display();
        console.log(`Course: ${this.course}`);
    }
}

let student1 = new Strudent("John", 20, "BCA");
student1.display();