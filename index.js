const inquirer = require("inquirer");
const mysql = require(`mysql2`);

const viewEmployee = require("./tables/view/viewEmployee");
const viewDepartment = require("./tables/view/viewDepartment");
const viewRole = require("./tables/view/viewRole");
const viewEmployeeByDepartment = require("./tables/view/viewEmployeeByDepartment");
const viewEmployeeByManager = require("./tables/view/viewEmployeeByManager");
const viewDepartmentBudget = require("./tables/view/viewTotalUtlisedBudget");

const addEmployee = require("./tables/add/addEmployee");
const addDepartment = require("./tables/add/addDepartment");
const addRole = require("./tables/add/addRole");

const updateEmployeeRoles = require("./tables/update/updateEmployee");

const deleteDepartment = require("./tables/delete/deleteDepartment");
const deleteEmployee = require("./tables/delete/deleteEmployee");
const deleteRole = require("./tables/delete/deleteRole");

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
          "View Employee By Department",
          "View Employee by Manager",
          "View Total Utilised Budget",
          "Add New Employee",
          "Update Employee Role",
          "View All Roles",
          "Add New Role",
          "View All Departments",
          "Add New Department",
          "Delete Department",
          "Delete Employee",
          "Delete Role",
          "Exit",
        ],
      },
    ])
    .then((answer) => {
      switch (answer.queryOptions) {
        case "View All Employees":
          viewEmployee(db, selectQuestion);
          break;
        case "View Employee By Department":
          viewEmployeeByDepartment(db, selectQuestion);
          break;
        case "View Employee By Manager":
          viewEmployeeByManager(db, selectQuestion);
          break;
        case "View Total Utilised Budget":
          viewDepartmentBudget(db, selectQuestion);
          break;
        case "Add New Employee":
          addEmployee(db, selectQuestion);
          break;
        case "Update Employee Role":
          updateEmployeeRoles(db, selectQuestion);
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
        case "Add New Department":
          addDepartment(db, selectQuestion);
          break;
        case "Delete Department":
          deleteDepartment(db, selectQuestion);
          break;
        case "Delete Employee":
          deleteEmployee(db, selectQuestion);
          break;
        case "Delete Role":
          deleteRole(db, selectQuestion);
          break;
        case "Exit":
          db.end();
          break;
      }
    });
}

selectQuestion();
module.exports = selectQuestion;
