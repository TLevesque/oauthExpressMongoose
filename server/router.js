const express = require('express');
const router = express.Router();

const Controller = require('./controllers/controllers');
const messageController = Controller.message;
const userController = Controller.user;

// const Message = require('./models/db');

// get all messages :
router.get('/messages', messageController.getAll);

// get all users :
router.get('/users', userController.getAll);

// create new message
router.post('/message', messageController.createMessage);

// create new user
router.post('/user', userController.createUser);

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
