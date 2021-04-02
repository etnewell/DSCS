const User      = require('../models/Users');
const passport = require('passport');

exports.signOutUser = (req, res) => {
    req.logout();
    res.send({ loggedIn: false })
};

exports.loginUser = (req, res, next) => {

    return passport.authenticate('local', (err, userData) => {

        if (err) {
            if (err.name === 'IncorrectCredentialsError') {
                return res.status(400).json({
                    success: false,
                    message: err.message
                });
            }
            return res.status(400).json({
                success: false,
                message: 'Form handling error.'
            });
        }

        if (userData.message=="Invalid Password" || userData.message=="User not Found"){
            return res.json({
                success: false,
                message: userData.message,
                user: userData
            })
        }

        else return res.json({
            success: true,
            message: userData.message,
            user: userData
        })
    })(req, res, next);
};

exports.signUpUser = (req, res) => {

    User.findOne({ 'username' : req.body.username}, (err, user) => {

    if (user) {
        res.send({duplicateUser: true})
    } else {

        console.log("new user", req.body);
        const newUser   = new User();

        newUser.username = req.body.username;
        newUser.email = req.body.email;
        newUser.password = newUser.generateHash(req.body.password);

        newUser.save()
        .then(() => {
            res.send({ success: true });
        }).catch((err) => {
            res.json(err)
        });
    }
});
}