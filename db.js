const mysql = require("mysql");
require('dotenv').config();

const connection = mysql.createConnection({
  host     : process.env.DATABASE_HOST,
  user     : process.env.DATABASE_USERNAME,
  password : process.env.DATABASE_PASSWORD,
  port : process.env.DATABASE_PORT,
  database : process.env.DATABASE_NAME
});

module.exports = connection;
