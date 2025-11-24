// A smart-home system treats multiple devices similarly if they have the same structure (name,
// status). Demonstrate duck typing. (→ Duck typing)

interface Device {
    name: string;
    status: string;
}

function showDevice(device: Device) {
    console.log(`Device: ${device.name}, Status: ${device.status}`);
}

const light = { name: "Light", status: "ON" };
const fan = { name: "Fan", status: "OFF", speed: 3 }; // extra field allowed

showDevice(light);
showDevice(fan);
