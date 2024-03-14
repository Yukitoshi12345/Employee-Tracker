function viewRoles(db, selectQuestion) {
  const rolesTable = `SELECT roles.id, roles.title AS Title, roles.salary AS Salary, departments.department_name AS Department
    FROM roles
    JOIN departments ON roles.department_id = departments.id `;
  db.query(rolesTable, (err, results) => {
    if (err) {
      console.error(err);
      return;
    }
    console.table(results);
    selectQuestion();
  });
}

module.exports = viewRoles;
