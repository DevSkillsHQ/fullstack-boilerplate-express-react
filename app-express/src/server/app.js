const express = require('express');
const bodyParser = require('body-parser');
const api_endpoints = require('../api');
const app = express();

app.use(bodyParser.json());

app.use('/', does_method_exist, api_endpoints);

app.get('*', (req, res) => {
  res.status(404).send('404 Not Found');
});

function does_method_exist(req, res, next) {
  next();
}


module.exports = app;
