![JavaScript](https://img.shields.io/badge/JavaScript-orange) ![Node.js](https://img.shields.io/badge/Node.js-blue) ![Inquirer@8.2.4](https://img.shields.io/badge/Inquirer@8.2.4-green) ![MySQL2@3.9.1](https://img.shields.io/badge/MySQL2@3.9.1-lightgreen) ![Dotenv@16.4.4](https://img.shields.io/badge/Dotenv@16.4.4-grey)

<h1 align = "center"> Employee Tracker </h1>

Managing a company requires meticulous organisation and an understanding of different departments, roles, and employees. This command-line application addresses this need by empowering business owners like you to gain full control over their company's internal structure.

Through a user-friendly interface, you can view comprehensive information about departments, roles, and employees. This includes details like department names and IDs, employee salaries and managers, and role-specific data. Adding new departments, roles, and employees is made simple with easy-to-follow prompts, allowing you to adapt your company structure as needed. Additionally, you can efficiently update employee roles, ensuring your team remains aligned with changing needs.

With this application, you gain a single source of truth for your company's organisational structure, enabling informed decision-making and fostering a well-managed, efficient environment.

## Table of Contents

- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Technologies Used](#technologies-used)
- [Test Instruction](#test-instruction)
- [Video](#video)
- [Output](#output)
- [Installation](#installation)
- [License](#license)

## User Story

```
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Acceptance Criteria

```
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database
WHEN I choose to update an employee manager
THEN I am prompted to select an employee and a new manager, and the employee’s manager is updated in the database
WHEN I choose to view employees by manager
THEN I am presented with a list of managers, and upon selecting one, I am shown a formatted table of all employees who report to that manager
WHEN I choose to view employees by department
THEN I am presented with a list of departments, and upon selecting one, I am shown a formatted table of all employees in that department
WHEN I choose to delete a department
THEN I am prompted to select a department, and that department is removed from the database along with any associated roles and employees
WHEN I choose to delete a role
THEN I am prompted to select a role, and that role and any associated employees are removed from the database
WHEN I choose to delete an employee
THEN I am prompted to select an employee, and that employee is removed from the database
WHEN I choose to view the total utilised budget of a department
THEN I am prompted to select a department, and I am then presented with the total sum of salaries for all employees in that department
```

## Technologies Used

- JavaScript
- Node.js
- Inquirer (version 8.2.4)
- MySQL2 (version 3.9.1)
- Dotenv (version 16.4.4)

## Test Instruction

To use this project:

- Get a copy of this repo to your local machine.
- Install the `Node Module`

```
npm install
```

- Install `MySQL2`
- Change the .env copy file to .env and insert your database password
- Navigate to `db`, and connect to the database by typing in `mysql -u root -p`, and type in your password.
- Type in the following:

```
source schema.sql;
```

```
source seeds.sql;
```

- Navigate to `index.js`. Start the index.js by typing in the following:

```
node index.js
```

## Video

![]()

## Output

This project lets you manage your company's departments, roles, and employees efficiently through simple command-line prompts.

1. <b>Run the application:</b>

- Navigate to your project directory in the terminal and execute 'npm start'.

<br>

2. <b>Choose your action: </b>
   The program will display a menu with options:

- View All Departments
- View All Roles
- View All Employees
- View Employee By Department
- View Employee by Manager
- View Total Utilised Budget
- Add New Department
- Add New Role
- Add New Employee
- Update Employee Role
- Update Employee By Manager
- Delete Department
- Delete Role
- Delete Employee
- Exit

<br>

3. <b>View data:</b>
   You can view information in a formatted table for employees, roles, and departments:

- View All Employees: Shows details such as employee IDs, names, job titles, departments, salaries, and managers.
- View All Roles: Presents job titles, role IDs, the departments each belongs to, and the salaries.
- View All Departments: Displays department names alongside their IDs.
- View Employee By Department: Shows all employees in a selected department.
- View Employee by Manager: Lists employees who report to a selected manager.
- View Total Utilized Budget of a Department: Summarizes the total salaries within a chosen department.

<br>

4. <b>Add new entries:</b>
   These options guide you through the process of adding new entries to the database:

- Add New Department: Enter the name of the department to add it to the database.
- Add New Role: Provide details like the role name, salary, and department.
- Add New Employee: Specify the employee's first and last name, role, and manager.

<br>

5. <b>Update employee roles:</b>
   You can also update existing employee details:

- Update Employee Role: Change the role of an existing employee.
- Update Employee Manager: Assign a new manager to an existing employee.

<br>

6. <b>Delete Entries:</b>
   If you need to remove entries from the database, you have these options:

- Delete Department: Remove an existing department from the database.
- Delete Role: Delete an existing role.
- Delete Employee: Remove an employee from the company records.

<br>

7. <b>Exit the program:</b>
   When your management tasks are complete, choose 'Exit' to end the session.

<br>

Overall, this command-line tool is a powerful resource for keeping your company structure organised and up-to-date with real-time changes!

## Installation

The project was uploaded to [GitHub](https://github.com/) at the following repository:
[https://github.com/yukitoshi12345/Employee-Tracker/](https://github.com/yukitoshi12345/Employee-Tracker)

## License

This project is licensed under the [MIT License](https://github.com/Yukitoshi12345/Employee-Tracker/blob/main/LICENSE).
