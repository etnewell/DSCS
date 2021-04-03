// Dependencies

"use strict";


const session = require('express-session');
const MongoStore = require('connect-mongo');
// import { mongoStoreFactory } from importMong;
const configDB = require('./config/databaseCreds');
const mongoose = require('mongoose');
// const authRouter = require('./routes');
const config = require('./config/extra-config');

const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const passport = require('./config/passport');

// const sessionManagementConfig = require('./config/sessionConfig')
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
require('./config/databaseImplementation');
const authCheck = require('./config/middleware/attachAuthenticationStatus');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use(session({ 

  secret: config.sessionKey, 
  resave: true, 
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl: configDB.url,
    ttl: (1 * 60 * 60),
  }),
  // cookie: {
  //   path: '/',
  //   maxAge: 1800000,
  //   secure: true
  // },
  name:"id"
}));



app.use(passport.initialize());

app.use(authCheck);
app.use(compression());
// app.use(sessionManagementConfig(app));


require('./routes')(app);

app.use(passport.session());


// session.Session.prototype.login = function(user, cb) {
//   const req = this.req;
//   req.session.regenerate(function(err){
//     if(err){
//       cb(err)
//     }
//   });
//   req.session.userInfo = user;
//   cb();
// };

// authRouter.route("apis/users/login").post(async function (req, res){
     
//         req.session.login(userInfo, (err)=>{
//             if (err) {return res.status(500).send("error logging in")}
//         })
    
// })



app.get('*', (req, res) => {
    const rootHtmlPath = path.resolve(__dirname, '..', 'public', 'index.html');
    res.sendFile(rootHtmlPath);
})

module.exports= app;