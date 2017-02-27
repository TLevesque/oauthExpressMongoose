'use strict';

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, lowercase: true, maxlength: 255, required: true },
  password: { type: String, lowercase: true, maxlength: 255, trim: true, required: true },
},
{
  timestamps: { createdAt: 'createdAt',  updatedAt: 'lastUpdate' }
});

module.exports = userSchema;
