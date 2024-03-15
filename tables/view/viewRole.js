function viewRole(db, selectQuestion) {
  const rolesTable = `SELECT r.id, r.title AS Title, r.salary AS Salary, d.department_name AS Department
    FROM roles r
    JOIN departments d ON r.department_id = d.id `;
  db.query(rolesTable, (err, results) => {
    if (err) {
      console.error(err);
      return;
    }
    console.table(results);
    selectQuestion();
  });
}

module.exports = viewRole;
