// Write a program to show excess property checks and how to resolve them

interface User {
    name: string;
}

// ❌ DIRECT literal assignment → error
// const u: User = { name: "Sam", extra: "x" };

// ✅ FIX: Assign to variable first
const tempData = { name: "Sam", extra: "x" };
const u: User = tempData;

console.log(u);
