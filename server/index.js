'use strict';

const express = require('express')
const path = require('path');
var cors = require('cors');
const bodyParser = require('body-parser');

// const router = require('./router.js');

const hostname = '127.0.0.1';
const port = 3000;

const app = express()

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(router);

const Topic = require('./topicsDB');

// get all topics :
app.get('/topics', function(req, res) {
  Topic.find({}, function(err, docs) {
   if(err) return console.error(err);
   res.json(docs);
  });
});

// create new topic
app.post('/topic', function(req, res) {
  var obj = new Topic(req.body);
  obj.save(function(err, obj) {
    if(err) return console.error(err);
    res.status(200).json(obj);
  });
});

// find topic by id
app.get('/topic/:id', function(req, res) {
  Topic.findOne({_id: req.params.id}, function(err, obj) {
    if(err) return console.error(err);
    res.json(obj);
  })
});

// update topic by id
app.put('/topic/:id', function(req, res) {
  Topic.findOneAndUpdate({_id: req.params.id}, req.body, function(err) {
    if(err) return console.error(err);
    res.sendStatus(200);
  })
});

// delete topic by id
app.delete('/topic/:id', function(req, res) {
  Topic.findOneAndRemove({_id: req.params.id}, function(err) {
    if(err) return console.error(err);
    res.sendStatus(200);
  });
});


// 404
// app.get('/*', function(req, res) {
//  res.sendStatus(404);
// });


app.listen(port, function () {
  console.log(`Server running on ${hostname} in port ${port}...`);
});

module.exports = app;
