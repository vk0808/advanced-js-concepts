// Class definition
class EmployeePayrollData {
  // property
  id;
  salary;

  // constructor
  constructor(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
  }

  // getter and setter methods for both name and salary
  get name() { return this._name; }
  set name(name) { this._name = name; }

  get salary() { return this._salary; }
  set salary(salary) { this._salary = salary; }

  // method
  toString() {
    return "id=" + this.id + ",name=" + this.name + ",salary=" + this.salary;
  }
}

let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000);
console.log(employeePayrollData.toString());

employeePayrollData.name = "John";
employeePayrollData.salary = 20000;
console.log(employeePayrollData.toString());