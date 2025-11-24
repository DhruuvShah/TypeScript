// A transport booking app stores passenger data in a class and uses a constructor to initialize
// booking details. Write a program showing this. (→ Constructor in class)

class Booking {
    constructor(
        public name: string,
        public seat: string,
        public price: number
    ) { }

    print() {
        console.log(this.name, this.seat, this.price);
    }
}

const b1 = new Booking("Riya", "B3", 450);
b1.print();
