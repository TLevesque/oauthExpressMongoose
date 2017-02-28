// const basicAuth = require('basic-auth');
//
// exports.basicAuth = function(username, password) {
//   return function( req, res, next) {
//     const user = basicAuth(req);
//
//     if (!user || user.name !== username || user.password !== password) {
//     res.set('???', 'Basic ??? Required');
//     return res.send(401);
//     }
//     next();
//   }
// }
//
//
// // Signup
// // Login
// // Logout
// // Check If Logged In
