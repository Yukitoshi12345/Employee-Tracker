-- Insert department records with descriptive names
INSERT INTO department (department_name)
VALUES ("Marketing"),
       ("Information Technology"),
       ("Human Resources"),
       ("Finance"),
       ("Operations");

-- Insert role records with titles, salaries, and department IDs       
INSERT INTO role (title, salary, department_id)
VALUES ("Digital Marketing Manager", "110000", 001),
       ("Content Marketing Specialist", "87500", 001),
       ("Senior Software Developer", "129471", 002),
       ("Junior Software Developer","85000", 002),
       ("Human Resources Director", "160000", 003),
       ("Human Resources Generalist", "90000", 003),
       ("Financial Controller", "150000", 004),
       ("Accountant", "90000", 004),
       ("Supply Chain Manager", "137863", 005),
       ("Inventory Control Specialist", "81182", 005);

-- Insert employee records with names, role IDs, and manager IDs     
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Violet", "Nelson", 001, NULL),
       ("Mason", "Harris", 002, 001),
       ("Mila", "Lee", 003, NULL),
       ("Liam", "Young", 004, 002),
       ("Sophia", "Garcia", 005, NULL),
       ("James", "Hernandez", 006, 003),
       ("Harper", "Taylor", 007, NULL),
       ("Daniel", "Walker", 008, 004),
       ("Aiden", "Smith", 009, NULL),
       ("Amelia", "Miller", 010, 005);

    