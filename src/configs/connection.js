const mysql = require("mysql");

const HOST = "localhost";
const USER = "root";
const PASS = "";
const DB = "fivestars";

const con = mysql.createConnection({
  host: HOST,
  user: USER,
  password: PASS,
  database: DB,
});

con.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = con;
