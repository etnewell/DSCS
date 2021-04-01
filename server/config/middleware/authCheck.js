module.exports = function (req, res, next) {
    if (req.user) {
        return next();
    }
    req.flash('unAuthenticated', 'Sorry you need to login.');

    return res.redirect('/');
};