const comments = require("express").Router();
const { checkFirebaseToken } = require("../middleware/Auth");
const {
 
  fetchCommentsForOne,
  deleteComment,
  commentsForPost,
  getAllCommentsByPostId,
  // getCommentsByPost,
} = require("../queries/users/comments");
comments.get("/", fetchCommentsForOne);
comments.delete("/", deleteComment);
comments.get("/:id", commentsForPost);

comments.get("/:post_id/posts", getAllCommentsByPostId)
// comments.get("/:post_id", getCommentsByPost)
module.exports = comments;
