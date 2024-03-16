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

      // Add an option for no manager
      const managerChoices = [{ name: "No Manager", value: null }].concat(
        managersResults.map((manager) => ({
          name: manager.Name,
          value: manager.id,
        }))
      );

      function addEmployeeQs() {
        inquirer
          .prompt([
            {
              name: "FirstName",
              message: "What is the new Employee's first name?",
              type: "input",
              validate: (input) => {
                if (input.trim() === "") {
                  return "Please enter a first name.";
                }
                return true;
              },
            },
            {
              name: "LastName",
              message: "What is the new Employee's last name?",
              type: "input",
              validate: (input) => {
                if (input.trim() === "") {
                  return "Please enter a last name.";
                }
                return true;
              },
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
            const firstNameCapitalised =
              answers.FirstName.charAt(0).toUpperCase() +
              answers.FirstName.slice(1);
            const lastNameCapitalised =
              answers.LastName.charAt(0).toUpperCase() +
              answers.LastName.slice(1);

            db.query(
              `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`,
              [
                firstNameCapitalised,
                lastNameCapitalised,
                answers.roles,
                answers.manager,
              ],
              (err) => {
                if (err) {
                  console.error(err);
                } else {
                  console.log("A new employee has been added!");
                }
                selectQuestion();
              }
            );
          })
          .catch((err) => {
            console.error(err);
          });
      }
      addEmployeeQs();
    });
  });
}

module.exports = addEmployee;
