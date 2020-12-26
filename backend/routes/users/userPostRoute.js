
const express = require("express");
const userPostRoute  = express.Router({ mergeParams: true });
const {
  getUserPosts,
} = require("../../queries/users/usersPosts");

userPostRoute.get("/", getUserPosts);

module.exports = userPostRoute;