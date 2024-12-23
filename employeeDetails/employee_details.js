const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'JavaScript' },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'JavaScript' },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'Python' },
    { id: 4, name: 'Igor Cickovskij', age: 50, department: 'IT', salary: 160000, specialization: 'Rust' },
    { id: 5, name: 'Eva Brown', age: 18, department: 'HR', salary: 60000, specialization: 'Rust' },
    //... More employee records can be added here
  ];
 // Function to display all employees
 function displayEmployees() {
 const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}; name: ${employee.name}, age: ${employee.age}, department - ${employee.department}, salary - $${employee.salary}, specialization - ${employee.specialization}</p>`).join('');
 document.getElementById('employeesDetails').innerHTML = totalEmployees;
 }
function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
  }
  function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
     const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
     document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}
function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
    document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else{
      document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
    }
}
function findEmployeeBySpec() {
  const hrEmployees = employees.filter(employee => employee.specialization === 'Rust');
     const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary} - ${employee.specialization}</p>`).join('');
     document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}