function viewDepartment(db, selectQuestion) {
  const departmentTable = `SELECT d.id, d.department_name AS "Department Name" FROM departments d`;
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
