'use strict'

const mongodb = require('mongodb');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/topicsdb');

const topicSchema = require ('./topicsSchema');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongoose connection error:'));
db.once('open', function () {
  console.log('Moogose connexion working!');
});

const Topic = mongoose.model('Topic', topicSchema);

module.exports = Topic;
