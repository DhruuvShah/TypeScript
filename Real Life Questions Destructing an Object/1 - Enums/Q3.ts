// A company wants to store weekday names in a structured format and print the day reserved
// for weekly maintenance. Write a program to implement this scenario. (→ Enum)

enum CompanyDay {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

const weeklyMaintenanceDay: CompanyDay = CompanyDay.Friday;

console.log("Weekly maintenance day (company):", weeklyMaintenanceDay);

