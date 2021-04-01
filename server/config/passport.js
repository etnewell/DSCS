const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

var User = require('../models/Users.js');

passport.use(new LocalStrategy(
    {
        usernameField: "username",
        passwordField: "password"
    },
    function (username, password, done) {
        User.findOne({'username': username}, function (err, user) {
            if (err) 
                return done(err);

            if (!user)
                return done(null, {message: "User not found"});

            if (!user.validPassword(password))
                return done(null, {message: "Invalid password"});

            return done(null, user);              
        })
    }
));
passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user)
    })
})

module.exports = passport;