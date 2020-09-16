const express = require('express');
const router = express.Router();
const postController = require('../controllers/posts');

// Get /posts
router.get('/posts', postController.getPosts);
// post /posts
router.post('/post', postController.createPosts);
module.exports = router;