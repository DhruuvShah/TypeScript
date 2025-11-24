// A job application form may contain optional fields like middle name or alternate contact. Write
// a program using an interface with optional properties and access them safely. (→ Optional
// properties)

interface JobForm {
    fullName: string;
    middleName?: string;
    alternateContact?: string;
}

const applicant: JobForm = {
    fullName: "Amit Sharma",
    alternateContact: "9999999999"
};

console.log(applicant);
