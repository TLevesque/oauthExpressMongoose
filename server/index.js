'use strict';

process.setMaxListeners(0);

const express = require('express')
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const router = require('./router');
// const middlewares = require('./middlewares');

const hostname = '127.0.0.1';
const port = 3000;

const app = express()


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(router);
// app.use('/auth', middlewares.basicAuth('username', 'password'));

app.listen(port, function () {
  console.log(`Topics Server running on ${hostname} in port ${port}...`);
});

module.exports = app;
