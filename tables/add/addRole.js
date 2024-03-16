const inquirer = require("inquirer");

function capitaliseTitle(title) {
  return title.replace(/\b(\w)/g, (s) => s.toUpperCase());
}

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
            message: "What is the title of the new role?",
            type: "input",
            filter: capitaliseTitle, // This will capitalize each word's first letter
            validate: (input) => {
              // Validate to ensure that the input is not empty
              if (input.trim().length === 0) {
                return "The role title cannot be empty. Please enter a title.";
              }
              return true;
            },
          },
          {
            name: "salary",
            message: "What is the salary of the new role?",
            type: "input",
            validate: (input) => {
              // Ensure that the input is a valid number
              if (isNaN(parseFloat(input))) {
                return "Please enter a valid salary (number).";
              }
              return true;
            },
          },
          {
            name: "departmentId",
            message: "Which department does this role belong to?",
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
