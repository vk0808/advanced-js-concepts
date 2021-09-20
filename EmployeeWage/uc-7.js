// Variables
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_PER_MONTH = 160;

let totalEmpWage = 0;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
var empDailyHrsMap = new Map();
var empDailyWageMap = new Map();
var empDailyHrsAndWageArr = new Array();

// function definition
function getWorkingHours() {
  let empCheck = Math.floor(Math.random() * 10 % 3);
  switch (empCheck) {
    case IS_PART_TIME:
      return PART_TIME_HOURS;

    case IS_FULL_TIME:
      return FULL_TIME_HOURS;

    default:
      return 0;
  }
}

function calWageBased_RateHr(empHrs) {
  return empHrs * WAGE_PER_HOUR;
}

while (totalEmpHrs <= MAX_HRS_PER_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
  totalWorkingDays++;

  empCheck = Math.floor(Math.random() * 10) % 3;
  empHrs = getWorkingHours(empCheck);

  totalEmpHrs += empHrs;
  empDailyWageArr.push(calWageBased_RateHr(empHrs));
  empDailyHrsMap.set(totalWorkingDays, empHrs);
  empDailyWageMap.set(totalWorkingDays, calWageBased_RateHr(empHrs));

  empDailyHrsAndWageArr.push(
    {
      day: totalWorkingDays,
      dailyHours: empHrs,
      dailyWage: calWageBased_RateHr(empHrs),
      toString() {
        return '\nDay' + this.day + ' => Working Hours is ' + this.dailyHours + ' And Wage Earned = ' + this.dailyWage
      },
    }
  );
}

function calTotalWage_dailyWage(dailyWage) {
  totalEmpWage += dailyWage;
}

function totalWages(totalWage, dailyWage) {
  return totalWage + dailyWage;
}

empDailyWageArr.forEach(calTotalWage_dailyWage);
console.log("Total Days: " + totalWorkingDays + " Total Hrs: " + totalEmpHrs + " Emp Wage: " + totalEmpWage);
console.log("Emp Wage with reduce: " + empDailyWageArr.reduce(totalWages, 0));

// UC 7B - Show the day along with daily wage using Array map helper function
let currentDay = 0;
function mapDayWithWage(dailyWage) {
  currentDay++;
  return currentDay + " = " + dailyWage;
}

let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("Daily Wage Map: " + mapDayWithWageArr);

//UC 7C - Shows Days when Full time wage of 160 were earned
function getAll_fullTimeWage(dailyWage) {
  return dailyWage.includes("160");
}

let fullDayWageArr = mapDayWithWageArr.filter(getAll_fullTimeWage);
console.log("Daily Wage Filter When Fulltime Wage Earned: " + fullDayWageArr);

//UC 7D - Find the first occurrence when Full Time Wage was earned using find function
function findFulltimeWage(dailyWage) {
  return dailyWage.includes("160");
}

let firstFullTime = mapDayWithWageArr.find(findFulltimeWage);
console.log("First time Fulltime wage was earned on Day: " + firstFullTime);


//UC 7E - Check if Every Element of Full Time Wage is truly holding Full time Wage
function isAllFulltimeWage(dailyWage) {
  return dailyWage.includes("160");
}

let isFullTime = fullDayWageArr.every(isAllFulltimeWage);
console.log("Check All Elements have Full Time Wage: " + isFullTime);

//UC 7F - Check if there is any Part Time Wage
function isAnyPartTimeWage(dailyWage) {
  return dailyWage.includes("80");
}

let isPartTime = mapDayWithWageArr.some(isAnyPartTimeWage);
console.log("Check If Any Part Time Wage: " + isPartTime);


//UC 7G - Find the number of Days the employee worked.
function totalDaysWorked(numOfDays, dailyWage) {
  if (dailyWage > 0) return numOfDays + 1;
  return numOfDays;
}

let workedDays = empDailyWageArr.reduce(totalDaysWorked);
console.log("Number of Days Emp Worked: " + workedDays);