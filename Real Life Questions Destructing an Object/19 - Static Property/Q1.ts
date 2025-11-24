// A logistics company uses the same company name for all shipments. Store it as a static
// property in a class. Write a program. (→ Static property)

class Shipment {
    static companyName = "FastExpress Logistics";

    constructor(public trackingId: string) { }

    show() {
        console.log(`Company: ${Shipment.companyName}, Tracking ID: ${this.trackingId}`);
    }
}

const s1 = new Shipment("TRK001");
s1.show();
