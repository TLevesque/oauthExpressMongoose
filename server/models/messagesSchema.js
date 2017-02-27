'use strict';

const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  author: { type: String, lowercase: true, maxlength: 255, trim: true, required: true },
  message: { type: String, lowercase: true, maxlength: 255, required: true },
  recipient: { type: String, lowercase: true, maxlength: 255, trim: true, required: true },
},
{
  timestamps: { createdAt: 'createdAt',  updatedAt: 'lastUpdate' }
});

module.exports = messageSchema;
