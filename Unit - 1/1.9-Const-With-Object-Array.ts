const student = { name: "Riya", age: 21 };

student.age = 22;
Object.freeze(student);

student.name = "Amit";
console.log("Student:",student);

const marks = [80,85,90];
marks.push(95);
Object.freeze(marks);

marks[0] = 70;
console.log("Marks:",marks);