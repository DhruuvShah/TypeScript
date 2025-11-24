// A university form may include irrelevant fields submitted by mistake. Demonstrate excess
// property check handling. (→ Excess property checks)

interface UniversityForm {
    name: string;
    course: string;
}

const formData = {
    name: "Riya",
    course: "BCA",
    unwantedField: "Ignore this"
};

const form: UniversityForm = formData; // OK

console.log(form);
