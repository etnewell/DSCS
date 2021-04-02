'use strict';

const mongoose = require('mongoose');

var postSchema = mongoose.Schema({
    title: {
        type: String,
        min: [1, 'Too few characters'],
        max: 100,
        required: [true, 'Please enter a title.']
    },
    textContent: {
        type: String,
        min: [3, 'Please enter a longer description'],
        required: [true, 'Please enter a description']
    },
    definitionsUsed: {
        type: String,
        min: [0, ''],
        required: [false, 'Adding definitions makes your writing more clear']
    },
    tags: {
        type: String,
        min: [0, ''],
        required: [false, 'Adding tags makes your post relevant to other posts']
    },
    UserId: {
        type: String
    },
    postId : mongoose.ObjectId(),
    dateCreated : {
        type: Date,
        required: [true, 'There seems to be an error in finding the date.']
    }
})

module.exports = mongoose.model('Post', postSchema);