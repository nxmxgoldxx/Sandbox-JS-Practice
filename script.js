var weekday = new Date().toLocaleString("en-US", { weekday: "long" });

// console.log(weekday);

if (weekday === "Monday") {
  console.log("Let’s get this week started!");
} else if (weekday === "Tuesday") {
  console.log("Worky work!");
} else if (weekday === "Wednesday") {
  console.log("Worky work!");
} else if (weekday === "Thursday") {
  console.log("Worky work!");
} else if (weekday === "Friday") {
  console.log("Weekend's Almost here!");
} else {
  console.log("WEEKEND, YAYYY!!!");
}
