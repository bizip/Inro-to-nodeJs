const express = require('express');
const router = express.Router();
const postController = require('../controllers/posts');

// Get landing pages
router.get('/', postController.getLanding);
// Get all posts
router.get('/posts', postController.getPosts);
// create post
router.post('/posts', postController.createPosts);
// Get single post
router.get('/posts/:id', postController.getOnePosts);
// Upadte post
router.patch('/posts/:id/update', postController.updateOnePosts);
// Delete post
router.delete('/posts/:id/delete', postController.deleteOnePosts);
module.exports = router;