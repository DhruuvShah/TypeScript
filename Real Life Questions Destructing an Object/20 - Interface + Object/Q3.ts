// Create a student record system where the structure of student data is predefined using an
// interface. Initialize one student object. (→ Interface & object)

interface StudentRecord {
    id: number;
    name: string;
    course: string;
    year: number;
}

const student1: StudentRecord = {
    id: 101,
    name: "Dhruv",
    course: "BCA",
    year: 1
};

console.log(student1);
