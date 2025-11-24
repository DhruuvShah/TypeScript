// A survey platform accepts answers of unknown type and needs a logger function that just
// prints activity without returning anything. Write a program. (→ any + void)

function logSurveyAnswer(answer: any): void {
    console.log("Survey answer received:", answer);
}

logSurveyAnswer("Yes");
logSurveyAnswer(5);
logSurveyAnswer({ option: "Maybe" });
