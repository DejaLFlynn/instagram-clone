const hashtags = require('express').Router();
const { searchHashtag } = require("../../queries/users/hashtags");
const hashtagsPostRouter = require("../nestedRoutes/nestedHashtags")
hashtags.use("/:id/posts", hashtagsPostRouter)

hashtags.get("/", searchHashtag)

module.exports = hashtags