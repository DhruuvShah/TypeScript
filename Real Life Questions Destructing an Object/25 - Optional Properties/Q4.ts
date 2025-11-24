// Write a program to Create an interface with optional properties and access them safely

interface User {
    username: string;
    bio?: string;
}

const u1: User = { username: "Dhruv" };
console.log(u1);
