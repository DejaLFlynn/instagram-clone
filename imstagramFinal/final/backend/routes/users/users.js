const users = require("express").Router();
const {
  createUser,
  allUsers,
  deleteUser,
  getUser,
} = require("../../queries/users/users");

users.post("/", createUser);
users.get("/", allUsers);
users.get("/:id", getUser);
users.delete("/:id", deleteUser);
// users.use('/', usersPosts)

module.exports = users;