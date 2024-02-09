<h1 align = "center"> Employee Tracker </h1>

Managing a company requires meticulous organisation and an understanding of different departments, roles, and employees. This command-line application addresses this need by empowering business owners like you to gain full control over their company's internal structure.

Through a user-friendly interface, you can view comprehensive information about departments, roles, and employees. This includes details like department names and IDs, employee salaries and managers, and role-specific data. Adding new departments, roles, and employees is made simple with easy-to-follow prompts, allowing you to adapt your company structure as needed. Additionally, you can efficiently update employee roles, ensuring your team remains aligned with changing needs.

With this application, you gain a single source of truth for your company's organisational structure, enabling informed decision-making and fostering a well-managed, efficient environment.

## Table of Contents
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Technologies Used](#technologies-used)
- [Test Instruction](#test-instruction)
- [Screenshot](#screenshot)
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
```

## Technologies Used
- JavaScript
- Node.js
- Inquirer (version 8.2.4)
- Express.js (version 4.18.2)
- MySQL
- MySQL2 (version 3.9.1)

## Test Instruction
#### Command to Install Node:
 `
npm install
`

#### Command to Install npm:
`
npm init -y
`
#### Command to install Express dependencies:
`
npm i express
`
#### Command to install Inquirer dependencies:
`
npm i inquirer@8.2.4
`
#### Command to install MySQL2 dependencies:
`
npm i mysql2
`

## Screenshot
![]()


## Video
![]()

## Output 

## Installation
The project was uploaded to [GitHub](https://github.com/) at the following repository:
[https://github.com/yukitoshi12345/Employee-Tracker/](https://github.com/yukitoshi12345/Employee-Tracker)

## License
This project is licensed under the [MIT License](https://github.com/Yukitoshi12345/Employee-Tracker/blob/main/LICENSE).