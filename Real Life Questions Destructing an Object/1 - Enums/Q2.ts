// A transportation company assigns specific bus routes to fixed days of the week. Print the day
// reserved for maintenance checks. (→ Enum)

enum RouteDay {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

const maintenanceCheckDay: RouteDay = RouteDay.Wednesday;

console.log("Bus maintenance check day:", maintenanceCheckDay);
