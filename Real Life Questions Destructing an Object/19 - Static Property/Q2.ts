// A railway system stores a permanent railway-zone name shared across all trains. Implement
// using a static property. (→ Static property)

class Train {
    static railwayZone = "Western Railway Zone";

    constructor(public trainNo: number) { }

    info() {
        console.log(`Train No: ${this.trainNo}, Zone: ${Train.railwayZone}`);
    }
}

const t1 = new Train(12954);
t1.info();
