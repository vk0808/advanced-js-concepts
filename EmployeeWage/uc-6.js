// variables
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_PER_MONTH = 160;

let empHrs = 0;
let empWage;
let empCheck;
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

empWage = calWageBased_RateHr(totalEmpHrs);
console.log("Total Days: " + totalWorkingDays + " Total Hrs: " + totalEmpHrs + " Emp Wage: " + empWage);