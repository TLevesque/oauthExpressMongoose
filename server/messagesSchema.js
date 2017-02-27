'use strict';

const mongoose = require('mongoose');

// const saleCycle = ['welcoming', 'asking', 'choosing', 'choiceDone', 'paying', 'paid', 'planned', 'serviceDone','sactisfaction','closed']

const messageSchema = new mongoose.Schema({
  author: { type: String, lowercase: true, maxlength: 255, trim: true, required: true },
  message: { type: String, lowercase: true, maxlength: 255, required: true },
  recipient: { type: String, lowercase: true, maxlength: 255, trim: true, required: true },
},
{
  timestamps: { createdAt: 'createdAt',  updatedAt: 'lastUpdate' }
});

// expire in 24 hours
// new Schema({ createdAt: { type: Date, expires: '24h' }});
// { createdAt: { type: Date, expires: '24h' }} Expires Doesn't work yet


module.exports = messageSchema;
