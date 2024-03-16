const inquirer = require("inquirer");

function viewEmployeeByDepartment(db, selectQuestion) {
  const departments = `SELECT id, department_name AS Department FROM departments`;
  db.query(departments, (err, results) => {
    if (err) {
      console.error(err);
      return;
    }
    const departmentChoices = results.map((result) => ({
      name: result.Department,
      value: result.id,
    }));

    function viewByDepartment() {
      inquirer
        .prompt([
          {
            type: "list",
            name: "department",
            message: "Filter by department:",
            choices: departmentChoices,
          },
        ])
        .then((answers) => {
          const employeesByDepartmentQuery = `
          SELECT e.id, e.first_name AS 'First Name', e.last_name AS 'Last Name', r.title as Title, r.salary as Salary, CONCAT(m.first_name, ' ', m.last_name) AS 'Manager' 
          FROM employees e 
          LEFT JOIN roles r ON e.role_id = r.id 
          LEFT JOIN employees m ON m.id = e.manager_id 
          WHERE r.department_id = ?`;

          db.query(
            employeesByDepartmentQuery,
            [answers.department],
            (err, results) => {
              if (err) {
                console.error(err);
              } else {
                console.log("Employees by Department:");
                console.table(results);
              }
              selectQuestion();
            }
          );
        })
        .catch((err) => {
          console.error(err);
        });
    }
    viewByDepartment();
  });
}

module.exports = viewEmployeeByDepartment;
