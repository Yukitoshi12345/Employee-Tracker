const inquirer = require("inquirer");
const mysql = require(`mysql2`);
const ctable = require(`console.table`);

const viewEmployee = require("./tables/view/viewEmployee");
const addEmployee = require("./tables/add/addEmployee");
const updateEmployee = require("./tables/update/updateEmployee");

require("dotenv").config();

const db = mysql.createConnection({
  host: "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

function selectQuestion() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        name: "queryOptions",
        choices: [
          "View All Employees",
          "Add New Employee",
          "Update Employee Role",
          "View All Roles",
          "Add New Role",
          "View All Departments",
          "Add New Department",
          "Exit",
        ],
      },
    ])
    .then((answer) => {
      switch (answer.queryOptions) {
        case "View All Employees":
          viewEmployee(db, selectQuestion);
          break;
        case "Add New Employee":
          addEmployee();
          break;
        case "Update Employee Role":
          updateEmployeeRoles();
          break;
        case "View All Roles":
          viewRoles();
          break;
        case "Add New Role":
          addRole();
          break;
        case "View All Departments":
          viewDepartment();
          break;
        case "Add New Departments":
          addDepartment();
          break;
        case "Exit":
          db.end();
          break;
      }
    });
}

selectQuestion();
module.exports = selectQuestion;
