// Implement an interface inside a Laptop class representing specs (RAM, processor). Print
// properties. (→ Interface in class)

interface LaptopSpecs {
    ram: string;
    processor: string;
}

class Laptop implements LaptopSpecs {
    constructor(public ram: string, public processor: string) { }

    showSpecs() {
        console.log(`RAM: ${this.ram}, Processor: ${this.processor}`);
    }
}

const l1 = new Laptop("16GB", "Intel i7");
l1.showSpecs();

