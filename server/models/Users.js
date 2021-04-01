'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({

    username: {
        type: String,
        min: [3, 'Please make a username longer than 3 characters'],
        max: [25, 'Please make a username shorter than 25 characters'],
        required: [true, 'Please make a username.']
    },
    email: {
        type: String,
        min: [3, 'Please enter a valid email address.'],
        required: [true, 'Please enter an email address.']
    },
    password: {
        type: String,
        min: [8, 'Your password must be at least 8 characters long.'],
        required: [true, "Please enter a password."]
    }
});

userSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(9), null);
};

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);