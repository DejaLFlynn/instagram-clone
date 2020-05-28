const users = require("express").Router();
const {
  createUser,
  allUsers,
  deleteUser,
  getUser,
} = require("../../QueriesAll/users");

users.post("/", createUser);
users.get("/", allUsers);
users.delete("/:id", deleteUser);
users.get("/:id", getUser);

module.exports = users;
