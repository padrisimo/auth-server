const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwr').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

// setup options for jwt strategy
const jwtOptions = {};

// jwt strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
    // user.id ? done : !user
    User.findById(payload.sub, function (err, user) {
        if (err) { return done(err, false); }

        if (user) {
            done(null, user);
        } else {
            done(null, false);
        }
    })
});

// tell passport to use this strategy