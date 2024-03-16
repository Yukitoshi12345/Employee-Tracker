const inquirer = require("inquirer");

function deleteRole(db, selectQuestion) {
  const deletingRoles = `SELECT id, title FROM roles`;
  db.query(deletingRoles, (err, results) => {
    if (err) {
      console.error(err);
      return;
    }

    const rolesChoices = results.map((result) => ({
      name: result.title,
      value: result.id,
    }));

    function removingRolesQs() {
      inquirer
        .prompt([
          {
            name: "role",
            message: "Which role would you like to delete?",
            type: "list",
            choices: rolesChoices,
          },
        ])
        .then((answers) => {
          db.query(`DELETE FROM roles WHERE id = ?`, [answers.role], (err) => {
            if (err) {
              console.error(err);
            } else {
              console.log("Role successfully deleted!");
            }
            selectQuestion();
          });
        })
        .catch((err) => {
          console.error(err);
        });
    }
    removingRolesQs();
  });
}

module.exports = deleteRole;
