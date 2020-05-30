const hashtags = require('express').Router();
const { searchHashtag } = require("../../Queries/HashtagQueries");


hashtags.get("/", searchHashtag)

module.exports = hashtags