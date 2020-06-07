const posts = require('express').Router();
const {
    createPost,
    allPosts,
    deletePost,
    getPost,
  } = require("../../queries/users/posts/posts");
  
  posts.post("/", createPost);
  posts.get("/", allPosts);
  posts.delete("/:id", deletePost);
  // posts.get("/:id", getPost);


module.exports = posts;