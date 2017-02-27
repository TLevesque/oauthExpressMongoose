'use strict'

const mongoose = require('mongoose');

const mongodbUri = 'mongodb://tlevesque:123456@ds157829.mlab.com:57829/chatapp';

mongoose.Promise = global.Promise;

const options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };

mongoose.connect(mongodbUri, options);

const collectionName = 'messagesCollection';
const messageSchema = require ('./messagesSchema');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongoose connection error:'));
db.once('open', function () {
  console.log('Moogose connexion working!');
});

module.exports = mongoose.model('Message', messageSchema, collectionName);
