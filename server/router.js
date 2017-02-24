const express = require('express');
const router = express.Router();

const topicController = require('./controllers');

// Error handling NEED TO BE DONE TO NOT BLOCK THE APP IN CASE OF BAD REQUEST

const Topic = require('./topicsDB');

// get all topics :
router.get('/topics', topicController.getAll);

// create new topic
router.post('/topic', topicController.createTopic);

// find topic by id
router.get('/topic/:id', topicController.findTopic);

// update topic by id
router.put('/topic/:id', topicController.updateTopic);

// delete topic by id
router.delete('/topic/:id', topicController.deleteTopic);

// 404 - Wrong path
router.get('/*', function(req, res) {
 res.sendStatus(404);
});

module.exports = router;
