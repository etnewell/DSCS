const mongoose = require('mongoose');
const configDB = require('./databaseCreds');
mongoose.connect(configDB.url, {
    useNewUrlParser: true,    
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once("open", function (){
    console.log("Mongoose connection successful.")
})
