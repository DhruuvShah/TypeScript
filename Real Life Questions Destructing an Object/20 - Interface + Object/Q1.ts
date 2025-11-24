// A smartphone app stores phone model information using a predefined interface. Initialize one
// phone object. (→ Interface + object)

interface Phone {
    model: string;
    brand: string;
    price: number;
}

const phone1: Phone = {
    model: "Galaxy S23",
    brand: "Samsung",
    price: 60000
};

console.log(phone1);
