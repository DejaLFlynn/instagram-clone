const postsLikes = require('express').Router({mergeParams: true});
const { addLike, topPostsLikes } = require("../../queries/users/");

postsLikes.post("/", addLike);

postsLikes.get("/", topPostsLikes)



module.exports = postsLikes;