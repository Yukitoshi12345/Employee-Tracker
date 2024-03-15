const inquirer = require("inquirer"); // Requires the Inquirer library for prompting

function addDepartment(db, selectQuestion) {
  // Defines a function `addDepartment` that takes two arguments:
  // - `db`: Likely a database connection object
  // - `selectQuestion`: A callback function to execute after adding a department

  function addingDeptQs() {
    // Nested function `addingDeptQs` to handle the prompting logic
    inquirer
      .prompt([
        {
          name: "newDepartment",
          message: "What is the name of the new Department?",
          type: "input",
        },
      ])
      .then((answers) => {
        // Handles successful prompt response
        db.query(
          // Assuming `db.query` is a database query function
          `INSERT INTO departments(department_name) VALUES (?)`,
          [answers.newDepartment],
          (err) => {
            if (err) {
              console.error(err); // Logs any errors during the query
            } else {
              console.log("The department has been added");
              selectQuestion(); // Calls the callback function
            }
          }
        );
      })
      .catch((err) => {
        console.error(err); // Logs any errors during the prompting process
      });
  }

  addingDeptQs(); // Immediately calls the nested function to initiate prompting
}

module.exports = addDepartment; // Exports the `addDepartment` function for use in other modules
