//  A recruitment portal receives unpredictable applicant input and uses a function that only logs
// verification messages. Write a program. (→ any + void)

function logApplicantInput(input: any): void {
    console.log("Applicant input verified:", input);
}

logApplicantInput("Fresher with 1 project");
logApplicantInput({ skills: ["JS", "TS"], exp: 0 });

