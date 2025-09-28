// Write a program that use the spread operator to clone and update objects.

let user = { name: "Alice", age: 25 };
let update_user = { ...user, age: 26 };
console.log(update_user);