-- Checking if a database named "Employee_Tracker_db" already exists and drops it if so. 
-- This prevents error if trying to create a database
DROP DATABASE IF EXISTS Employee_Tracker_db;

-- Creates a new database named "Employee_Tracker_db"
-- This establishes the database to store exmployee tracker information
CREATE DATABASE Employee_Tracker_db;

USE Employee_Tracker_db;