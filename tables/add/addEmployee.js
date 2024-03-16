const inquirer = require("inquirer");

function addEmployee(db, selectQuestion) {
  const rolesQuery = `SELECT id, title AS Title FROM roles`;
  db.query(rolesQuery, (err, rolesResults) => {
    if (err) {
      console.error(err);
      return;
    }

    const rolesChoices = rolesResults.map((role) => ({
      name: role.Title,
      value: role.id,
    }));

    const managersQuery = `SELECT id, CONCAT(first_name, " ", last_name) AS Name FROM employees`;
    db.query(managersQuery, (err, managersResults) => {
      if (err) {
        console.error(err);
        return;
      }

      const managerChoices = managersResults.map((manager) => ({
        name: manager.Name,
        value: manager.id,
      }));

      function addEmployeeQs() {
        inquirer
          .prompt([
            {
              name: "FirstName",
              message: "What is the new Employee's first name?",
              type: "input",
            },
            {
              name: "LastName",
              message: "What is the new Employee's last name?",
              type: "input",
            },
            {
              name: "roles",
              message: "What is the new Employee's role?",
              type: "list",
              choices: rolesChoices,
            },
            {
              name: "manager",
              message: "Who is the Employee's manager?",
              type: "list",
              choices: managerChoices,
            },
          ])
          .then((answers) => {
            const insertQuery = `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;
            db.query(
              insertQuery,
              [
                answers.FirstName,
                answers.LastName,
                answers.roles,
                answers.manager,
              ],
              (err) => {
                if (err) {
                  console.error(err);
                } else {
                  console.log("A new employee has been added!");
                }
                selectQuestion(); // Call the callback function here
              }
            );
          })
          .catch((err) => {
            console.error(err);
          });
      }
      addEmployeeQs(); // This function is now being called correctly within the db.query callback
    });
  });
}

module.exports = addEmployee;
