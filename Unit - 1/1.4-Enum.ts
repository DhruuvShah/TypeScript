// Use an Enum to Define Days of the Week and Log a Value from It.

enum WeekDays{
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

let today : WeekDays = WeekDays.Friday;
console.log("Today is:",WeekDays[today]);