-- Checking if a database named "Employee_Tracker_db" already exists and drops it if so. 
-- This prevents error if trying to create a database
DROP DATABASE IF EXISTS Employee_Tracker_db;

-- Creates a new database named "Employee_Tracker_db"
-- This establishes the database to store exmployee tracker information
CREATE DATABASE Employee_Tracker_db;

USE Employee_Tracker_db;

CREATE TABLE department (
    id INT NOT NULL,
    dept_name VARCHAR(30) NOT NULL
);

CREATE TABLE row (
    id INT NOT NULL,
    title VARCHAR(30),
    salary DECIMAL(10,2) NOT NULL,
    dept_id INTEGER
);

CREATE TABLE employee (
    id INT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT
);