const express = require("express");

const router = express.Router();

const {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  likePost
} = require("../controllers/postController");


router.get("/", getPosts);

router.get("/:id", getPostById);

router.post("/", createPost);

router.put("/:id", updatePost);

router.delete("/:id", deletePost);

router.put("/:id/like", likePost);

module.exports = router;