const comments = require('express').Router();
const {checkFirebaseToken} = require("../middleware/Auth")
const {
    createComment,
    fetchCommentsForOne,
    deleteComment,
    commentsForPost

} = require('../queries/users/comments');

comments.post("/:id", checkFirebaseToken, createComment);
comments.get("/:id", checkFirebaseToken, fetchCommentsForOne);
comments.delete("/", deleteComment);
comments.get("/:post_id", checkFirebaseToken, commentsForPost)
module.exports = comments;