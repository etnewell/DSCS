const express = require('express');
const router = express.router();

const posts_api = require('../apis/posts_api');
const authCheck = require('../config/middleware/authCheck');

router.get('/', authCheck, posts_api.popular);

router.post('/new', authCheck, posts_api.createPost)

module.exports = router;