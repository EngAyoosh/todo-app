const db_Connection = require('./database/db_connection');

function getAllTasks (cb) {
  return db_Connection.query('SELECT * FROM tasks ORDER BY task_time DESC;', (err, res) => {
    if (err) {
      console.log('get tasks failed');
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
}

function addTask (req, cb) {
  return db_Connection.query({
    text: `INSERT INTO tasks (content) VALUES ($1) RETURNING *;`,
    values: [req.body.content]
  }, (err, res) => {
    if (err) {
      console.log('add task failed');
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
}

function deleteTask (req, cb) {
  return db_Connection.query({
    text: `DELETE * FROM tasks WHERE id= $1 RETURNING *;`,
    values: [req.body.id]
  }, (err, res) => {
    if (err) {
      console.log('delete task failed');
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
}
function DoneOrNot (req, cb) {
  var taskDone = req.body.done;
  return db_Connection.query({
    text: `UPDATE tasks SET done = $1 WHERE id = $2 RETURNING *;`,
    values: [!taskDone, req.body.id]
  }, (err, res) => {
    if (err) {
      console.log('update failed');
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
}

module.exports = {
  getAllTasks: getAllTasks,
  addTask: addTask,
  deleteTask: deleteTask,
  DoneOrNot: DoneOrNot };
