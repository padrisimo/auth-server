const User = require('../models/user');

exports.signup = function (req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
        return res.status(422).send({ error: 'You must provide email and password' });
    }

    // see if a user with the given email exits
    User.findOne({ email: email }, function (err, existingUser) {
        if (err) { return next(err); }

        // If a user with same email already exist, return an error
        if (existingUser) {
            return res.status(422).send({ error: 'Email is in use' });
        }

        // if a user with email don't exits, crate and save user record
        const user = new User({
            email: email,
            password: password
        })

        user.save(function (err) {
            if (err) { return next(err); }

            // Respond to request indicating the user was created
            res.json({ success: true });
        });
    });
}