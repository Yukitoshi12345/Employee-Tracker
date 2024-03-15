function viewDepartment(db, selectQuestion) {
  const departmentTable = `SELECT id, department_name AS Department FROM departments`;
  db.query(departmentTable, (err, results) => {
    if (err) {
      console.error(err);
      return;
    }
    console.table(results);
    selectQuestion();
  });
}

module.exports = viewDepartment;
