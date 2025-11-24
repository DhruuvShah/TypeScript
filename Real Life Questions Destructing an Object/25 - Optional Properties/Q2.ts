// A clinic registration form has optional fields such as emergencyContact or previousDoctor.
// Demonstrate optional properties. (→ Optional properties)

interface ClinicForm {
    name: string;
    emergencyContact?: string;
    previousDoctor?: string;
}

const patient: ClinicForm = {
    name: "Rahul",
    emergencyContact: "9876543210"
};

console.log(patient);
