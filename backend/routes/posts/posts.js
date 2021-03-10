const posts = require('express').Router();
const {
    createPost,
    allPosts,
    deletePost,
    getPost,
    fetchAllForOne,
    getCommentsByPost,
    userCommentForPost,
  
  } = require("../../queries/users/posts/posts");
  const { checkFirebaseToken } = require("../../middleware/Auth");
const { post } = require('../comments');
const {createNewComment} = require('../../queries/users/comments')
  // posts.post("/", createPost);
  posts.post("/",  createPost);
  posts.post("/:id", userCommentForPost);
  posts.get("/", allPosts);
  posts.delete("/:id", deletePost);
  // posts.get("/", getPost);
  posts.post("/:id/comments", createNewComment);
  posts.get('/:id/comments', getCommentsByPost);
  posts.get("/:user_id", checkFirebaseToken, fetchAllForOne)
module.exports = posts;