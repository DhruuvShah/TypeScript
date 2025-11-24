// Write a program to use const with Object and Array Immutability

const arr = [1, 2, 3];
const newArr = [...arr, 4];

const obj = { a: 1, b: 2 };
const newObj = { ...obj, b: 3 };

console.log(arr, newArr);
console.log(obj, newObj);
