// packages needed for this application
const inquirer = require('inquirer');
const mysql = require('mysql2');
const dotenv = require('dotenv')
const cTable = require('console.table');;

// importing questions for inquirer
const { initialQ, employeeAdd, roleAdd, departmentAdd } = require('./utils/questions');

dotenv.config();

const db = mysql.createConnection(
    {
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PW,
      port: process.env.PORT || 3001,
      database: 'company_db'
    },
    console.log(`Connected to the company_db database.`)
);

db.connect((err) => {
  if(err) throw err;
  console.log('connected to db');
  beginPrompts();
}
);

const roles = [];
function findRole() {
  connection.query("SELECT * FROM role", function(err, res) {
    if (err) throw err
    for (var i = 0; i < res.length; i++) {
      roles.push(res[i].title);
    }

  })
  return roles;
}

const managers = [];
function findManager() {
  connection.query("SELECT first_name, last_name FROM employee WHERE manager_id IS NULL", function(err, res) {
    if (err) throw err
    for (var i = 0; i < res.length; i++) {
      managers.push(res[i].first_name);
    }

  })
  return managers;
}

const beginPrompts = () => {
  inquirer.prompt(initialQ)
      .then((data) => {
          if(data.choices === 'View all departments') {
              viewDepartments();
          } else if (data.choices === 'View all roles') {
              viewRoles();
          } else if (data.choices === 'View all employees') {
              viewEmployees();
          } else if (data.choices === 'Add a department') {
              addDepartment();
          } else if (data.choices === 'Add a role') {
              addRole();
          } else if (data.choices === 'Add an employee') {
              addEmployee();
          } else if (data.choices === 'Update an employee role') {
              updateEmployee();
          } else {
              db.end;
          }
      })
}

// VIEW ALL functions
const viewDepartments = () => {};
const viewRoles = () => {};
const viewEmployees = () => {};

// ADD functions
const addDepartment = () => {
  inquirer.prompt(departmentAdd)
  .then((data) => {
    db.query('INSERT INTO departments (name) VALUES (?)', data.dptName, (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(`Added ${data.name} to the departments table.`);
    })
  })
};
const addRole = () => {};
const addEmployee = () => {
  inquirer.prompt(employeeName)
  .then((data) => {
    // why the +1?
    const roleID = findRole().indexOf(data.role) + 1;
    const managerID = findManager().indexOf(data.manager) + 1;
    db.query('INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [data.firstName, data.lastName, roleID, managerID], (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(`Added ${data.firstName} ${data.lastName} to the employees table.`);
      // should I retrigger the beginPrompts function here?
    })
  })
};

// UPDATE Employee Role
const updateEmployee = () => {};

  // use console table as some point to print the tables ?