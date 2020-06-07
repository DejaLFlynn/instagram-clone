const users = require("express").Router();
const {
  createUser,
  allUsers,
  deleteUser,
  getUser,
} = require("../../queries/users/users");
// const usersPosts = require('../nestedRoutes/nestedUsers')
users.post("/", createUser);
users.get("/", allUsers);
users.delete("/:id", deleteUser);
users.get("/:id", getUser);
// users.use('/', usersPosts)

module.exports = users;