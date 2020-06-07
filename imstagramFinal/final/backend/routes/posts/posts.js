const posts = require('express').Router();
const {
    createPost,
    allPosts,
    deletePost,
    getPost,
  } = require("../../queries/users/posts/posts");
  
  posts.post("/:id", createPost);
  posts.get("/:id", allPosts);
  posts.delete("/:id", deletePost);
  posts.get("/", getPost);


module.exports = posts;