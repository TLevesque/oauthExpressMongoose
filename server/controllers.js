const Topic = require('./topicsDB');

const topicController={};

// get all topics :
topicController.getAll = ( (req, res) => {
  Topic.find({}, function(err, docs) {
   if(err) return console.error(err);
   res.json(docs);
  });
});

// create new topic
topicController.createTopic = ( (req, res) => {
  var obj = new Topic(req.body);
  obj.save(function(err, obj) {
    if(err) return console.error(err);
    res.status(200).json(obj);
  });
});

// find topic by id
topicController.findTopic = ( (req, res) => {
  Topic.findOne({_id: req.params.id}, function(err, obj) {
    if(err) return console.error(err);
    res.json(obj);
  })
});

// update topic by id
topicController.updateTopic = ( (req, res) => {
  Topic.findOneAndUpdate({_id: req.params.id}, req.body, function(err) {
    if(err) return console.error(err);
    res.sendStatus(200);
  })
});

// delete topic by id
topicController.deleteTopic = ( (req, res) => {
  Topic.findOneAndRemove({_id: req.params.id}, function(err) {
    if(err) return console.error(err);
    res.sendStatus(200);
  });
});

module.exports = topicController;
