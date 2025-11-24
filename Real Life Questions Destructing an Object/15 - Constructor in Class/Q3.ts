// Add a constructor to the above Person model to initialize details whenever a new person is
// created. Demonstrate with an example. (→ Constructor in class)

class PersonWithCtor {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    info(): void {
        console.log(this.name, this.age);
    }
}

const person2 = new PersonWithCtor("Vivek", 28);
person2.info();
