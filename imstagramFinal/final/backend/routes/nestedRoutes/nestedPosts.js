const imageHashtags = require('express').Router({mergeParams: true});
const { createHashtag } = require("../../queries/users/hashtags");


imageHashtags.post("/", createHashtag);


module.exports = imageHashtags;