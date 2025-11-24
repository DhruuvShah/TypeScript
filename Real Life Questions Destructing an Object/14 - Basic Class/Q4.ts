// Write a program to Create a Person class with properties and a method to display details

class SimplePerson {
    constructor(public name: string, public age: number) { }

    show(): void {
        console.log(`Person -> ${this.name}, ${this.age}`);
    }
}

const sp = new SimplePerson("Alex", 30);
sp.show();
