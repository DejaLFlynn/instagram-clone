const comments = require("express").Router();
const { checkFirebaseToken } = require("../middleware/Auth");
const {
  createComment,
  fetchCommentsForOne,
  deleteComment,
  commentsForPost,
  getCommentsByPost,
} = require("../queries/users/comments");
comments.post("/", createComment);
comments.get("/", fetchCommentsForOne);
comments.delete("/", deleteComment);
comments.get("/:id", commentsForPost);
comments.get("/:post_id", getCommentsByPost)
module.exports = comments;
