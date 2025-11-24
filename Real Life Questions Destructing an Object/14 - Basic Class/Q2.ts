// Create a class Course with properties (courseName, duration) and a method to show details.
// (→ Basic class)

class Course {
    courseName: string;
    duration: number; // in months

    constructor(courseName: string, duration: number) {
        this.courseName = courseName;
        this.duration = duration;
    }

    showDetails(): void {
        console.log(`${this.courseName} - ${this.duration} months`);
    }
}

const c1 = new Course("Full Stack", 6);
c1.showDetails();

