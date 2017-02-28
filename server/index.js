'use strict';

process.setMaxListeners(0);
// const config = require('./config/config');

const express = require('express')
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
// const logger = require('morgan');
const expressSession = require('express-session');
const passport = require('passport');  // To put in middlewares
const LocalStrategy = require('passport-local').Strategy;  // To put in middlewares

const router = require('./router');
const Controller = require('./controllers/controllers');  // To put in middlewares
// const middlewares = require('./middlewares');
const userController = Controller.user; // To put in middlewares

const hostname = '127.0.0.1';
const port = 3000;

const app = express()

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); //// ????? urlencoded ????
// app.use(require('body-parser').urlencoded({ extended: true }));
// app.use(cookieParser());

app.use(require('express-session')({
    secret: 'mysecrettoken',
    resave: false,
    saveUninitialized: false
}));

// console.log('hey');
app.use(passport.initialize());
app.use(passport.session());
app.use(router);

// passport.use(new Strategy(
//   function(username, password, cb) {
//     console.log('hello');
//     userController.findUserByUsername(username, function(err, user) {
//       if (err) { return cb(err); }
//       if (!user) { return cb(null, false); }
//       if (user.password != password) { return cb(null, false); }
//       return cb(null, user);
//     });
//   }));
//
// passport.serializeUser(function(user, cb) {
//   console.log('hellou');
//   cb(null, user.id);
// });
//
// passport.deserializeUser(function(id, cb) {
//   console.log('helloww');
//   userController.findUserByID(id, function (err, user) {
//     if (err) { return cb(err); }
//     cb(null, user);
//   });
// });

const User = require('./models/db');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// mongoose.connect('mongodb://localhost/dbname'); ???
//
// app.get('/',
//   function(req, res) {
//     // res.render('home', { user: req.user });
//     res.status(200).json(req.user);
//   });
//
// app.get('/login',
//   function(req, res){
//     // res.render('login');
//     res.status(200).json('login');
//   });
//
// app.post('/login',
//   passport.authenticate('local', { failureRedirect: '/login' }),
//   function(req, res) {
//     res.redirect('/');
//   });
//
// app.get('/logout',
//   function(req, res){
//     req.logout();
//     res.redirect('/');
//   });
//
// app.get('/profile',
//   require('connect-ensure-login').ensureLoggedIn(),
//   function(req, res){
//     // res.render('profile', { user: req.user });
//     res.status(200).json('profile', req.user);
//
//   });


app.listen(port, function () {
  console.log(`Topics Server running on ${hostname} in port ${port}...`);
});

module.exports = app;
