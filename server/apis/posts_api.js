const Posts = require('../models/Posts');
const axios = require('axios');
const moment = require('moment');

exports.index = (req, res) => {
    Posts
    .find()
    // .where('dateCreated').equals(req.date.day)
    .then((dbPost) => {
        res.json(dbPost)
    })
};

exports.createPost = (req, res) => {

    req.body.UserId = req.user.index;
    req.body.dateCreated = new Date(Date.now());
    

    var newPost = new Posts(req.body);

    newPost.save().then((dbPost) => {
        res.json(dbPost)
    })
};

exports.filterPosts = (req, res) => {
    var currentDate = new Date(Date.now());

    Posts
    .find().where('dateCreated').equals
};