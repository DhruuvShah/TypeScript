// A company wants to keep backup copies of customer profile objects and then update only
// selective fields. Write a program demonstrating cloning and modifying an object. (→ Spread
// operator with objects)

const customerProfile = {
    id: 10,
    name: "Arjun",
    city: "Ahmedabad",
};

const updatedCustomerProfile = {
    ...customerProfile,
    city: "Surat",
};

console.log(customerProfile);
console.log(updatedCustomerProfile);
