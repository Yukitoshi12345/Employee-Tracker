const inquirer = require("inquirer");

function viewDepartmentBudget(db, selectQuestion) {
  // Query to get a list of departments
  db.query("SELECT id, department_name FROM departments", (err, results) => {
    if (err) {
      console.error(err);
      return;
    }

    const departmentChoices = results.map((department) => ({
      name: department.department_name,
      value: department.id,
    }));

    function viewBudgetByDepartment() {
      inquirer
        .prompt([
          {
            type: "list",
            name: "departmentId",
            message: "Select the department to view its utilised budget:",
            choices: departmentChoices,
          },
        ])
        .then((answers) => {
          const budgetQuery = `
          SELECT d.department_name, SUM(r.salary) AS TotalBudget
          FROM employees e
          JOIN roles r ON e.role_id = r.id
          JOIN departments d ON r.department_id = d.id
          WHERE d.id = ?
          GROUP BY d.department_name`;

          db.query(budgetQuery, [answers.departmentId], (err, results) => {
            if (err) {
              console.error(err);
              return;
            }

            const departmentName = results[0].department_name;
            const totalBudget = results[0].TotalBudget;
            console.log(
              `The total utilised budget for ${departmentName} department is: $${totalBudget}`
            );
            selectQuestion();
          });
        })
        .catch((err) => {
          console.error(err);
        });
    }

    viewBudgetByDepartment();
  });
}

module.exports = viewDepartmentBudget;
