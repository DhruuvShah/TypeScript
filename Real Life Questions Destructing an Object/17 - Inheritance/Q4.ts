// Write a student to Create a Student class that inherits from Person and adds course info

class PersonBase {
    constructor(public name: string, public age: number) { }
}

class StudentInfo extends PersonBase {
    constructor(name: string, age: number, public course: string) {
        super(name, age);
    }

    show() {
        console.log(
            `Student Name: ${this.name}, Age: ${this.age}, Course: ${this.course}`
        );
    }
}

const st = new StudentInfo("Amit", 19, "B.Tech");
st.show();
