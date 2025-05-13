
// Before Refactoring: Middle Man Code Smell
class Manager {
    constructor(employee) {
        this.employee = employee;
    }

    getEmployeeName() {
        return this.employee.getName();
    }

    getEmployeeSalary() {
        return this.employee.getSalary();
    }
}

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    getName() {
        return this.name;
    }

    getSalary() {
        return this.salary;
    }
}

// Usage
const employee = new Employee("John Doe", 50000);
const manager = new Manager(employee);
console.log(manager.getEmployeeName()); // John Doe
console.log(manager.getEmployeeSalary()); // 50000

// After Refactoring: Middle Man Code Smell Removed
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    getName() {
        return this.name;
    }

    getSalary() {
        return this.salary;
    }
}

// Usage
const employee = new Employee("John Doe", 50000);
console.log(employee.getName()); // John Doe
console.log(employee.getSalary()); // 50000

// NOTE: Some design patterns create middle man on purpose such as Proxy or Decorator.
// https://refactoring.guru/design-patterns/proxy
// https://refactoring.guru/design-patterns/decorator