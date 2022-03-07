const initialQ = [
    {
        name: 'whatDO',
        type: 'list',
        message: `What would you like to do?`,
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role'],
        default: 'View all departments'
    }
];

const employeeAdd = [
    {
        name: 'firstName',
        type: 'input',
        message: `What is the employee's first name?`
    },
    {
        name: 'lastName',
        type: 'input',
        message: `What is the employee's last name?`
    },
    {
        name: 'role',
        type: 'list',
        message: `What is the employee's role?`,
        // connect roles from the db 
        choices: [`${roles}`]
    },
    {
        name: 'manager',
        type: 'list',
        message: `Who is the employee's manager?`,
        // connect employees with manager id from the db 
        choices: ['None', `${managers}`]
    },
];

const roleAdd = [
    {
        name: 'roleName',
        type: 'input',
        message: `What is the name of the role?`
    },
    {
        name: 'lastName',
        type: 'input',
        message: `What is the salary of the role?`
    },
    {
        name: 'department',
        type: 'list',
        message: `Which department does the role belong to?`,
        // connect departments from the db 
        choices: [`${departments}`]
    }
];

const departmentAdd = [
    {
        name: 'dptName',
        type: 'input',
        message: `What is the name of the department?`
    }
];

module.exports = {initialQ, employeeAdd, roleAdd, departmentAdd};