INSERT INTO department (id, name)
VALUES (001, "Marketing"),
       (002, "Information Technology"),
       (003, "Human Resources"),
       (004, "Finance"),
       (005, "Operations");
       
INSERT INTO role (id, title, salary, department_id)
VALUES (001, "Digital Marketing Manager", "110000", 001),
       (002, "Content Marketing Specialist", "87500", 001),
       (003, "Senior Software Developer", "129471", 002),
       (004, "Junior Software Developer","85000", 002),
       (005, "Human Resources Director", "160000", 003),
       (006, "Human Resources Generalist", "90000", 003),
       (007, "Financial Controller", "150000", 004),
       (008, "Accountant", "90000", 004),
       (009, "Supply Chain Manager", "137863", 005),
       (010, "Inventory Control Specialist", "81182", 005);

       
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (001, "Violet", "Nelson", 001, NULL),
       (002, "Mason", "Harris", 002, 001),
       (003, "Mila", "Lee", 003, NULL),
       (004, "Liam", "Young", 004, 002),
       (005, "Sophia", "Garcia", 005, NULL),
       (006, "James", "Hernandez", 006, 003),
       (007, "Harper", "Taylor", 007, NULL),
       (008, "Daniel", "Walker", 008, 004),
       (009, "Aiden", "Smith", 009, NULL),
       (010, "Amelia", "Miller", 010, 005);

    