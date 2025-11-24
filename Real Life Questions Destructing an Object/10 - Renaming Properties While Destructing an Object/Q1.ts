// A school database stores student objects with long property names. Extract and rename for
// simplified processing. Write a program. (→ Rename properties)

const studentRecord = {
    student_full_name: "Raj",
    student_age_years: 18,
};

const {
    student_full_name: sName,
    student_age_years: sAge,
} = studentRecord;

console.log(sName, sAge);
