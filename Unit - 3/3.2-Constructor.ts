// Write a program to add a constructor to the Person class and initialize object 
// properties.

class Bike {
    constructor(public name: string, public model: string) {
        this.name = name;
        this.model = model;
    }

    displayDetails(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Model: ${this.model}`);
    }
}

let bike1 = new Bike("Kawasaki Ninja", "H2R");
bike1.displayDetails();