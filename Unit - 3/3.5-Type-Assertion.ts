// Write a program to demonstrate type assertion in a class method.

class Vehicle {
    name: any;

    printName() {
        let vehicleName = this.name as string;
        console.log("The Name is: ", vehicleName.toLocaleUpperCase());
    }
}

let v = new Vehicle();
v.name = "Car";
v.printName();