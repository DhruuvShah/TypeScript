// A movie ticket app merges seat selections from multiple devices (mobile, desktop). Write a
// program using spread. (→ Spread operator arrays)

const mobileSeats = ["A1", "A2"];
const desktopSeats = ["B1", "B2"];

const allSeats = [...mobileSeats, ...desktopSeats];

console.log(allSeats);
