'use strict';

const mongoose = require('mongoose');

const saleCycle = ['welcoming', 'asking', 'choosing', 'choiceDone', 'paying', 'paid', 'planned', 'serviceDone','sactisfaction','closed']

const topicSchema = new mongoose.Schema({
  // _someId: Schema.Types.ObjectId,  DON'T know how "Schema.Types."works
  topic: { type: String, lowercase: true, maxlength: 255, trim: true, required: true },
  votes: { type: Number,  min: 0, max: 10, required: true },
  accepted: { type: Boolean, default: false },
  userContext: { type: String, enum: saleCycle, default: 'welcoming' },
  date: { type: Date, required: true },
  anotherDate: { type: Date, default: Date.now },
  // regexSelection: { type: String, match: /([A-Za-z])/ }, NOT WORKING FOR NOW
},
{
  timestamps: { createdAt: 'createdAt',  updatedAt: 'lastUpdate' }
});

// expire in 24 hours
// new Schema({ createdAt: { type: Date, expires: '24h' }});
// { createdAt: { type: Date, expires: '24h' }} Expires Doesn't work yet


module.exports = topicSchema;
