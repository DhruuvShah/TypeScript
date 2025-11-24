// Two different objects (car and bike) should be treated the same way if they share the same
// structure. Write a program demonstrating this idea.. (→ Duck typing)

interface Vehicle {
    name: string;
    wheels: number;
}

function showVehicle(v: Vehicle) {
    console.log(`${v.name} has ${v.wheels} wheels`);
}

const car = { name: "Car", wheels: 4, brand: "Toyota" };
const bike = { name: "Bike", wheels: 2 };

showVehicle(car);
showVehicle(bike);
