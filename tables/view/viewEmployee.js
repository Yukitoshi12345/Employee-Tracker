// Displays the name, title, salary, department, and manager for each employee
function viewEmployee(db, selectQuestion) {
  const sql = `SELECT e.id, e.first_name, e.last_name, r.title, r.salary AS Salary, d.department_name AS Department, 
    CONCAT(m.first_name, ' ', m.last_name) AS Manager
    FROM employees e
    LEFT JOIN roles r ON e.role_id = r.id
    LEFT JOIN departments d ON r.department_id = d.id
    LEFT JOIN employees m ON e.Manager_id = m.id;`;
  db.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      return;
    }
    console.table(results);
    selectQuestion();
  });
}

module.exports = viewEmployee;
