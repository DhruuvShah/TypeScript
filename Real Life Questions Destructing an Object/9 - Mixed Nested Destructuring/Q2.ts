// A travel planner keeps itineraries containing arrays and nested objects. Extract values using
// mixed destructuring. (→ Mixed destructuring)

const itinerary = {
    id: 1,
    days: [
        { day: "Day 1", place: "Beach" },
        { day: "Day 2", place: "Temple" },
    ],
};

const {
    days: [firstDay, secondDay],
} = itinerary;

console.log(firstDay.place, secondDay.place);

