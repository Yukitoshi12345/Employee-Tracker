const mysql = require('mysql2');

// Create a connection to the MySQL database
const connection = mysql.createConnection(
    {
      host: 'localhost', // Database host
      user: 'root', // Database user
      password: 'Yukitoshi', // Database password
      database: 'Employee_Tracker_db' // Database name
    },
    console.log(`Connected to the Employee_Tracker_db database.`)
);

module.exports = connection;

  