USE Employee_Tracker_db;
-- Insert department records with descriptive names
INSERT INTO departments (department_name)
VALUES ("Marketing"),
       ("Information Technology"),
       ("Human Resources"),
       ("Finance"),
       ("Operations");

-- Insert role records with titles, salaries, and department IDs       
INSERT INTO roles (title, salary, department_id)
VALUES ("Digital Marketing Manager", "110000", 1),
       ("Content Marketing Specialist", "87500", 1),
       ("Senior Software Developer", "129471", 2),
       ("Junior Software Developer","85000", 2),
       ("Human Resources Director", "160000", 3),
       ("Human Resources Generalist", "90000", 3),
       ("Financial Controller", "150000", 4),
       ("Accountant", "90000", 4),
       ("Supply Chain Manager", "137863", 5),
       ("Inventory Control Specialist", "81182", 5);

-- Insert employee records with names, role IDs, and manager IDs     
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Violet", "Nelson", 1, NULL),
       ("Mason", "Harris", 2, 1),
       ("Mila", "Lee", 3, NULL),
       ("Liam", "Young", 4, 3),
       ("Sophia", "Garcia", 5, NULL),
       ("James", "Hernandez", 6, 5),
       ("Harper", "Taylor", 7, NULL),
       ("Daniel", "Walker", 8, 7),
       ("Aiden", "Smith", 9, NULL),
       ("Amelia", "Miller", 10, 9);

    