// A transport system models a BusTicket class. Use a constructor to initialize passenger name,
// seat, and fare. Write a program. (→ Class + constructor)

class BusTicket {
    constructor(
        public passengerName: string,
        public seat: string,
        public fare: number
    ) { }

    show() {
        console.log(this.passengerName, this.seat, this.fare);
    }
}

const t1 = new BusTicket("Dhruv", "A1", 500);
t1.show();
