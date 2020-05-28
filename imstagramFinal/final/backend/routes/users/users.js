const users = require("express").Router();
const {
  createUser,
  allUsers,
  deleteUser,
  getUser,
} = require("../../queries/users/users");

users.post("/", createUser);
users.get("/", allUsers);
users.delete("/:id", deleteUser);
users.get("/:id", getUser);

module.exports = users;