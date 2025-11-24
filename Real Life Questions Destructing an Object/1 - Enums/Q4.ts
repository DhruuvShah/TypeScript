// Use an Enum to Define Days of the Week and Log a Value from It

enum Days {
  Mon = "Monday",
  Tue = "Tuesday",
  Wed = "Wednesday",
  Thu = "Thursday",
  Fri = "Friday",
  Sat = "Saturday",
  Sun = "Sunday",
}

const selectedDay: Days = Days.Mon;
console.log("Selected day from enum:", selectedDay);
