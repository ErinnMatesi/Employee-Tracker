const dotenv = require('dotenv');
const mysql = require('mysql2');

dotenv.config();

const db = mysql.createConnection(
    {
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PW,
      port: 3306,
      database: 'company_db'
    },
    console.log(`Connected to the company_db database.`)
);

module.exports = db;