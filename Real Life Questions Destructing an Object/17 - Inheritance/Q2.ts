// A Vehicle class should be extended by a Car class adding new properties like model and
// year. Write a program.. (→ Inheritance)

class Vehicle {
    constructor(public brand: string, public speed: number) { }

    showVehicle() {
        console.log(`Brand: ${this.brand}, Speed: ${this.speed} km/h`);
    }
}

class Car extends Vehicle {
    constructor(
        brand: string,
        speed: number,
        public model: string,
        public year: number
    ) {
        super(brand, speed);
    }

    showCar() {
        console.log(
            `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Speed: ${this.speed} km/h`
        );
    }
}

const c1 = new Car("Toyota", 180, "Corolla", 2020);
c1.showCar();
