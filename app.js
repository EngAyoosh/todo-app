const express = require('express');
const app = express();
const arr = ['aia', 'areej', 'asmaa', 'azhar'];
app.get('/', (req, res) => {
  res.send('hello world');
});
app.get('/items', (req, res) => {
  res.send(arr);
});
app.listen(3000, () => {
  console.log('app listen to port 3000');
});
