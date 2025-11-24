// Write a program that assign default values while destructuring an object

type User = {
    name: string;
    email?: string;
};

const user: User = {
    name: "Sam",
};

const { name: uName, email = "no-email@unknown.com" } = user;

console.log(uName, email);
