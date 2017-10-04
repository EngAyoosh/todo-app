 require('env2')('./config.env');
 const {Pool} = require('pg');

 if(process.env.DATABASE_URL)
 {
   throw new Error('No DATABASE_URL Provided');
 }

 const pool = new Pool({connectionString:process.env.DATABASE_URL});
 module.exports = pool;
