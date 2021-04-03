const express = require('express');
const router = express.Router();

const posts_api = require('../apis/posts_api');
const authCheck = require('../config/middleware/authCheck');

router.get('/', posts_api.index);

router.post('/new',  posts_api.createPost)

module.exports = router;