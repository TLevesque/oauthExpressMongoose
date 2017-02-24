'use strict';

const express = require('express')
const path = require('path');
var cors = require('cors');
const bodyParser = require('body-parser');

const routes = require('./routes');

const hostname = '127.0.0.1';
const port = 3000;

const app = express()
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

// 404
// app.get('/*', function(req, res) {
//  res.sendStatus(404);
// });


app.listen(port, function () {
  console.log(`Topics Server running on ${hostname} in port ${port}...`);
});

module.exports = app;
