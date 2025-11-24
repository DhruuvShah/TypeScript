// Write a program that use the spread operator to clone and update objects

const baseUser = { name: "User1", role: "viewer" };
const adminUser = { ...baseUser, role: "admin" };

console.log(baseUser);
console.log(adminUser);
