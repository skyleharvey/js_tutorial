// Returns the name of the day for a given date.
function dayName(date) {
  const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return daysOfTheWeek[date.getDay()];
}

// Returns a greeting for the given date.
function greeting(date) {
  return `Hello, world! Today is ${dayName(date)}!`
}
