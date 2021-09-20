// Class definition
class EmployeePayrollData {
  // property
  id;
  salary;
  gender;
  startDate;

  // constructor
  constructor(...params) {
    this.id = params[0];
    this.name = params[1];
    this.salary = params[2];
    this.gender = params[3];
    this.startDate = params[4];
  }

  // getter and setter methods for both name and salary
  get name() { return this._name; }
  set name(name) { this._name = name; }
  get salary() { return this._salary; }
  set salary(salary) { this._salary = salary; }

  // method
  toString() {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const empDate = this.startDate === undefined ? "undefined" : this.startDate.toLocalDateString("en-US", options);
    return "id=" + this.id + ",name=" + this.name + ",salary=" + this.salary + ",gender=" + this.gender + ",start date=" + this.startDate;
  }
}

let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000, "M", "2021-05-22");
console.log(employeePayrollData.toString());

employeePayrollData.name = "John";
console.log(employeePayrollData.toString());

let newEmployeePayrollData = new EmployeePayrollData(1, "Terrisa", 30000, "F", "2021-05-22");
console.log(newEmployeePayrollData.toString());