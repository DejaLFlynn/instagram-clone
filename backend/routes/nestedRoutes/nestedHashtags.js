const hashtagPosts = require('express').Router({mergeParams: true});
const { postsByHashtag } = require("../../queries/users/hashtags")

hashtagPosts.get("/", postsByHashtag);

module.exports = hashtagPosts;