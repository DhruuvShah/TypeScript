// Write a program to use const with Object and Array Immutability

const nums = [1, 2, 3];

const newNums = [...nums, 4];

const person = { name: "John", age: 25 };
const olderPerson = { ...person, age: 26 };

console.log("nums:", nums, "newNums:", newNums);
console.log("person:", person, "olderPerson:", olderPerson);
