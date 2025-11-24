// A hotel booking app creates a Reservation class with constructor initializing guest name, room
// number, and amount. Write a program. (→ Constructor in class)

class Reservation {
    constructor(
        public guestName: string,
        public roomNo: number,
        public amount: number
    ) { }

    details() {
        console.log(this.guestName, this.roomNo, this.amount);
    }
}

const r1 = new Reservation("Amit", 101, 2000);
r1.details();
