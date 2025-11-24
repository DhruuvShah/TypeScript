// A student exam result object contains long property names; rename them while extracting.
// Write a program. (→ Renaming properties)

const result = {
    student_full_name_long: "Dhruv Shah",
    student_total_marks_long: 450
};

const {
    student_full_name_long: fullName,
    student_total_marks_long: totalMarks
} = result;

console.log(fullName, totalMarks);
