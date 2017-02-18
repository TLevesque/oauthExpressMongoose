'use strict';

const mongoose = require('mongoose');

const topicSchema = mongoose.Schema({
    topic: {type: String, required: true},
    votes: {type: Number, required: true},
    date: {type: Date, required: true},
});

module.exports = topicSchema;
