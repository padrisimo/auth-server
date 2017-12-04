const User = require('../models/user');

exports.signup = function(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;
    
    // see if a user with the given email exits
    User.findOne({ email: email }, function(err, existingUser){
        //
    });
    // If a user with same email already exist, return an error

    // if a user with email don't exits, crate and save user record

    // Respond to request indicating the user was created
}