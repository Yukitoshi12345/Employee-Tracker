const inquirer = require("inquirer");

function updateEmployeeByManager(db, selectQuestion) {
  // Query to get a list of all employees
  db.query(
    "SELECT id, CONCAT(first_name, ' ', last_name) AS Name FROM employees",
    (err, employees) => {
      if (err) {
        console.error(err);
        return;
      }
      const employeeChoices = employees.map((employee) => ({
        name: employee.Name,
        value: employee.id,
      }));

      // Add a 'No Manager' option
      const noManagerChoice = {
        name: "No Manager",
        value: null,
      };

      // Query to get potential managers (could also be all employees)
      db.query(
        "SELECT id, CONCAT(first_name, ' ', last_name) AS Name FROM employees WHERE manager_id IS NULL",
        (err, managers) => {
          if (err) {
            console.error(err);
            return;
          }
          const managerChoices = [noManagerChoice].concat(
            managers.map((manager) => ({
              name: manager.Name,
              value: manager.id,
            }))
          );

          // Prompt user to select the employee to update
          inquirer
            .prompt([
              {
                type: "list",
                name: "employeeId",
                message: "Which employee's manager do you want to update?",
                choices: employeeChoices,
              },
              {
                type: "list",
                name: "managerId",
                message: "Who is the new manager?",
                choices: managerChoices,
              },
            ])
            .then((answers) => {
              // Update the employee's manager
              const updateQuery =
                answers.managerId === null
                  ? "UPDATE employees SET manager_id = NULL WHERE id = ?"
                  : "UPDATE employees SET manager_id = ? WHERE id = ?";

              const queryParams =
                answers.managerId === null
                  ? [answers.employeeId]
                  : [answers.managerId, answers.employeeId];

              db.query(updateQuery, queryParams, (err) => {
                if (err) {
                  console.error(err);
                  return;
                }
                console.log(
                  `Employee's manager has been updated in the Database.`
                );
                selectQuestion();
              });
            })
            .catch((err) => {
              console.error(err);
            });
        }
      );
    }
  );
}

module.exports = updateEmployeeByManager;
