const Post = require('../models/Posts');
const axios = require('axios');
const moment = require('moment');

exports.index = (req, res) => {
    console.log("index function of posts api called");
    Post
    .find({})
    // .where('dateCreated').equals(req.date.day)
    .then((dbPost) => {
        console.log(dbPost);
        res.json(dbPost)
    })

};

exports.createPost = (req, res) => {
    console.log("createPost function of posts api called");
    req.body.UserId = req.user.id;
    req.body.dateCreated = new Date(Date.now());
    

    var newPost = new Post(req.body);
    console.log(newPost);
    newPost.save().then((dbPost) => {
        res.json(dbPost)
    })
};

// exports.filterPosts = (req, res) => {
//     var today = ;

//     Posts
//     .find().where('dateCreated').equals
// };

// exports.filterPosts = (req, res) => {
//     var today = ;

//     Posts
//     .find().where('dateCreated').equals
// };