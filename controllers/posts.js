const Posts = require('../models/posts');
const { post } = require('../routes/posts');
exports.getLanding = (req, res, next) => {
    res.json({
        message: "this will be landing page soon"
    });
}

//get all the post
exports.getPosts = (req, res, next) => {
    Posts.find().then(result => {
        res.json({
            message: "list of all posts",
            data: result
        });
    });

};
//create one post
exports.createPosts = (req, res, next) => {
    res.json({
        message: "ready to post",
        data: []
    });
};
//get one post
exports.getOnePosts = (req, res, next) => {
    res.json({
        message: "Now you can get one post",
        data: {
            id: req.params.id,
            content: "you made it"
        }
    });
};

//update one post
exports.updateOnePosts = (req, res, next) => {
    res.json({
        message: "Now you can update one post",
        data: {
            id: req.params.id,
            content: "you ere trying to update this one"
        }
    });
};

//delete one post
exports.deleteOnePosts = (req, res, next) => {
    res.json({
        message: "Now you can delete one post",
        data: {
            id: req.params.id,
            content: "you ere trying to delete this one"
        }
    });
};