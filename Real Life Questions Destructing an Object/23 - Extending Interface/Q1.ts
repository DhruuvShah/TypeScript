// Extend a base interface User to create PremiumUser with extra features. Write a program.
// (→ Extending interface)

interface User {
    id: number;
    name: string;
}

interface PremiumUser extends User {
    membership: string;
}

const p1: PremiumUser = {
    id: 1,
    name: "Dhruv",
    membership: "Gold"
};

console.log(p1);
