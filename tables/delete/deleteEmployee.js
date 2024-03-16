const inquirer = require("inquirer");

function deleteEmployee(db, selectQuestion) {
  const deletingEmployee = `SELECT id, CONCAT(first_name, " ", last_name) AS Name FROM employees`;
  db.query(deletingEmployee, (err, results) => {
    if (err) {
      console.error(err);
      return;
    }

    const employeeChoices = results.map((result) => ({
      name: result.Name,
      value: result.id,
    }));

    function removingEmployeeQs() {
      inquirer
        .prompt([
          {
            name: "employee",
            message: "Which employee would you like to delete?",
            type: "list",
            choices: employeeChoices,
          },
        ])
        .then((answers) => {
          db.query(
            `DELETE FROM employees WHERE id = ?`,
            [answers.employee],
            (err) => {
              if (err) {
                console.error(err);
              } else {
                console.log("Employee successfully deleted!");
              }
              selectQuestion();
            }
          );
        })
        .catch((err) => {
          console.error(err);
        });
    }
    removingEmployeeQs();
  });
}

module.exports = deleteEmployee;
