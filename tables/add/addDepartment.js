const inquirer = require("inquirer");

function capitaliseTitle(title) {
  return title.replace(/\b(\w)/g, (s) => s.toUpperCase());
}

function addDepartment(db, selectQuestion) {
  function addDeptQs() {
    inquirer
      .prompt([
        {
          name: "newDepartment",
          message: "What is the name of the new department?",
          type: "input",
          filter: capitaliseTitle, // Automatically capitalise each word's first letter
          validate: (input) => {
            // Check if the input is not just whitespace
            if (input.trim().length === 0) {
              return "Please enter a department name. It cannot be empty.";
            }
            return true;
          },
        },
      ])
      .then((answers) => {
        db.query(
          `INSERT INTO departments (department_name) VALUES (?)`,
          [answers.newDepartment],
          (err) => {
            if (err) {
              console.error(err);
            } else {
              console.log("The department has been added!");
            }
            selectQuestion(); // Call the callback function here
          }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  addDeptQs();
}

module.exports = addDepartment;
