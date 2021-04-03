// "use strict";

// const MongoStore = require('connect-mongo');
// // import { mongoStoreFactory } from importMong;
// const configDB = require('./config/databaseCreds');
// const mongoose = require('mongoose');
// const authRouter = require('./routes');
// const config = require('./config/extra-config');


// // export default function sessionManagementConfig(app){

// // const MongoStore = mongoStoreFactory(session);

// app.use(session({ 
//   store: MongoStore.create({
//     mongoUrl: mongoose.connect(configDB.url, {useNewUrlParser: true}),
//     ttl: (1 * 60 * 60)
//   }),
//   secret: config.sessionKey, 
//   resave: true, 
//   saveUninitialized: true,
//   cookie: {
//     path: '/',
//     maxAge: 1800000,
//     secure: true
//   },
//   name:"id"
// }));

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
// // }