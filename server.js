// packages needed for this application
const inquirer = require('inquirer');
const mysql = require('mysql2');

// importing questions for inquirer
const { initialQ, employeeAdd, roleAdd, departmentAdd } = require('./utils/questions');