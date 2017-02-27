const express = require('express');
const router = express.Router();

const messageController = require('./controllers');

// Error handling NEED TO BE DONE TO NOT BLOCK THE APP IN CASE OF BAD REQUEST

const Message = require('./messagesDB');

// get all messages :
router.get('/messages', messageController.getAll);

// create new message
router.post('/message', messageController.createMessage);

// find message by id
router.get('/message/:id', messageController.findMessage);

// update message by id
router.put('/message/:id', messageController.updateMessage);

// delete message by id
router.delete('/message/:id', messageController.deleteMessage);

// 404 - Wrong path
router.get('/*', function(req, res) {
 res.sendStatus(404);
});

module.exports = router;
