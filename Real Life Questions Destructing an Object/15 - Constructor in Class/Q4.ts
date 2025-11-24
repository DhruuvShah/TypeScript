// Write a program to add a constructor to the Person class and initialize object properties

class PersonCtor {
    constructor(public name: string, public age: number) { }

    describe(): void {
        console.log(`Person: ${this.name}, Age: ${this.age}`);
    }
}

const pc = new PersonCtor("Meera", 21);
pc.describe();
