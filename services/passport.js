const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwr').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
