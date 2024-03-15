const inquirer = require("inquirer"); // Requires the Inquirer library for prompting

function addDepartment(db, selectQuestion) {
  function addDeptQs() {
    inquirer
      .prompt([
        {
          name: "newDepartment",
          message: "What is the name of the new Department?",
          type: "input",
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

module.exports = addDepartment; // Exports the `addDepartment` function for use in other modules
