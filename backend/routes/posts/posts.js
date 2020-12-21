const posts = require('express').Router();
const {
    createPost,
    allPosts,
    deletePost,
    getPost,
    fetchAllForOne,
  } = require("../../queries/users/posts/posts");
  const { checkFirebaseToken } = require("../../middleware/Auth");
  posts.post("/", createPost);
  posts.get("/", allPosts);
  posts.delete("/:id", deletePost);
  posts.get("/", getPost);
  posts.get("/:id", checkFirebaseToken, fetchAllForOne)
  


module.exports = posts;