const path = require('path');
const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.use('/static', express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
  return res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/index', (req, res) => {
  return res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/heatmap', (req, res) => {
  return res.sendFile(path.join(__dirname, 'views', 'heatmap.html'));
});

app.listen(port, () => {
  console.log('Now listening on ' + port);
});