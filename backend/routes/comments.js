const comments = require("express").Router();
const { checkFirebaseToken } = require("../middleware/Auth");
const {
  createComment,
  fetchCommentsForOne,
  deleteComment,
  commentsForPost,
} = require("../queries/users/comments");
comments.post("/:id", checkFirebaseToken, createComment);
comments.get("/", fetchCommentsForOne);
comments.delete("/", deleteComment);
comments.get("/:id", commentsForPost);
module.exports = comments;
