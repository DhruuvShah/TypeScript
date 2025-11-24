// A user profile needs to be extended with additional fields (e.g., address, phone). Write a
// program showing how one interface extends another. (→ Extending interface)

interface Profile {
    name: string;
    email: string;
}

interface FullProfile extends Profile {
    address: string;
    phone: string;
}

const profile: FullProfile = {
    name: "Amit",
    email: "amit@example.com",
    address: "Delhi",
    phone: "9999999999"
};

console.log(profile);
