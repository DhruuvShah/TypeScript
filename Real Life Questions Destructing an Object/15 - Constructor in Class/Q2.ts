// A student exam result object contains long property names; rename them while extracting.
// Write a program to implement this scenario

// Long property names for student exam result
class StudentResult {
    constructor(
        public student_full_name_long: string,
        public student_roll_number_long: number,
        public student_total_marks_long: number,
        public student_grade_long: string
    ) { }
}

// create object
const result = new StudentResult(
    "Dhruv Shah",
    101,
    445,
    "A"
);

// rename long property names during destructuring
const {
    student_full_name_long: fullName,
    student_roll_number_long: rollNo,
    student_total_marks_long: totalMarks,
    student_grade_long: grade
} = result;

// Output
console.log("Name:", fullName);
console.log("Roll No:", rollNo);
console.log("Total Marks:", totalMarks);
console.log("Grade:", grade);
