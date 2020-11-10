const comments = require('express').Router();
const {
    createComment,
    fetchCommentsForOne,
    deleteComment,

} = require('../queries/users/comments');

comments.post("/:id", createComment);
comments.get("/:id", fetchCommentsForOne);
comments.delete("/", deleteComment);

module.exports = comments;