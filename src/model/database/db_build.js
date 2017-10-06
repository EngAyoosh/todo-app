const fs = require('fs');
const db_Connection = require('./db_connection');

const sql = fs.readFileSync(`${__dirname}/build.sql`).toString();

db_Connection.query(sql, (err, res) => {
  if (err) throw err;
  else {
    console.log(`table created with result : ${res}`);
  }
});
