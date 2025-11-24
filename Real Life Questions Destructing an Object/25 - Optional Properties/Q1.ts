// A shopping website uses optional fields like couponCode or alternateEmail. Write an interface
// with optional properties and access them. (→ Optional properties)

interface Checkout {
    email: string;
    couponCode?: string;
    alternateEmail?: string;
}

const user: Checkout = {
    email: "user@example.com",
    couponCode: "SAVE10"
};

console.log(user.email, user.couponCode);
