const users = require("express").Router();
const {
  createUser,
  allUsers,
  deleteUser,
  getUser,
} = require("../../queries/users/users");
// const getUsersPosts = require('./nestedUsers')
users.post("/", createUser);
users.get("/", allUsers);
users.delete("/:id", deleteUser);
users.get("/:id", getUser);
// users.use('/', getUsersPosts)

module.exports = users;