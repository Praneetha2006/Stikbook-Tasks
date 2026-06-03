const posts = require("../data/posts");
const validatePost = require("../utils/validatePost");


// GET ALL POSTS WITH PAGINATION
const getAllPosts = (req, res) => {

    let { page = 1, limit = 5 } = req.query;

    page = parseInt(page);
    limit = parseInt(limit);

    if (page <= 0 || limit <= 0) {
        return res.status(400).json({
            message: "Page and limit must be greater than 0"
        });
    }

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    const paginatedPosts = posts.slice(startIndex, endIndex);

    if (paginatedPosts.length === 0) {
        return res.status(404).json({
            message: "No posts found"
        });
    }

    res.status(200).json({
        totalPosts: posts.length,
        totalPages: Math.ceil(posts.length / limit),
        currentPage: page,
        posts: paginatedPosts
    });
};


// GET SINGLE POST
const getPostById = (req, res) => {

    const id = parseInt(req.params.id);

    const post = posts.find(p => p.id === id);

    if (!post) {
        return res.status(404).json({
            message: "Post not found"
        });
    }

    res.status(200).json(post);
};


// CREATE POST
const createPost = (req, res) => {

    const { title, content, author } = req.body;

    const error = validatePost(title, content, author);

    if (error) {
        return res.status(400).json({
            message: error
        });
    }

    const newPost = {
        id: posts.length + 1,
        title,
        content,
        author,
        createdAt: new Date(),
        updatedAt: new Date()
    };

    posts.push(newPost);

    res.status(201).json({
        message: "Post created successfully",
        post: newPost
    });
};


// UPDATE POST
const updatePost = (req, res) => {

    const id = parseInt(req.params.id);

    const post = posts.find(p => p.id === id);

    if (!post) {
        return res.status(404).json({
            message: "Post not found"
        });
    }

    const { title, content, author } = req.body;

    const error = validatePost(title, content, author);

    if (error) {
        return res.status(400).json({
            message: error
        });
    }

    post.title = title;
    post.content = content;
    post.author = author;
    post.updatedAt = new Date();

    res.status(200).json({
        message: "Post updated successfully",
        post
    });
};


// DELETE POST
const deletePost = (req, res) => {

    const id = parseInt(req.params.id);

    const index = posts.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Post not found"
        });
    }

    posts.splice(index, 1);

    res.status(200).json({
        message: "Post deleted successfully"
    });
};


module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
};