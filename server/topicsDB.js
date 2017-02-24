'use strict'

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://tlevesque:123456@ds157819.mlab.com:57819/fbbotdb');

const collectionName = 'anotherCollection';
const topicSchema = require ('./topicsSchema');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongoose connection error:'));
db.once('open', function () {
  console.log('Moogose connexion working!');
});

const Topic = mongoose.model('Topic', topicSchema, collectionName);

module.exports = Topic;
