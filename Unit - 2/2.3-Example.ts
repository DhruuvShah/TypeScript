let person = {
    naam: "Ravi",
    scores: [95, , 88, 76]
};

let { naam, scores: [math, science, english] } = person;
console.log(naam);
console.log(math);