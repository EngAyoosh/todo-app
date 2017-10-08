const quieries = require('../model/quieries.js');

exports.get = (req, res, next) => {
  quieries.getAllTasks((err, tasks) => {
    if (err) next(err);
    else {
      res.render('home', {tasks});
    }
  });
};
exports.post = (req, res, next) => {
  const data = {
    body: req.body
  };
  quieries.addTask(data, (err, result) => {
    if (err) next(err);
    else {
      quieries.getAllTasks((err, tasks) => {
        if (err) next(err);
        else {
          res.render('home', {tasks});
        }
      });
    }
  });
};
exports.delete = (req, res, next) => {
  const data = {
    body: req.body
  };
  quieries.deleteTask(data, (err, result) => {
    if (err) next(err);
    else {
      quieries.getAllTasks((err, tasks) => {
        if (err) next(err);
        else {
          res.send({tasks});
        }
      });
    }
  });
};
exports.put = (req, res, next) => {
  const data = {
    body: req.body
  };
  quieries.DoneOrNot(data, (err, result) => {
    if (err) next(err);
    else {
      quieries.getAllTasks((err, tasks) => {
        if (err) next(err);
        else {
          res.send({tasks});
        }
      });
    }
  });
};
