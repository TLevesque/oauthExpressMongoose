const User = require('../models/db');
const UserDB = User.User;

const userController={};

// get all users :
userController.getAll = ( (req, res, next) => {
  console.log(User);
  UserDB.find({}, function(err, docs) {
   if(err) {
     console.error(err);
     return next(err);
   }
   res.json(docs);
  });
});

// create new user
userController.createUser = ( (req, res, next) => {
  var obj = new UserDB(req.body);
  obj.save(function(err, obj) {
    if(err) {
      console.error(err);
      return next(err);
    }
    res.status(200).json(obj);
  });
});

// find user by id
userController.findUser = ( (req, res, next) => {
  UserDB.findOne({_id: req.params.id}, function(err, obj) {
    if(err) {
      console.error(err);
      return next(err);
    }
    res.json(obj);
  })
});

// update user by id
userController.updateUser = ( (req, res, next) => {
  UserDB.findOneAndUpdate({_id: req.params.id}, req.body, function(err) {
    if(err) {
      console.error(err);
      return next(err);
    }
    res.sendStatus(200);
  })
});

// delete user by id
userController.deleteUser = ( (req, res, next) => {
  UserDB.findOneAndRemove({_id: req.params.id}, function(err) {
    if(err) {
      console.error(err);
      return next(err);
    }
    res.sendStatus(200);
  });
});

module.exports = userController;
