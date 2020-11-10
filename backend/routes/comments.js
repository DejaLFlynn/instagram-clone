const comments = require('express').Router();
const {
    createComment,
    fetchCommentsForOne,
    deleteComment,

} = require('../queries/users/comments');

comments.post("/", createComment);
comments.get("/", fetchCommentsForOne);
comments.delete("/", deleteComment);

module.exports = comments;