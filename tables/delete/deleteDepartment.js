const inquirer = require("inquirer");

function deleteDepartment(db, selectQuestion) {
  const deletingDepartment = `SELECT department_name FROM departments`;
  db.query(deletingDepartment, (err, results) => {
    if (err) {
      console.error(err);
      return;
    }

    const departmentChoices = results.map((result) => ({
      name: result.department_name,
      value: result.id,
    }));

    function removingDeptQs() {
      inquirer
        .prompt([
          {
            name: "department",
            message: "Which department would you like to delete?",
            type: "list",
            choices: departmentChoices,
          },
        ])
        .then((answers) => {
          db.query(
            `DELETE FROM departments WHERE department_name = ?`,
            [answers.department],
            (err) => {
              if (err) {
                console.error(err);
              } else {
                console.log("Role successfully deleted!");
              }
              selectQuestion(); // Call the callback function here
            }
          );
        })
        .catch((err) => {
          console.error(err);
        });
    }
    removingDeptQs();
  });
}

module.exports = deleteDepartment;
