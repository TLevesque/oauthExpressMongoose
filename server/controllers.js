const Message = require('./messagesDB');

const messageController={};

// get all messages :
messageController.getAll = ( (req, res, next) => {
  Message.find({}, function(err, docs) {
   if(err) {
     console.error(err)
     return next(err);
   }
   res.json(docs);
  });
});

// create new message
messageController.createMessage = ( (req, res, next) => {
  var obj = new Message(req.body);
  obj.save(function(err, obj) {
    if(err) {
      console.error(err)
      return next(err);
    }
    res.status(200).json(obj);
  });
});

// find message by id
messageController.findMessage = ( (req, res, next) => {
  Message.findOne({_id: req.params.id}, function(err, obj) {
    if(err) {
      console.error(err)
      return next(err);
    }
    res.json(obj);
  })
});

// update message by id
messageController.updateMessage = ( (req, res, next) => {
  Message.findOneAndUpdate({_id: req.params.id}, req.body, function(err) {
    if(err) {
      console.error(err)
      return next(err);
    }
    res.sendStatus(200);
  })
});

// delete message by id
messageController.deleteMessage = ( (req, res, next) => {
  Message.findOneAndRemove({_id: req.params.id}, function(err) {
    if(err) {
      console.error(err)
      return next(err);
    }
    res.sendStatus(200);
  });
});

module.exports = messageController;
