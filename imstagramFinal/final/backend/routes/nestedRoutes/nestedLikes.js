const postsLikes = require('express').Router({mergeParams: true});
const { addLike, explorerLikes } = require("../../queries/users/");

postsLikes.post("/", addLike);

postsLikes.get("/", explorerLikes)



module.exports = postsLikes;