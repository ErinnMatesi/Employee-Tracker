// packages needed for this application
const inquirer = require('inquirer');
const mysql = require('mysql2');
const dotenv = require('dotenv');

// importing questions for inquirer
const { initialQ, employeeAdd, roleAdd, departmentAdd } = require('./utils/questions');

dotenv.config();

const db = mysql.createConnection(
    {
      host: process.env.MYSQL_HOST,
      // MySQL username,
      user: process.env.MYSQL_USERNAME,
      // TODO: Add MySQL password here
      password: process.env.MYSQL_PW,
      database: 'movies_db'
    },
    console.log(`Connected to the movies_db database.`)
  );