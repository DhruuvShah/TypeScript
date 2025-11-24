// A hotel management system automatically detects whether values are text or number but
// uses explicit types for room classification. Demonstrate both approaches. (→ Type inference +
// explicit type)

// Inferred
let roomPrice = 2500;        // number
let roomType = "Deluxe";     // string

// Explicit
let floorNumber: number = 5;
let category: string = "Sea View";

console.log(roomPrice, roomType, floorNumber, category);
