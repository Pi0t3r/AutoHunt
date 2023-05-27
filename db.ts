import mysql from "mysql";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Kapuscinski65",
  database: "cars_auction",
});

export default db;
