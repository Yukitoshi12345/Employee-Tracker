const inquirer = require("inquirer");
const mysql = require(`mysql2`);

const viewEmployee = require("./tables/view/viewEmployee");
const viewDepartment = require("./tables/view/viewDepartment");
const viewRole = require("./tables/view/viewRole");

const addEmployee = require("./tables/add/addEmployee");
const addDepartment = require("./tables/add/addDepartment");
const addRole = require("./tables/add/addRole");

const updateEmployeeRoles = require("./tables/update/updateEmployee");

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
          viewRole(db, selectQuestion);
          break;
        case "Add New Role":
          addRole(db, selectQuestion);
          break;
        case "View All Departments":
          viewDepartment(db, selectQuestion);
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
