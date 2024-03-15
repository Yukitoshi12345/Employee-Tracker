const inquirer = require("inquirer");

function addRole(db, selectQuestion) {
  const addingRoles = `SELECT id, department_name FROM departments`;
  db.query(addingRoles, (err, results) => {
    if (err) {
      console.error(err);
      return;
    }

    const departmentChoices = results.map((result) => ({
      name: result.department_name,
      value: result.id,
    }));

    function addRolesQs() {
      inquirer
        .prompt([
          {
            name: "title",
            message: "What is the title of your new role?",
            type: "input",
          },
          {
            name: "salary",
            message: "What is the salary of your new role?",
            type: "input",
          },
          {
            name: "departmentId",
            message: "Select one of the departments",
            type: "list",
            choices: departmentChoices,
          },
        ])
        .then((answers) => {
          db.query(
            `INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)`,
            [answers.title, answers.salary, answers.departmentId],
            (err) => {
              if (err) {
                console.error(err);
              } else {
                console.log("A new role has been added!");
              }
              selectQuestion(); // Call the callback function here
            }
          );
        })
        .catch((err) => {
          console.error(err);
        });
    }
    addRolesQs();
  });
}

module.exports = addRole;
