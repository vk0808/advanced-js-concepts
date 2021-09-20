let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyHrsAndWageArr = new Array();

while (totalEmpHrs <= MAX_HRS_PER_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
  totalWorkingDays++;

  let empCheck = Math.floor(Math.random() * 10) % 3;
  let empHrs = getWorkingHours(empCheck);

  totalEmpHrs += empHrs;
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

console.log("Daily hours worked and wage earned: " + empDailyHrsAndWageArr);