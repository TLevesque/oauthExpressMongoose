'use strict'

const mongoose = require('mongoose');

const mongodbUri = 'mongodb://tlevesque:123456@ds157829.mlab.com:57829/chatapp';

mongoose.Promise = global.Promise;

const options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };

mongoose.connect(mongodbUri, options);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongoose connection error:'));
db.once('open', function () {
  console.log('Moogose connexion working!');
});

const messageSchema = require ('./messagesSchema');
// module.exports = mongoose.model('Message', messageSchema, 'messagesCollection');
const Message = mongoose.model('Message', messageSchema, 'messagesCollection');

const userSchema = require ('./usersSchema');
// module.exports = mongoose.model('User', userSchema, 'usersCollection');
const User = mongoose.model('User', userSchema, 'usersCollection');

module.exports = { Message, User };
// exports { Message, User }; ????
