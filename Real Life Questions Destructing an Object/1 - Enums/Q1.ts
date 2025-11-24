// A hospital schedules doctor availability using fixed weekday names. Print the day assigned for
// emergency duty. (→ Enum)

enum Weekday {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

const emergencyDutyDay: Weekday = Weekday.Sunday;

console.log("Emergency duty day (hospital):", emergencyDutyDay);
