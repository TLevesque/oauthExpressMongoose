'use strict'

const mongoose = require('mongoose');

const mongodbUri = 'mongodb://tlevesque:123456@ds157819.mlab.com:57819/fbbotdb';

mongoose.Promise = global.Promise;

const options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };

mongoose.connect(mongodbUri, options);

const collectionName = 'anotherCollection';
const topicSchema = require ('./topicsSchema');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongoose connection error:'));
db.once('open', function () {
  console.log('Moogose connexion working!');
});

module.exports = mongoose.model('Topic', topicSchema, collectionName);
