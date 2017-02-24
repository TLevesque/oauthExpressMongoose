const express = require('express');
const router = express.Router();

const Topic = require('./topicsDB');

// get all topics :
router.get('/topics', function(req, res) {
  Topic.find({}, function(err, docs) {
   if(err) return console.error(err);
   res.json(docs);
  });
});

// create new topic
router.post('/topic', function(req, res) {
  var obj = new Topic(req.body);
  obj.save(function(err, obj) {
    if(err) return console.error(err);
    res.status(200).json(obj);
  });
});

// find topic by id
router.get('/topic/:id', function(req, res) {
  Topic.findOne({_id: req.params.id}, function(err, obj) {
    if(err) return console.error(err);
    res.json(obj);
  })
});

// update topic by id
router.put('/topic/:id', function(req, res) {
  Topic.findOneAndUpdate({_id: req.params.id}, req.body, function(err) {
    if(err) return console.error(err);
    res.sendStatus(200);
  })
});

// delete topic by id
router.delete('/topic/:id', function(req, res) {
  Topic.findOneAndRemove({_id: req.params.id}, function(err) {
    if(err) return console.error(err);
    res.sendStatus(200);
  });
});

module.exports = router;
