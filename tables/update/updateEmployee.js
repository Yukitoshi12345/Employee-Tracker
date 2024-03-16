const inquirer = require("inquirer");

function updateEmployeeRole(db, selectQuestion) {
  // Query to get current employees
  db.query(
    "SELECT id, CONCAT(first_name, ' ', last_name) AS EmployeeName FROM employees",
    (err, employeeResults) => {
      if (err) {
        console.error(err);
        return;
      }
      const employeeChoices = employeeResults.map((employee) => ({
        name: employee.EmployeeName,
        value: employee.id,
      }));

      // Query to get roles
      db.query("SELECT id, title FROM roles", (err, roleResults) => {
        if (err) {
          console.error(err);
          return;
        }
        const roleChoices = roleResults.map((role) => ({
          name: role.title,
          value: role.id,
        }));

        // Prompt to select employee and new role
        inquirer
          .prompt([
            {
              name: "updatedEmployee",
              message: "Which employee would you like to update?",
              type: "list",
              choices: employeeChoices,
            },
            {
              name: "updatedRole",
              message: "What is their new role?",
              type: "list",
              choices: roleChoices,
            },
          ])
          .then((answers) => {
            // Update employee's role
            db.query(
              "UPDATE employees SET role_id = ? WHERE id = ?",
              [answers.updatedRole, answers.updatedEmployee],
              (updateErr) => {
                if (updateErr) {
                  console.error(updateErr);
                  return;
                }

                // Log confirmation
                console.log(
                  `Employee's new role has been updated in the Database`
                );
                selectQuestion();
              }
            );
          })
          .catch((promptErr) => {
            console.error(promptErr);
          });
      });
    }
  );
}

module.exports = updateEmployeeRole;
