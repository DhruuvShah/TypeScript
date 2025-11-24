// A university creates backup copies of admission form entries and modifies selected fields.
// Demonstrate immutability with object cloning. (→ Spread with objects)

const admissionForm = {
    name: "Priya",
    course: "BSc",
    year: 1,
};

const updatedForm = { ...admissionForm, year: 2 };

console.log(admissionForm);
console.log(updatedForm);

