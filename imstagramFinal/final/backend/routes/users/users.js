const users = require("express").Router();
const {
  createUser,
  allUsers,
  deleteUser,
  getUser,
} = require("../../queries/users/users");
 const {checkFirebaseToken} = require('../../middleware/Auth')
users.post("/", createUser);
users.get("/", 
checkFirebaseToken, 
allUsers);
users.get("/:id", getUser);
users.delete("/:id", deleteUser);
// users.use('/', usersPosts)

module.exports = users;