const inquirer = require("inquirer");

function viewEmployeeByManager(db, selectQuestion) {
  // Query to get a list of managers
  const managersQuery = `
    SELECT DISTINCT m.id, CONCAT(m.first_name, ' ', m.last_name) AS Manager
    FROM employees e
    JOIN employees m ON e.manager_id = m.id
    WHERE e.manager_id IS NOT NULL`;

  db.query(managersQuery, (err, results) => {
    if (err) {
      console.error(err);
      return;
    }
    const managerChoices = results.map((manager) => ({
      name: manager.Manager,
      value: manager.id,
    }));

    function viewByManager() {
      inquirer
        .prompt([
          {
            type: "list",
            name: "managerId",
            message: "Filter by manager:",
            choices: managerChoices,
          },
        ])
        .then((answers) => {
          // SQL query to select employees by manager
          const employeesByManagerQuery = `
          SELECT e.id, e.first_name AS 'First Name', e.last_name AS 'Last Name', r.title AS Title, d.department_name AS Department, r.salary AS Salary
          FROM employees e
          LEFT JOIN roles r ON e.role_id = r.id
          LEFT JOIN departments d ON r.department_id = d.id
          WHERE e.manager_id = ?`;

          db.query(
            employeesByManagerQuery,
            [answers.managerId],
            (err, results) => {
              if (err) {
                console.error(err);
              } else {
                console.log("Employees by Manager:");
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
    viewByManager();
  });
}

module.exports = viewEmployeeByManager;
