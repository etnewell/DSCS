// Dependencies
const express = require('express');
const path = require('path');
const logger = require('morgan');
// const bodyParser = require('body-parser');
const passport = require('./config/passport');
const session = require('express-session');
const config = require('./config/extra-config');
const compression = require('compression');


// =================================================================
// Express setup

const app       = express();

// CORS from client side
app.use(function(req, res, next) {  
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
  });

//   Add favicon to public

const authCheck = require('./config/middleware/attachAuthenticationStatus');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use(session({ secret: config.sessionKey, resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());
app.use(authCheck);
app.use(compression());

require('./config/databaseImplementation');

require('./routes')(app);

app.get('*', (req, res) => {
    const rootHtmlPath = path.resolve(__dirname, '..', 'public', 'index.html');
    res.sendFile(rootHtmlPath);
})

module.exports(app);