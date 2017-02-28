const express = require('express');
const router = express.Router();
const passport = require('passport');

const Controller = require('./controllers/controllers');
const messageController = Controller.message;
const userController = Controller.user;

// const Message = require('./models/db');

router.get('/', function (req, res) {
    res.render('index', { user : req.user });
});

router.get('/register', function(req, res) {
    res.render('register', { });
});

router.post('/register', function(req, res) {
    Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
        if (err) {
            return res.render('register', { account : account });
        }

        passport.authenticate('local')(req, res, function () {
            res.redirect('/');
        });
    });
});

router.get('/login', function(req, res) {
    res.render('login', { user : req.user });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

router.get('/ping', function(req, res){
    res.status(200).send("pong!");
});

///////////////////////////////////////////////////////
// get all messages :
router.get('/messages', messageController.getAll);

// get all users :
router.get('/users', userController.getAll);

// create new message
router.post('/message', messageController.createMessage);

// create new user
router.post('/user', userController.createUser);

// find message by id
router.get('/message/:id', messageController.findMessage);

// find user by ID
router.get('/user/:id', userController.findUserByID);

// find user by Name
router.get('/message/:username', userController.findUserByUsername);

// update message by id
router.put('/message/:id', messageController.updateMessage);

// delete message by id
router.delete('/message/:id', messageController.deleteMessage);

// 404 - Wrong path
router.get('/*', function(req, res) {
 res.sendStatus(404);
});

module.exports = router;
