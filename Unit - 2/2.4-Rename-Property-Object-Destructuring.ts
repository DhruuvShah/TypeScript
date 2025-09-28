// Write a program to use Rename Properties While destructuring an object.

let employee = {
    empId: 123,
    empName: "Rahul"
};

let { empId: id, empName: naam } = employee;
console.log(id);
console.log(naam);