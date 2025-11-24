// A vehicle registration portal receives extra fields from users that are not required. Write a
// program to handle the excess property issue safely. (→ Excess property checks)

interface Vehicle {
    model: string;
    year: number;
}

const userVehicleData = {
    model: "Honda City",
    year: 2020,
    color: "Black"
};

const vehicle: Vehicle = userVehicleData; // OK

console.log(vehicle);
