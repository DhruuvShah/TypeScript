// Write a program to Create a Person class with properties and a method to display 
// details. 

class Person {
    name: string;
    age: number;

    displayDetails(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
    }
}

let person1 = new Person();
person1.name = "Dhven";
person1.age = 10;
person1.displayDetails();