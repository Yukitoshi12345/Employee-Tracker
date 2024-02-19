-- Checking if a database named "Employee_Tracker_db" already exists and drops it if so. 
-- This prevents error if trying to create a database
DROP DATABASE IF EXISTS Employee_Tracker_db;

-- Creates a new database named "Employee_Tracker_db"
-- This establishes the database to store employee tracker information
CREATE DATABASE Employee_Tracker_db;

-- Switch to the newly created Employee_Tracker_db
USE Employee_Tracker_db;

-- Creates a table named "department"
CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL
);

-- Creates a table named "row"
CREATE TABLE row (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,2) NOT NULL,
    department_id INTEGER
);

-- Creates a table named "employee"
CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT
);