// Inside a class, sensor input arrives in unknown format. Use type assertion to treat it as a
// specific type. (→ Type assertion)

class SensorReader {
    readSensor(input: unknown): void {
        const sensorValue = input as number; // type assertion
        console.log("Sensor value (as number):", sensorValue + 10);
    }
}

const sr = new SensorReader();
sr.readSensor("25" as unknown);   // forced unknown → number
