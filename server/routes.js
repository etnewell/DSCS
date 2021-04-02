module.exports = (app) => {
    const users = require('./routes/users');
    const posts = require('./routes/posts');

    const authCheckMiddleware = require('./config/middleware/authCheck');
    // app.use('/apis/users', authCheckMiddleware);
    // app.use('./apis/')

    app.use('/apis/users', users);
    app.use('/apis/posts', posts);
};