// A medical record stores patient info (name, age, blood group). Extract these details using
// object destructuring. (→ Object destructuring)

const patient = {
    naam: "Sanjay",
    age: 40,
    bloodGroup: "B+",
};

const { naam, age, bloodGroup } = patient;

console.log(naam, age, bloodGroup);
