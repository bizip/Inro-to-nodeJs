exports.getPosts = (req, res, next) => {
    res.status(200).json({
        posts: [{ title: 'What is a blog?', content: 'A blog is a site where some one can post blabla bla' }]
    });
};

exports.createPosts = (req, res, next) => {
    let title = req.body.title;
    let content = req.body.content;
    res.status(201).json({
        message: "new post created successful",
        post: [{
            id: new Date().toISOString(),
            title: title,
            content: content
        }]
    });
};