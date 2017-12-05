const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

// Define our model
const userSchema = new Schema({
    email: { type: String, unique: true, lowercase: true },
    password: String
});

// On save Hook, encrypt password
// Before saving model, run this function
userSchema.pre('save', function (next) {
    //get access to user model 
    const user = this;

    //generate a salt
    bcrypt.genSalt(10, function (err, salt) {
        if (err) { return next(err); }

        // hash (encypt) my password using the salt
        bcrypt.hash(user.password, salt, null, function (err, hash) {
            if (err) { return next(err); }

            //overwrite plain text password with encrypted password
            user.password = hash;
            next();
        })
    })
});

// Create the model class
const ModelClass = mongoose.model('user', userSchema);


// Export the model
module.exports = ModelClass;