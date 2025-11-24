// A travel app stores trips where each destination has nested objects inside arrays. Extract
// selected fields using mixed destructuring. (→ Mixed destructuring)

const trips = [
    { city: "Goa", days: 3, price: 8000 },
    { city: "Manali", days: 5, price: 12000 },
];

const [firstTrip] = trips;
const { city: firstCity, price: firstPrice } = firstTrip;

console.log(firstCity, firstPrice);
