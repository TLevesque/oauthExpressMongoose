const messageController = require('./messagesController');
const userController = require('./usersController');
// const MessageDB = Message.Message;
// const MessageDB = Message.Message;

// import { Message, User } from './models/db';

const Controller={};

// get all messages :
Controller.message = messageController;
Controller.user = userController;

module.exports = Controller;
