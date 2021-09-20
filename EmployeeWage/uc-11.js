// Object Operations using arrow functions
// UC 11A
let totalWages = empDailyHrsAndWageArr
  .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
  .reduce((totalWage, dailyHrsAndWage) => totalWage += dailyHrsAndWage.dailyWage, 0);

let totalHours = empDailyHrsAndWageArr
  .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
  .reduce((totalHours, dailyHrsAndWage) => totalHours += dailyHrsAndWage.dailyHours, 0);
console.log("Total Hours: " + totalHours + " Total Wages: " + totalWages);


// UC-11B 
let fullWorkingDayStrArr = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8)
  .forEach(dailyHrsAndWage => console.log(dailyHrsAndWage.toString()));
console.log("Logging Full Work Days" + fullWorkingDayStrArr);


// UC-11C 
let partWorkingDayStrArr = empDailyHrsAndWageArr
  .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4)
  .map(dailyHrsAndWage => dailyHrsAndWage.toString());
console.log("Part Working Days: " + partWorkingDayStrArr);


// UC-11D 
let nonWorkingDayStrArr = empDailyHrsAndWageArr
  .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 0)
  .map(dailyHrsAndWage => dailyHrsAndWage.dayNum);
console.log("Non Working Days: " + nonWorkingDayStrArr);