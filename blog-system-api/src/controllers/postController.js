const Post = require("../models/Post");


// GET ALL POSTS
const getPosts = async (req, res) => {
  try {

    const posts = await Post.find()
      .populate("author")
      .sort({ createdAt: -1 });

    res.status(200).json(posts);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });
  }
};


// GET SINGLE POST
const getPostById = async (req, res) => {
  try {

    const post = await Post.findById(req.params.id)
      .populate("author");

    if (!post) {
      return res.status(404).json({
        message: "Post not found"
      });
    }

    res.status(200).json(post);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });
  }
};


// CREATE POST
const createPost = async (req, res) => {
  try {

    const post = await Post.create(req.body);

    res.status(201).json(post);

  } catch (error) {

    res.status(400).json({
      message: error.message
    });
  }
};


// UPDATE POST
const updatePost = async (req, res) => {
  try {

    const post = await Post.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!post) {
      return res.status(404).json({
        message: "Post not found"
      });
    }

    res.status(200).json(post);

  } catch (error) {

    res.status(400).json({
      message: error.message
    });
  }
};


// DELETE POST
const deletePost = async (req, res) => {
  try {

    const post = await Post.findByIdAndDelete(req.params.id);

    if (!post) {
      return res.status(404).json({
        message: "Post not found"
      });
    }

    res.status(200).json({
      message: "Post deleted successfully"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });
  }
};


// LIKE POST
const likePost = async (req, res) => {
  try {

    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        message: "Post not found"
      });
    }

    post.likes += 1;

    await post.save();

    res.status(200).json(post);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  likePost
};